import React, {FC, useContext} from 'react'
import {MobXProviderContext, Provider} from 'mobx-react'

import tableDataStore from '../tableData/stores/TableDataStore'
import tableGridDataStore from '../tableDataGrid/stores/TableGridDataStore'

const stores = {
    tableDataStore,
    tableGridDataStore
}

export const useStores = () => useContext<typeof stores>(MobXProviderContext as any)

const MobxProvider: FC = ({children}) => {
    return (
        <Provider {...stores}>{children}</Provider>
    )
}

export default MobxProvider