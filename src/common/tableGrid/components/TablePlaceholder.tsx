import React, {HTMLAttributes, ReactNode} from 'react'

export interface TablePlaceholderProps extends HTMLAttributes<HTMLDivElement> {
    loadingText?: ReactNode
}

const cx = require('classnames/bind').bind(require('../styles/table-placeholder.module.sass'))

const TablePlaceholder: React.FC<TablePlaceholderProps> = props => {
    const {children = 'Список пуст', className, ...restProps} = props

    return (
        <div className={cx('placeholder', className)} {...restProps}>
            {children}
        </div>
    )
}

export default TablePlaceholder