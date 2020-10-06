import React from 'react'

import Row, {RowProps} from '../Row'

export interface BodyRowProps extends RowProps {}

const BodyRow: React.FC<BodyRowProps> = ({children, ...restProps}) => {
    return (
        <Row {...restProps}>
            {children}
        </Row>
    )
}

export default BodyRow