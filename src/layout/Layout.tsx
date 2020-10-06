import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Navigation from './Navigation'

import Routes from '../routes'
import UseCallback from '../useCallback/UseCallback'
import UseContext from '../useContext/UseContext'
import UseEffect from '../useEffect/UseEffect'
import UseLayoutEffect from '../useLayoutEffect/UseLayoutEffect'
import UseMemo from '../useMemo/UseMemo'
import UseReducer from '../useReducer/UseReducer'
import UseState from '../useState/UseState'
import OwnHooks from '../ownHooks/OwnHooks'
import UseRef from '../useRef/UseRef'
import UseImperativeHandle from '../useImperativeHandle/UseImperativeHandle'
import TableData from '../tableData/TableData'
import TableDataGrid from '../tableDataGrid/TableDataGrid'
import MainPage from '../mainPage/MainPage'

const cx = require('classnames/bind').bind(require('./styles/layout.module.sass'))

const Layout: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <h3 className={cx('title')}>Примеры использования React Hooks</h3>

            <Navigation/>

            <div className={cx('content')}>
                <div className='container'>
                    <Switch>
                        <Route path={Routes.useCallback} component={UseCallback}/>
                        <Route path={Routes.useContext} component={UseContext}/>
                        <Route path={Routes.useEffect} component={UseEffect}/>
                        <Route path={Routes.useLayoutEffect} component={UseLayoutEffect}/>
                        <Route path={Routes.useMemo} component={UseMemo}/>
                        <Route path={Routes.useReducer} component={UseReducer}/>
                        <Route path={Routes.useRef} component={UseRef}/>
                        <Route path={Routes.ownHooks} component={OwnHooks}/>
                        <Route path={Routes.useImperativeHandle} component={UseImperativeHandle}/>
                        <Route exact path={Routes.table} component={TableData}/>
                        <Route exact path={Routes.tableGrid} component={TableDataGrid}/>
                        <Route path={Routes.useState} component={UseState}/>
                        <Route exact path={Routes.mainPage} component={MainPage}/>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Layout