import React, {forwardRef, useMemo} from 'react'
import MaterialTablePagination, {TablePaginationProps as MaterialTablePaginationProps} from '@material-ui/core/TablePagination'

import TablePaginationActions from './TablePaginationActions'

interface Props {
    isHideOnSinglePage?: boolean
}

export type TablePaginationProps = Omit<MaterialTablePaginationProps, 'component'> & Props

const cx = require('classnames/bind').bind(require('../../styles/pagination/pagination.module.sass'))

const TablePagination: React.FC<TablePaginationProps> = forwardRef<any, TablePaginationProps>((props, ref) => {
    const {isHideOnSinglePage, rowsPerPageOptions = [], count, rowsPerPage, ActionsComponent = TablePaginationActions, style, ...restProps} = props

    const isHidePaging = useMemo(() => isHideOnSinglePage && count <= rowsPerPage, [count, rowsPerPage])

    return (
        <MaterialTablePagination ref={ref}
                                 count={count}
                                 rowsPerPage={rowsPerPage}
                                 rowsPerPageOptions={rowsPerPageOptions}
                                 labelDisplayedRows={({from, to}) => <span className={cx('pages-label')}>{from}-{to} из {count}</span>}
                                 component={'div' as any}
                                 ActionsComponent={ActionsComponent}
                                 style={isHidePaging ? {display: 'none', ...style} : style}
                                 {...restProps}/>
    )
})

export default TablePagination