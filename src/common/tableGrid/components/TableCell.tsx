import React, {HTMLAttributes} from 'react'

import {ColumnAlignment} from '../interfaces/local'

export interface TableCellProps extends HTMLAttributes<HTMLDivElement> {
    align?: ColumnAlignment
}

const cx = require('classnames/bind').bind(require('../styles/table-cell.module.sass'))

const classByAlignment = (align?: ColumnAlignment): string | undefined => {
    switch (align) {
        case 'left':
            return 'left'
        case 'center':
            return 'center'
        case 'right':
            return 'right'
        default:
            return undefined
    }
}

const TableCell: React.FC<TableCellProps> = ({children, className, align, ...restProps}) => {
    return (
        <div className={cx('cell', className, classByAlignment(align))} {...restProps}>
            {children}
        </div>
    )
}

export default TableCell