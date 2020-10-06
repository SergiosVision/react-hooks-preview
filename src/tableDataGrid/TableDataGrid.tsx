import React from 'react'

import Filters from './components/Filters'
import List from './components/List'

const TableDataGrid: React.FC = () => {
    return (
        <div>
            <Filters/>
            <List/>
        </div>
    )
}

export default TableDataGrid