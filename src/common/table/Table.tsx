import React, {
    ReactElement, useEffect, useLayoutEffect, useRef, useState,
    forwardRef, useImperativeHandle, Ref, useMemo
} from 'react'
import {omit} from 'lodash'

import {SortState, QueryLocal} from './interfaces/local'
import {Query, TableForwardRefProps, TableProps} from './interfaces'
import {setCurrentPage, setPageByDeleteCount} from './helpers/local'
import defaultComponents from './defaultComponents'

interface Props<RowData extends object> extends TableProps<RowData> {}

const Table = <RowData extends object = {}>(props: Props<RowData>, ref: Ref<TableForwardRefProps>) => {
    const {columns, pagingOptions, onRowClick, isLoading, sortable = true, data, components} = props

    const {
        MainContainer, ContainerInner, TableContainer,
        Head, HeadRow, HeadCell, SortLabel, Body,
        BodyRow, BodyCell, Pagination, Loader,
        Placeholder
    } = {...defaultComponents, ...components}

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

    const [heightIndent, setHeightIndent] = useState<number>(0)

    const paperRef = useRef<HTMLDivElement | null>(null)
    const paperRefCurrent = paperRef.current

    const pagingRef = useRef<HTMLDivElement | null>(null)
    const pagingRefCurrent = pagingRef.current

    const hidePaging = useMemo(() => pagingOptions.isHideOnSinglePage && stateValues.totalCount <= stateValues.rowsPerPage, [stateValues.totalCount, stateValues.rowsPerPage, pagingOptions.isHideOnSinglePage])

    const changePage = (event: React.MouseEvent<HTMLButtonElement> | null, page: number): void => {
        setDataWrapper({...stateValues, page})
    }

    const changeSort = (sortData: SortState<RowData>) => {
        setDataWrapper({...stateValues, ...sortData})
    }

    useImperativeHandle(ref, () => ({
        containerRef: paperRef.current,
        tableRefresh,
        onDeleteRefresh
    }))

    const onDeleteRefresh = (count: number): void => {
        let dataQuery = {...stateValues}

        if (count) {
            dataQuery.page = setPageByDeleteCount(stateValues.page, stateValues.data.length - count)
        }

        setDataWrapper(dataQuery)
    }

    const tableRefresh = (): void => {
        setDataWrapper(stateValues)
    }

    const setDataWrapper = async (query: Query<RowData>): Promise<void> => {
        if (data) {
            const rData = await data(omit(query, 'data'))

            const curPage = setCurrentPage(rData.page, query.rowsPerPage, rData.totalCount)

            setStateValues({...query, data: rData.data, page: curPage, totalCount: rData.totalCount})
        }
    }

    useLayoutEffect(() => {
        if (paperRefCurrent) {
            let height: number = paperRefCurrent.offsetTop

            if (pagingRefCurrent) {
                height = height + pagingRefCurrent.offsetHeight
            }

            setHeightIndent(height)
        }
    }, [paperRefCurrent, hidePaging, pagingRefCurrent, stateValues.data])

    useEffect(() => {
        (async () => {
            await setDataWrapper(stateValues)
        })()
    }, [])

    return (
        <MainContainer ref={paperRef}>
            <ContainerInner style={{maxHeight: `calc(100vh - ${heightIndent}px)`}}>
                <TableContainer stickyHeader aria-label='sticky table'>
                    <Head<RowData> columns={columns}
                                   orderDirection={stateValues.orderDirection}
                                   orderBy={stateValues.orderBy}
                                   tableSortable={sortable}
                                   HeadRow={HeadRow}
                                   HeadCell={HeadCell}
                                   SortLabel={SortLabel}
                                   onChangeSort={changeSort}/>

                    {stateValues.data.length !== 0 && <Body<RowData> data={stateValues.data}
                                   onRowClick={onRowClick}
                                   BodyRow={BodyRow}
                                   BodyCell={BodyCell}
                                   columns={columns}/>}
                </TableContainer>
                {stateValues.data.length === 0 && <Placeholder/>}
            </ContainerInner>

            <Pagination onChangePage={changePage}
                        rowsPerPage={stateValues.rowsPerPage}
                        ref={pagingRef}
                        count={stateValues.totalCount}
                        page={stateValues.page}/>
            {isLoading && <Loader/>}
        </MainContainer>
    )
}

export default forwardRef(Table) as <RowData extends object = {}>(p: Props<RowData> & {ref?: Ref<TableForwardRefProps>}) => ReactElement