import React from 'react'
import {NavLink} from 'react-router-dom'

import Routes from '../routes'

const cx = require('classnames/bind').bind(require('./styles/navigation.module.sass'))

const menu = [
    {path: Routes.mainPage, name: 'Главная', exact: true},
    {path: Routes.useState, name: 'UseState'},
    {path: Routes.useEffect, name: 'UseEffect'},
    {path: Routes.useLayoutEffect, name: 'UseLayoutEffect'},
    {path: Routes.useContext, name: 'UseContext'},
    {path: Routes.useReducer, name: 'UseReducer'},
    {path: Routes.useCallback, name: 'UseCallback'},
    {path: Routes.useMemo, name: 'UseMemo'},
    {path: Routes.useRef, name: 'UseRef'},
    {path: Routes.ownHooks, name: 'OwnHooks'},
    {path: Routes.useImperativeHandle, name: 'UseImperativeHandle'}
    ]

const Navigation: React.FC = () => {
    return (
        <nav className={cx('wrapper')}>
            {menu.map(({path, name, exact}, index) => (
                <NavLink key={index} exact={exact} className={cx('link')} activeClassName={cx('active')} to={path}>{name}</NavLink>
            ))}
        </nav>
    )
}

export default Navigation