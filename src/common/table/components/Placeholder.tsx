import React from 'react'

const cx = require('classnames/bind').bind(require('../styles/placeholder.module.sass'))

export interface PlaceholderProps {
    className?: string
}

const Placeholder: React.FC<PlaceholderProps> = ({children = <p>Нет данных для отображения.</p>, className}) => {
    return (
        <div className={cx(className, 'wrapper')}>
            {children}
        </div>
    )
}

export default Placeholder