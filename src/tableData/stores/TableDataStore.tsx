import {observable} from 'mobx'

import {BaseTableStore} from '../../common/table'

class TableDataStore extends BaseTableStore {
    @observable filters = {
        search: ''
    }

    deleteItemsRefresh = async (count?: number): Promise<void> => {
        await this.refreshTableDataByDelete(count)
    }
}

const tableDataStore = new TableDataStore()

export default tableDataStore