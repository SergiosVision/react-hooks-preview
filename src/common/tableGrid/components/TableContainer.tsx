import React, {HTMLAttributes} from 'react'

export interface TableContainerProps extends HTMLAttributes<HTMLDivElement> {}

const TableContainer: React.FC<TableContainerProps> = ({children, ...restProps}) => {
    return (
        <div {...restProps}>
            {children}
        </div>
    )
}

export default TableContainer