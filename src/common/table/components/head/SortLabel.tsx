import React from 'react'
import TableSortLabel, {TableSortLabelProps} from '@material-ui/core/TableSortLabel'

export type SortLabelProps = Partial<TableSortLabelProps>

const SortLabel: React.FC<SortLabelProps> = ({children, ...restProps}) => {
    return (
        <TableSortLabel {...restProps}>
            {children}
        </TableSortLabel>
    )
}

export default SortLabel