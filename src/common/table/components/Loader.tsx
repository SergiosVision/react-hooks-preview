import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'

const cx = require('classnames/bind').bind(require('../styles/loader.module.sass'))

export interface LoaderProps {
    classNameContainer?: string
    classNameProgress?: string
}

const Loader: React.FC<LoaderProps> = ({classNameContainer, classNameProgress}) => {
    return (
        <div className={cx('wrapper', classNameContainer)}>
            <CircularProgress className={classNameProgress}/>
        </div>
    )
}

export default Loader