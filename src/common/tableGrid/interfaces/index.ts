import {ReactNode} from 'react'

import {Components} from '../components/defaultComponents'
import {ColumnAlignment, QueryLocal} from './local'

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc'
}

export interface Column<RowData extends object = {}> {
    field?: keyof RowData | string
    title?: ReactNode
    defaultSort?: SortDirection
    sortable?: boolean
    width?: string
    align?: ColumnAlignment
    render?: (data: RowData) => ReactNode
}

export type Query<RowData extends object> = Omit<QueryLocal<RowData>, 'data'>

export interface TableDataResponse {
    data: any[]
    page: number
    totalCount: number
}

export interface PagingOptions {
    rowsPerPage?: number
    isHideOnSinglePage?: boolean
}

export interface TableGridProps<RowData extends object> {
    columns: Column<RowData>[]
    pagingOptions?: PagingOptions
    components?: Components<RowData>
    isLoading?: boolean
    sortable?: boolean
    placeholder?: ReactNode | ((hasData: boolean) => ReactNode)
    data: (query: Query<RowData>) => Promise<TableDataResponse>
    onRowClick?: (data: RowData) => void
    maxBodyHeight?: string | ((bodyOffset: number) => string)
}

export type PrevCurrentMap = {
    prev: any
    cur: any
}[]

export interface TableForwardRefProps {
    containerRef: HTMLDivElement | null
    tableRefresh: () => void
    onDeleteRefresh: (count: number) => void
}