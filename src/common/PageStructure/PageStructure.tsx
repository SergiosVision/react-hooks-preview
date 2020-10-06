import React from 'react'
import {NavLink} from 'react-router-dom'

import Button from '../Button/Button'
import usePaths from '../utils/usePaths'

interface Props {
    title: string
    className?: string
}

const cx = require('classnames/bind').bind(require('./styles/page-structure.module.sass'))

const PageStructure: React.FC<Props> = ({title, children, className}) => {
    const {description, example} = usePaths()

    return (
        <div className={cx(className)}>
            <h4 className={cx('title', 'center')}>{title}</h4>

            <div className={cx('navigation')}>
                <NavLink exact activeClassName={cx('active')} to={description}>
                    <Button>Описание</Button>
                </NavLink>
                <NavLink exact activeClassName={cx('active')} to={example}>
                    <Button>Live Preview</Button>
                </NavLink>
            </div>

            {children}
        </div>
    )
}

export default PageStructure