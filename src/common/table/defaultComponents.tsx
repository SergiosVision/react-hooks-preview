import {ComponentType} from 'react'

import MainContainer, {MainContainerProps} from './components/MainContainer'
import ContainerInner, {ContainerInnerProps} from './components/ContainerInner'
import TableContainer, {TableContainerProps} from './components/TableContainer'
import Head, {HeadProps} from './components/head/Head'
import HeadRow, {HeadRowProps} from './components/head/HeadRow'
import HeadCell, {HeadCellProps} from './components/head/HeadCell'
import SortLabel, {SortLabelProps} from './components/head/SortLabel'
import Body, {BodyProps} from './components/body/Body'
import BodyRow, {BodyRowProps} from './components/body/BodyRow'
import BodyCell, {BodyCellProps} from './components/body/BodyCell'
import Pagination, {PaginationProps} from './components/pagination/Pagination'
import Loader, {LoaderProps} from './components/Loader'
import Placeholder, {PlaceholderProps} from './components/Placeholder'

export interface Components<RowData extends object> {
    MainContainer?: ComponentType<MainContainerProps>
    ContainerInner?: ComponentType<ContainerInnerProps>
    TableContainer?: ComponentType<TableContainerProps>
    Head?: ComponentType<HeadProps<RowData>>
    HeadRow?: ComponentType<HeadRowProps>
    HeadCell?: ComponentType<HeadCellProps>
    SortLabel?: ComponentType<SortLabelProps>
    Body?: ComponentType<BodyProps<RowData>>
    BodyRow?: ComponentType<BodyRowProps>
    BodyCell?: ComponentType<BodyCellProps>
    Pagination?: ComponentType<PaginationProps>
    Loader?: ComponentType<LoaderProps>
    Placeholder?: ComponentType<PlaceholderProps>
}

const defaultComponents = {
    MainContainer,
    ContainerInner,
    TableContainer,
    Head,
    HeadRow,
    HeadCell,
    SortLabel,
    Body,
    BodyRow,
    BodyCell,
    Pagination,
    Loader,
    Placeholder
}

export default defaultComponents