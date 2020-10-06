import {ComponentType} from 'react'

import TableMainContainer, {TableMainContainerProps} from './TableMainContainer'
import TableContainerInner, {TableContainerInnerProps} from './TableContainerInner'
import TableContainer, {TableContainerProps} from './TableContainer'
import TableHead, {TableHeadProps} from './Head/TableHead'
import TableHeadRow, {TableHeadRowProps} from './Head/TableHeadRow'
import TableHeadCell, {TableHeadCellProps} from './Head/TableHeadCell'
import TableSortLabel, {TableSortLabelProps} from './TableSortLabel'
import TableBody, {TableBodyProps} from './Body/TableBody'
import TableBodyRow, {TableBodyRowProps} from './Body/TableBodyRow'
import TableBodyCell, {TableBodyCellProps} from './Body/TableBodyCell'
import TablePagination, {TablePaginationProps} from './Pagination/TablePagination'
import TablePlaceholder, {TablePlaceholderProps} from './TablePlaceholder'
import TableLoader, {TableLoaderProps} from './TableLoader'

export interface Components<RowData extends object> {
    TableMainContainer?: ComponentType<TableMainContainerProps>
    TableContainerInner?: ComponentType<TableContainerInnerProps>
    TableContainer?: ComponentType<TableContainerProps>
    TableHead?: ComponentType<TableHeadProps<RowData>>
    TableHeadRow?: ComponentType<TableHeadRowProps>
    TableHeadCell?: ComponentType<TableHeadCellProps>
    TableSortLabel?: ComponentType<TableSortLabelProps>
    TableBody?: ComponentType<TableBodyProps<RowData>>
    TableBodyRow?: ComponentType<TableBodyRowProps>
    TableBodyCell?: ComponentType<TableBodyCellProps>
    TablePagination?: ComponentType<TablePaginationProps>
    TablePlaceholder?: ComponentType<TablePlaceholderProps>
    TableLoader?: ComponentType<TableLoaderProps>
}

const defaultComponents = {
    TableMainContainer,
    TableContainerInner,
    TableContainer,
    TableHead,
    TableHeadRow,
    TableHeadCell,
    TableSortLabel,
    TableBody,
    TableBodyRow,
    TableBodyCell,
    TablePagination,
    TablePlaceholder,
    TableLoader
}

export default defaultComponents