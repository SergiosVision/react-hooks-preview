import React, {forwardRef, PropsWithChildren} from 'react'

export interface TableMainContainerProps {}

const cx = require('classnames/bind').bind(require('../styles/table-main-container.module.sass'))

const TableMainContainer = forwardRef<HTMLDivElement, PropsWithChildren<TableMainContainerProps>>(({children}, ref) => {
    return (
        <div className={cx('container')} ref={ref}>
            {children}
        </div>
    )
})

export default TableMainContainer