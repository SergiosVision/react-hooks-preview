import React from 'react'

import TableRow, {TableRowProps} from '../TableRow'

export interface TableBodyRowProps extends TableRowProps {
    pointer?: boolean
}

const cx = require('classnames/bind').bind(require('../../styles/body/row.module.sass'))

const TableBodyRow: React.FC<TableBodyRowProps> = ({children, pointer, className, ...restProps}) => {
    return (
        <TableRow className={cx('body-row', className, {pointer})} {...restProps}>
            {children}
        </TableRow>
    )
}

export default TableBodyRow