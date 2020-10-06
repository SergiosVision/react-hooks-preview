import React from 'react'

import Cell, {CellProps} from '../Cell'

export interface HeadCellProps extends CellProps {}

const HeadCell: React.FC<HeadCellProps> = ({children, ...restProps}) => {
    return (
        <Cell {...restProps}>
            {children}
        </Cell>
    )
}

export default HeadCell