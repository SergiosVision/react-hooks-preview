import React, {ComponentType, HTMLAttributes, memo, ReactComponentElement, ReactElement, useMemo} from 'react'

import {Column} from '../../interfaces'
import {generateGrid} from '../../helpers/local'
import {TableBodyRowProps} from './TableBodyRow'
import {TableBodyCellProps} from './TableBodyCell'

export interface TableBodyProps<RowData extends object> {
    data: any[]
    columns: Column<RowData>[]
    TableBodyRow: ComponentType<TableBodyRowProps>
    TableBodyCell: ComponentType<TableBodyCellProps>
    onRowClick?: (data: RowData) => void
}

const renderValueByType = (data: any) => {
    switch (typeof data) {
        case 'string':
            return data
        case 'number':
            return data.toString()
        case 'boolean':
            return data.toString()
        default:
            return null
    }
}

const cx = require('classnames/bind').bind(require('../../styles/body/table-body.module.sass'))

const TableBody = <RowData extends object = {}>(props: TableBodyProps<RowData> & HTMLAttributes<HTMLDivElement>): ReactComponentElement<any> => {
    const {data, columns, onRowClick, TableBodyRow, TableBodyCell, className, ...restProps} = props

    const grid = useMemo(() => generateGrid(columns), [columns])

    return (
        <div {...restProps} className={cx('body', className)}>
            {data.map((dataItem, dataKey) => (
                <TableBodyRow style={grid} key={dataKey} onClick={onRowClick ? () => onRowClick(dataItem) : undefined} pointer={!!onRowClick}>
                    {columns.map(({render, field, align}, colKey) => (
                        <TableBodyCell key={colKey} align={align}>
                            {render ? render(dataItem) : renderValueByType(dataItem[field])}
                        </TableBodyCell>
                    ))}
                </TableBodyRow>
            ))}
        </div>
    )
}

export default memo(TableBody) as <RowData extends object>(p: TableBodyProps<RowData> & HTMLAttributes<HTMLDivElement>) => ReactElement