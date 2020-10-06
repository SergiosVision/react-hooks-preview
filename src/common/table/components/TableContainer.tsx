import React from 'react'
import Table, {TableProps} from '@material-ui/core/Table'

export type TableContainerProps = Partial<TableProps>

const TableContainer: React.FC<TableContainerProps> = props => {
    const {children, ...restProps} = props

    return (
        <Table {...restProps}>
            {children}
        </Table>
    )
}

export default TableContainer