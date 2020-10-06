import React from 'react'
import {IconButton} from '@material-ui/core'
import {FirstPage, LastPage, ChevronLeft, ChevronRight} from '@material-ui/icons'
import {TablePaginationActionsProps} from '@material-ui/core/TablePagination/TablePaginationActions'

const cx = require('classnames/bind').bind(require('../../styles/pagination.module.sass'))

const PaginationActions: React.FC<TablePaginationActionsProps> = ({count, page, rowsPerPage, onChangePage}) => {
    const firstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, 0)
    }

    const backButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page - 1)
    }

    const nextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, page + 1)
    }

    const lastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={cx('actions')}>
            <IconButton onClick={firstPageButtonClick} disabled={page === 0}>
                <FirstPage/>
            </IconButton>
            <IconButton onClick={backButtonClick} disabled={page === 0}>
                <ChevronLeft/>
            </IconButton>
            <IconButton onClick={nextButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
                <ChevronRight/>
            </IconButton>
            <IconButton onClick={lastPageButtonClick} disabled={page >= Math.ceil(count / rowsPerPage) - 1}>
                <LastPage/>
            </IconButton>
        </div>
    )
}

export default PaginationActions