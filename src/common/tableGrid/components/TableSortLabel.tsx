import React from 'react'
import MaterialSortLabel, {TableSortLabelProps as MaterialTableSortLabelProps} from '@material-ui/core/TableSortLabel'

export type TableSortLabelProps = Partial<MaterialTableSortLabelProps>

const TableSortLabel: React.FC<TableSortLabelProps> = ({children, ...restProps}) => {
    return (
        <MaterialSortLabel {...restProps}>
            {children}
        </MaterialSortLabel>
    )
}

export default TableSortLabel