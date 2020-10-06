import React from 'react'

interface Props {
    className?: string
    classNameContent?: string
}

const cx = require('classnames')

const Card: React.FC<Props> = ({children, className, classNameContent}) => {
    return (
        <div className={cx('card', className)}>
            <div className={cx('card-content', classNameContent)}>
                {children}
            </div>
        </div>
    )
}

export default Card