import React from 'react'

import Cell, {CellProps} from '../Cell'

export interface BodyCellProps extends CellProps {}

const BodyCell: React.FC<BodyCellProps> = ({children, ...restProps}) => {
    return (
        <Cell {...restProps}>
            {children}
        </Cell>
    )
}

export default BodyCell