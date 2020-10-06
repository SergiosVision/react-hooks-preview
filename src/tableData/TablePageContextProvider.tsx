import React, {createContext, useCallback, useContext, useState} from 'react'

import api from '../services/ApiService'

import {usePrevious} from '../common/utils/hooks'
import {Query, calcPageByExternalFiltersChange} from '../common/table'
import {IUser} from '../common/interfaces/user'

interface Filters {
    search: string
}

interface CtxValues {
    filters: Filters
    isFetching: boolean
    changeSearch?: (value: string) => void
    fetchUsers?: (query: Query<IUser>) => Promise<any>
}

const initialValues: CtxValues = {
    filters: {
        search: ''
    },
    isFetching: false,
    changeSearch: undefined,
    fetchUsers: undefined
}

const TablePageProvider = createContext<CtxValues>(initialValues)

export const useTablePage = () => useContext(TablePageProvider)

const TablePageContextProvider: React.FC = ({children}) => {
    const [filters, setFilters] = useState<Filters>(initialValues.filters)

    const [isFetching, setFetching] = useState<boolean>(false)

    const prevFilters = usePrevious<{search: string}>(filters)

    const changeSearch = useCallback((value: string) => {
        setFilters(prev => ({...prev, search: value}))
    }, [filters.search])

    const fetchUsers = useCallback(async (query: Query<IUser>) => {
        const {page, rowsPerPage, orderDirection, orderBy} = query

        setFetching(true)

        const nextPage = calcPageByExternalFiltersChange([{
            prev: prevFilters?.search,
            cur: filters.search
        }], page)

        let localUsers: IUser[] = []

        let totalCount: number = 0

        try {
            const {users, total_count} = await api.Users.get({
                offset: nextPage * rowsPerPage,
                limit: rowsPerPage,
                sort_by: orderBy,
                sort_direction: orderDirection,
                search: filters.search ? filters.search : undefined
            })

            localUsers = users

            totalCount = total_count
        } finally {
            setFetching(false)
        }

        return {
            data: localUsers,
            page: nextPage,
            totalCount
        }
    }, [filters.search, prevFilters])

    const ctxValues = {
        filters,
        isFetching,
        changeSearch,
        fetchUsers
    }

    return (
        <TablePageProvider.Provider value={ctxValues}>
            {children}
        </TablePageProvider.Provider>
    )
}

export default TablePageContextProvider