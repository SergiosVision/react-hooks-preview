import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const cx = require('classnames/bind').bind(require('../styles/table-loader.module.sass'))

export interface TableLoaderProps {
    classNameContainer?: string
    classNameProgress?: string
}

const TableLoader: React.FC<TableLoaderProps> = ({classNameProgress, classNameContainer}) => {
    return (
        <div className={cx('wrapper', classNameContainer)}>
            <CircularProgress className={classNameProgress}/>
        </div>
    )
}

export default TableLoader