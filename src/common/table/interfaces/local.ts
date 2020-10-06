import {SortDirection} from './index'

export type OrderByType<RowData> = string | keyof RowData | undefined

export type OrderDirectionType = SortDirection | undefined

export interface SortState<RowData> {
    orderBy: OrderByType<RowData>
    orderDirection: OrderDirectionType
}

export interface QueryLocal<RowData extends object> {
    data: RowData[]
    page: number
    rowsPerPage: number
    totalCount: number
    orderBy: OrderByType<RowData>
    orderDirection: OrderDirectionType
}

export interface TableDataResponse<RowData extends object> {
    data: RowData[]
    page: number
    totalCount: number
}