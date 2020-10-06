import React from 'react'

import TableRow, {TableRowProps} from '../TableRow'

export interface TableHeadRowProps extends TableRowProps {}

const TableHeadRow: React.FC<TableHeadRowProps> = ({children, ...restProps}) => {
    return (
        <TableRow {...restProps}>
            {children}
        </TableRow>
    )
}

export default TableHeadRow