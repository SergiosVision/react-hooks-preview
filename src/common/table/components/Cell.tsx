import React from 'react'
import TableCell, {TableCellProps} from '@material-ui/core/TableCell'

export type CellProps = TableCellProps

const Cell: React.FC<CellProps> = ({children, ...restProps}) => {
    return (
        <TableCell {...restProps}>
            {children}
        </TableCell>
    )
}

export default Cell