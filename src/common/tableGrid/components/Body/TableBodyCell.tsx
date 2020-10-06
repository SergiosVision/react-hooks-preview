import React from 'react'

import TableCell, {TableCellProps} from '../TableCell'

export interface TableBodyCellProps extends TableCellProps {}

const TableBodyCell: React.FC<TableBodyCellProps> = ({children, className, ...restProps}) => {
    return (
        <TableCell className={className} {...restProps}>
            {children}
        </TableCell>
    )
}

export default TableBodyCell