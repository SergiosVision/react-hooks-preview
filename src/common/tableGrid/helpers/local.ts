import {CSSProperties} from 'react'

import {Column} from '../interfaces'

export const generateGrid = (columns: Column<any>[]): CSSProperties => {
    const foundColumn = columns.find(({width}) => !!width)

    let columnString: string = ''

    if (!foundColumn) {
        columnString = `repeat(${columns.length}, minmax(150px, 1fr))`
    } else {
        columnString = columns.map(({width}) => {
            if (!width) {
                return 'minmax(150px, 1fr)'
            }

            return width
        }).join(' ')
    }

    return {
        display: 'grid',
        gridTemplateColumns: columnString
    }
}

export const setPageByDeleteCount = (currentPage: number, dataCount: number): number => {
    if (dataCount <= 0) {
        if (currentPage !== 0) return currentPage - 1

        return 0
    }

    return currentPage
}

export const setCurrentPage = (currentPage: number, perPage: number, totalItems: number) => {
    if (totalItems <= perPage * currentPage && currentPage !== 0) {
        return Math.max(0, Math.ceil(totalItems / perPage) - 1)
    }

    return currentPage
}