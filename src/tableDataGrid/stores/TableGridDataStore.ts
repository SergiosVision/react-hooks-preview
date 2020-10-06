import {action, observable} from 'mobx'

import api from '../../services/ApiService'

import {BaseTableStore, Query, TableDataResponse, calcPageByExternalFiltersChange} from '../../common/tableGrid'
import {IUser} from '../../common/interfaces/user'

const initialFilters = {
    search: ''
}

class TableGridDataStore extends BaseTableStore {
    @observable filters = initialFilters
    @observable isFetching: boolean = false

    prevFilters = this.filters

    deleteItemsRefresh = async (count?: number): Promise<void> => {
        await this.refreshTableDataByDelete(count)
    }

    @action fetchData = async (query: Query<IUser>): Promise<TableDataResponse> => {
        const {page, rowsPerPage, orderDirection, orderBy} = query

        this.isFetching = true

        const nextPage = calcPageByExternalFiltersChange([{
            prev: this.prevFilters?.search,
            cur: this.filters.search
        }], page)

        this.prevFilters = this.filters

        let localUsers: IUser[] = []

        let totalCount: number = 0

        try {
            const {users, total_count} = await api.Users.get({
                offset: nextPage * rowsPerPage,
                limit: rowsPerPage,
                sort_by: orderBy,
                sort_direction: orderDirection,
                search: this.filters.search ? this.filters.search : undefined
            })

            localUsers = users

            totalCount = total_count
        } finally {
            this.isFetching = false
        }

        return {
            data: localUsers,
            page: nextPage,
            totalCount: totalCount
        }
    }
}

const tableGridDataStore = new TableGridDataStore()

export default tableGridDataStore