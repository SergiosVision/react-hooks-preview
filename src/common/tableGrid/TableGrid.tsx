import React, {
    Ref, useEffect, useState, forwardRef,
    useImperativeHandle, useRef, ReactElement,
    useLayoutEffect, useMemo
} from 'react'
import {omit} from 'lodash'

import {TableGridProps, TableForwardRefProps, Query} from './interfaces'
import {QueryLocal, SortState} from './interfaces/local'
import {setCurrentPage, setPageByDeleteCount} from './helpers/local'
import defaultComponents from './components/defaultComponents'

interface Props<RowData extends object> extends TableGridProps<RowData> {}

const TableGrid = <RowData extends object = {}>(props: Props<RowData>, ref: Ref<TableForwardRefProps>) => {
    const {columns, data, onRowClick, isLoading, sortable = true, pagingOptions, components, maxBodyHeight, placeholder} = props

    const {
        TableMainContainer, TableContainerInner, TableContainer,
        TableHead, TableHeadRow, TableHeadCell, TableSortLabel,
        TableBody, TableBodyRow, TableBodyCell, TablePagination,
        TablePlaceholder, TableLoader
    } = {...defaultComponents, ...components}

    const mainContainerRef = useRef<HTMLDivElement | null>(null)
    const mainContainerRefCurrent = mainContainerRef.current

    const paginationRef = useRef<HTMLDivElement | null>(null)
    const paginationRefCurrent = paginationRef.current

    const bodyWrapperRef = useRef<HTMLDivElement | null>(null)
    const bodyWrapperRefCurrent = bodyWrapperRef.current

    const [bodyIndentValue, setBodyIndentValue] = useState<number>(0)

    const [stateValues, setStateValues] = useState<QueryLocal<RowData>>(() => {
        let initialState: QueryLocal<RowData> = {
            data: [],
            page: 0,
            rowsPerPage: 20,
            totalCount: 0,
            orderBy: undefined,
            orderDirection: undefined
        }

        if (sortable) {
            const foundColumn = columns && columns.find(col => col.defaultSort && (col.sortable === undefined || col.sortable))

            if (foundColumn) {
                initialState.orderBy = foundColumn?.field

                initialState.orderDirection = foundColumn?.defaultSort
            }
        }

        if (pagingOptions?.rowsPerPage) {
            initialState.rowsPerPage = pagingOptions.rowsPerPage
        }

        return initialState
    })

    const changePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number): void => {
        setDataWrapper({...stateValues, page})
    }

    const changeSort = (sortData: SortState<RowData>) => {
        setDataWrapper({...stateValues, ...sortData})
    }

    const setDataWrapper = async (query: Query<RowData>) => {
        const responseData = await data(omit(query, 'data'))

        const curPage = setCurrentPage(responseData.page, query.rowsPerPage, responseData.totalCount)

        setStateValues({...query, data: responseData.data, page: curPage, totalCount: responseData.totalCount})
    }

    const onDeleteRefresh = (count: number): void => {
        let dataQuery = {...stateValues}

        if (count) {
            dataQuery.page = setPageByDeleteCount(stateValues.page, stateValues.data.length - count)
        }

        setDataWrapper(dataQuery)
    }

    const tableRefresh = () => {
        setDataWrapper(stateValues)
    }

    const setMaxBodyHeight = useMemo(() => {
        if (maxBodyHeight) {
            if (typeof maxBodyHeight === 'string') {
                return maxBodyHeight
            }

            return maxBodyHeight(bodyIndentValue)
        }
    }, [bodyIndentValue])


    const renderPlaceholder = useMemo(() => {
        if (typeof placeholder === 'function') {
            return placeholder(stateValues.data.length !== 0)
        }

        return placeholder
    }, [stateValues.data])

    useImperativeHandle(ref, () => ({
        containerRef: mainContainerRefCurrent,
        tableRefresh,
        onDeleteRefresh
    }))

    useEffect(() => {
        (async () => {
           await setDataWrapper(stateValues)
        })()
    }, [])

    useLayoutEffect(() => {
        const offsetValue: number = [
            mainContainerRefCurrent?.offsetTop || 0,
            paginationRefCurrent?.offsetHeight || 0,
            bodyWrapperRefCurrent?.offsetTop || 0
        ].reduce((accumulator, currentValue) => accumulator + currentValue)

        setBodyIndentValue(offsetValue)
    }, [mainContainerRefCurrent, paginationRefCurrent, bodyWrapperRefCurrent, stateValues.data])

    return (
        <TableMainContainer ref={mainContainerRef}>
            <TableContainerInner>
                <TableContainer>
                    <TableHead<RowData> columns={columns}
                                        orderDirection={stateValues.orderDirection}
                                        orderBy={stateValues.orderBy}
                                        tableSortable={sortable}
                                        TableHeadRow={TableHeadRow}
                                        TableHeadCell={TableHeadCell}
                                        TableSortLabel={TableSortLabel}
                                        onChangeSort={changeSort}/>

                    <div ref={bodyWrapperRef}>
                        {stateValues.data.length !== 0 && (
                            <TableBody<RowData> columns={columns}
                                                data={stateValues.data}
                                                TableBodyRow={TableBodyRow}
                                                TableBodyCell={TableBodyCell}
                                                style={{maxHeight: setMaxBodyHeight}}
                                                onRowClick={onRowClick}/>
                        )}
                    </div>

                </TableContainer>
                {stateValues.data.length === 0 && <TablePlaceholder children={renderPlaceholder}/>}
            </TableContainerInner>

            <TablePagination onChangePage={changePage}
                             ref={paginationRef}
                             rowsPerPage={stateValues.rowsPerPage}
                             count={stateValues.totalCount}
                             isHideOnSinglePage={pagingOptions?.isHideOnSinglePage}
                             page={stateValues.page}/>
            {isLoading && <TableLoader/>}
        </TableMainContainer>
    )
}

export default forwardRef(TableGrid) as <RowData extends object>(p: Props<RowData> & {ref?: Ref<TableForwardRefProps>}) => ReactElement