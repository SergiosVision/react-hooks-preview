import React, {HTMLAttributes} from 'react'

export interface TableRowProps extends HTMLAttributes<HTMLDivElement> {}

const cx = require('classnames/bind').bind(require('../styles/table-row.module.sass'))

const Row: React.FC<TableRowProps> = ({children, className, ...restProps}) => {
    return (
        <div className={cx('row', className)} {...restProps}>
            {children}
        </div>
    )
}

export default Row