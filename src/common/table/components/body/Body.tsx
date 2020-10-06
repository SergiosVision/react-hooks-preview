import React, {ComponentType, ReactComponentElement} from 'react'
import {TableBody as MaterialTableBody} from '@material-ui/core'

import {Column} from '../../interfaces'
import {BodyRowProps} from './BodyRow'
import {BodyCellProps} from './BodyCell'

const cx = require('classnames')

export interface BodyProps<RowData extends object> {
    data: any[]
    BodyRow: ComponentType<BodyRowProps>
    BodyCell: ComponentType<BodyCellProps>
    onRowClick?: (data: RowData) => void
    columns?: Column<RowData>[]
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

const Body = <RowData extends object>(props: BodyProps<RowData>): ReactComponentElement<any> => {
    const {data, columns, onRowClick, BodyRow, BodyCell} = props

    return (
        <MaterialTableBody>
            {data.map((dataItem, dataKey) => (
                <BodyRow key={dataKey} onClick={onRowClick ? () => onRowClick(dataItem) : undefined} className={cx({'pointer': !!onRowClick})}>
                    {columns?.map(({field, render, width, align}, columnKey) => (
                        <BodyCell key={columnKey} width={width} align={align}>
                            {render ? render(dataItem) : renderValueByType(dataItem[field])}
                        </BodyCell>
                    ))}
                </BodyRow>
            ))}
        </MaterialTableBody>
    )
}

export default Body