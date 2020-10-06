import React, {
    useMemo,
    memo,
    useCallback,
    ComponentType,
    HTMLAttributes,
    ReactComponentElement,
    ReactElement
} from 'react'

import {Column, SortDirection} from '../../interfaces'
import {generateGrid} from '../../helpers/local'
import {OrderByType, SortState} from '../../interfaces/local'
import {TableHeadRowProps} from './TableHeadRow'
import {TableHeadCellProps} from './TableHeadCell'
import {TableSortLabelProps} from '../TableSortLabel'

export interface TableHeadProps<RowData extends object> extends SortState<RowData> {
    columns: Column<any>[]
    TableHeadRow: ComponentType<TableHeadRowProps>
    TableHeadCell: ComponentType<TableHeadCellProps>
    TableSortLabel: ComponentType<TableSortLabelProps>
    tableSortable?: boolean
    onChangeSort: (sortData: SortState<RowData>) => void
}

const TableHead = <RowData extends object = {}>(props: TableHeadProps<RowData> & HTMLAttributes<HTMLDivElement>): ReactComponentElement<any> => {
    const {columns, onChangeSort, tableSortable, orderBy, orderDirection, TableHeadRow, TableHeadCell, TableSortLabel, style, ...restProps} = props

    const grid = useMemo(() => generateGrid(columns), [columns])

    const changeSort = useCallback((field: OrderByType<RowData>) => () => {
        const isAsc = orderBy === field && orderDirection === SortDirection.ASC

        const data = {
            orderBy: field,
            orderDirection: isAsc ? SortDirection.DESC : SortDirection.ASC
        }

        onChangeSort(data)
    }, [orderBy, orderDirection, onChangeSort])

    return (
        <TableHeadRow {...restProps} style={{...grid, ...style}}>
            {columns.map(({field, sortable = false, title, align}, key) => (
                <TableHeadCell key={key} align={align}>
                    {tableSortable && field && sortable ? (
                        <TableSortLabel active={orderBy === field}
                                        onClick={changeSort(field as OrderByType<RowData>)}
                                        direction={orderBy === field ? orderDirection : SortDirection.ASC}>
                            {title}
                        </TableSortLabel>
                    ) : title}
                </TableHeadCell>
            ))}
        </TableHeadRow>
    )
}

export default memo(TableHead) as <RowData extends object>(p: TableHeadProps<RowData> & HTMLAttributes<HTMLDivElement>) => ReactElement