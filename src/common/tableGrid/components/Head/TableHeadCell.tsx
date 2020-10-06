import React from 'react'

import TableCell, {TableCellProps} from '../TableCell'

export interface TableHeadCellProps extends TableCellProps {}

const TableHeadCell: React.FC<TableHeadCellProps> = ({children, ...restProps}) => {
    return (
        <TableCell {...restProps}>
            {children}
        </TableCell>
    )
}

export default TableHeadCell