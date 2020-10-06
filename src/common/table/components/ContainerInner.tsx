import React from 'react'
import TableContainer, {TableContainerProps} from '@material-ui/core/TableContainer'

export type ContainerInnerProps = Partial<TableContainerProps>

const ContainerInner: React.FC = ({children, ...resetProps}) => {
    return (
        <TableContainer {...resetProps}>
            {children}
        </TableContainer>
    )
}

export default ContainerInner