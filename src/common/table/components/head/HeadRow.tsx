import React from 'react'

import Row, {RowProps} from '../Row'

export interface HeadRowProps extends RowProps {}

const HeadRow: React.FC<HeadRowProps> = ({children, ...restProps}) => {
    return (
        <Row {...restProps}>
            {children}
        </Row>
    )
}

export default HeadRow