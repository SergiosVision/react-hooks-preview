import {action, observable} from 'mobx'

import {TableForwardRefProps} from '../index'

export abstract class BaseTableStore {
    public tableRef: TableForwardRefProps | null = null

    @observable totalCount: number = 0
    @observable filters: any = {}

    @action setFilters = (filters: object, refreshTableData = true): void => {
        this.filters = {...this.filters, ...filters}

        if (refreshTableData) {
            this.refreshTableData()
        }
    }

    public refreshTableData = (): void => {
        if (this.tableRef) {
            this.tableRef.tableRefresh()
        }
    }

    public refreshTableDataByDelete = (count = 1): void => {
        if (this.tableRef) {
            this.tableRef.onDeleteRefresh(count)
        }
    }

    public get tableRefContainer() {
        if (this.tableRef && this.tableRef.containerRef) {
            return this.tableRef.containerRef
        }
    }

    public setTableRef = (ref: TableForwardRefProps | null) => this.tableRef = ref
}