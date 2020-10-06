import React from 'react'
import TableRow, {TableRowProps} from '@material-ui/core/TableRow'

export type RowProps = TableRowProps

const Row: React.FC<RowProps> = ({children, ...restProps}) => {
    return (
        <TableRow {...restProps}>
            {children}
        </TableRow>
    )
}

export default Row