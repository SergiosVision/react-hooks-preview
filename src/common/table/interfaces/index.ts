import {ReactElement, ReactNode} from 'react'

import {TableDataResponse, QueryLocal} from './local'
import {Components} from '../defaultComponents'

export enum SortDirection {
    ASC = 'asc',
    DESC = 'desc'
}

export interface TableForwardRefProps {
    containerRef: HTMLDivElement | null
    tableRefresh: () => void
    onDeleteRefresh: (count: number) => void
}

export type Query<RowData extends object> = Omit<QueryLocal<RowData>, 'data'>

export interface Column<RowData extends object> {
    align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
    field?: keyof RowData | string
    title?: string | ReactElement
    width?: string | number
    defaultSort?: SortDirection
    sortable?: boolean
    render?: (data: RowData) => ReactNode
}

export type PrevCurrentMap = {
    prev: any
    cur: any
}[]

export interface PagingOptions {
    rowsPerPage?: number
    isHideOnSinglePage?: boolean
}

export interface TableProps<RowData extends object> {
    pagingOptions: PagingOptions
    isLoading?: boolean
    sortable?: boolean
    columns?: Column<RowData>[]
    components?: Components<RowData>
    placeholder?: ReactNode
    data: (query: Query<RowData>) => Promise<TableDataResponse<RowData>>
    onRowClick?: (data: RowData) => void
}