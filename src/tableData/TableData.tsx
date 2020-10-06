import React from 'react'

import TablePageContextProvider from './TablePageContextProvider'
import SearchField from './components/SearchField'
import Actions from './components/Actions'
import List from './components/List'

const TableData: React.FC = () => {
    return (
        <div>
            <TablePageContextProvider>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Actions/>
                    <SearchField/>
                </div>
                <List/>
            </TablePageContextProvider>
            <div style={{height: '600px'}}/>
        </div>
    )
}

export default TableData