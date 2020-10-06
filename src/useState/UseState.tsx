import React from 'react'
import {Route, Switch} from 'react-router-dom'

import usePaths from '../common/utils/usePaths'
import PageStructure from '../common/PageStructure/PageStructure'

import Description from './Description'
import Example from './Example'

const UseState: React.FC = () => {
    const {description, example} = usePaths()

    return (
        <PageStructure title='UseState Hook'>
            <Switch>
                <Route exact path={description} component={Description}/>
                <Route exact path={example} component={Example}/>
            </Switch>
        </PageStructure>
    )
}

export default UseState