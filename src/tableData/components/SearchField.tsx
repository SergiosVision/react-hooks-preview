import React, {useCallback, useState} from 'react'
import {TextField} from '@material-ui/core'
import {debounce} from 'lodash'

import {useStores} from '../../stores/MobxProvider'
import {useTablePage} from '../TablePageContextProvider'

const SearchField: React.FC = () => {
    const {changeSearch, filters} = useTablePage()
    const {refreshTableData} = useStores().tableDataStore

    const [searchValue, setSearchValue] = useState<string>(filters.search)

    const onSearch = useCallback(debounce(async (value: string): Promise<void> => {
        if (changeSearch) {
            changeSearch(value)

            await refreshTableData()
        }
    }, 300), [])

    const changeField = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchValue(e.currentTarget.value)

        onSearch(e.currentTarget.value)
    }

    return <div>
        <TextField label='Search' value={searchValue} onChange={changeField}/>
    </div>
}

export default SearchField