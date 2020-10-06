import React from 'react'
import {Route, Switch} from 'react-router'

import PageStructure from '../common/PageStructure/PageStructure'
import usePaths from '../common/utils/usePaths'

import Description from './Description'
import Example from './Example'

const UseCallback: React.FC = () => {
    const {description, example} = usePaths()

    return <PageStructure title='UseCallback Hook'>
        <Switch>
            <Route exact path={description} component={Description}/>
            <Route exact path={example} component={Example}/>
        </Switch>
    </PageStructure>
}

export default UseCallback