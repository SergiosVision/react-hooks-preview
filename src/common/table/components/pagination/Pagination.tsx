import React, {forwardRef, useMemo} from 'react'
import TablePagination, {TablePaginationProps} from '@material-ui/core/TablePagination'

import PaginationActions from './PaginationActions'

interface Props {
    isHideOnSinglePage?: boolean
}

export type PaginationProps = Omit<TablePaginationProps, 'component'> & Props

const cx = require('classnames/bind').bind(require('../../styles/pagination.module.sass'))

const Pagination: React.FC<PaginationProps> = forwardRef<any, PaginationProps>((props, ref) => {
    const {rowsPerPageOptions = [], count, rowsPerPage, ActionsComponent = PaginationActions, isHideOnSinglePage, ...restProps} = props

    const isHidePaging = useMemo(() => isHideOnSinglePage && count <= rowsPerPage, [count, rowsPerPage])

    if (isHidePaging) return null

    return (
        <TablePagination ref={ref}
                         count={count}
                         rowsPerPage={rowsPerPage}
                         rowsPerPageOptions={rowsPerPageOptions}
                         labelDisplayedRows={({from, to}) => <span className={cx('pages-label')}>{from}-{to} из {count}</span>}
                         component={'div' as any}
                         ActionsComponent={ActionsComponent}
                         {...restProps}/>
    )
})

export default Pagination