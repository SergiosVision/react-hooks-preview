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