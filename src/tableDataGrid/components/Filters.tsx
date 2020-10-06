import React from 'react'
import {observer} from 'mobx-react'
import {IconButton} from '@material-ui/core'
import {Refresh} from '@material-ui/icons'

import {useStores} from '../../stores/MobxProvider'

import Search from '../../common/inputs/Search'

const Filters: React.FC = () => {
    const {filters, setFilters, refreshTableData, isFetching} = useStores().tableGridDataStore

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px'}}>
            <IconButton disabled={isFetching} onClick={refreshTableData}><Refresh/></IconButton>
            <Search label='Table Grid Search' value={filters.search} changeSearch={value => setFilters({search: value})}/>
        </div>
    )
}

export default observer(Filters)