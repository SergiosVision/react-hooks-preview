import {SortDirection} from './index'

export type OrderByType<RowData> = string | keyof RowData | undefined

export type OrderDirectionType = SortDirection | undefined

export interface SortState<RowData extends object> {
    orderBy: OrderByType<RowData>
    orderDirection: OrderDirectionType
}

export interface QueryLocal<RowData extends object> {
    data: any[]
    page: number
    rowsPerPage: number
    totalCount: number
    orderBy: OrderByType<RowData>
    orderDirection: OrderDirectionType
}

export type ColumnAlignment = 'left' | 'center' | 'right'