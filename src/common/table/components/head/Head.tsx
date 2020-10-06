import React, {ComponentType, ReactComponentElement, useCallback} from 'react'
import {TableHead as MaterialTableHead} from '@material-ui/core'

import {Column, SortDirection} from '../../interfaces'
import {SortState, OrderByType} from '../../interfaces/local'
import {HeadRowProps} from './HeadRow'
import {HeadCellProps} from './HeadCell'
import {SortLabelProps} from './SortLabel'

export interface HeadProps<RowData extends object> extends SortState<RowData> {
    HeadRow: ComponentType<HeadRowProps>
    HeadCell: ComponentType<HeadCellProps>
    SortLabel: ComponentType<SortLabelProps>
    columns?: Column<RowData>[]
    tableSortable?: boolean
    onChangeSort: (sortData: SortState<RowData>) => void
}

const Head = <RowData extends object>(props: HeadProps<RowData>): ReactComponentElement<any> => {
    const {columns, onChangeSort, orderDirection, orderBy, tableSortable, HeadRow, HeadCell, SortLabel} = props

    const changeSort = useCallback((field: OrderByType<RowData>) => () => {
        const isAsc = orderBy === field && orderDirection === SortDirection.ASC

        const data = {
            orderBy: field,
            orderDirection: isAsc ? SortDirection.DESC : SortDirection.ASC
        }

        onChangeSort(data)
    }, [orderBy, orderDirection, onChangeSort])

    return (
        <MaterialTableHead>
            <HeadRow>
                {columns?.map(({title, width, align, sortable = false, field, defaultSort}, key) => (
                    <HeadCell key={key} width={width} align={align} sortDirection={orderBy === field ? orderDirection : false}>
                        {tableSortable && field && sortable ? <SortLabel active={orderBy === field}
                                                    onClick={changeSort(field as OrderByType<RowData>)}
                                                    direction={orderBy === field ? orderDirection : SortDirection.ASC}>
                            {title}
                        </SortLabel> : title}
                    </HeadCell>
                ))}
            </HeadRow>
        </MaterialTableHead>
    )
}

export default Head