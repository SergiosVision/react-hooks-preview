import {PrevCurrentMap} from '../interfaces'

export const calcPageByExternalFiltersChange = (prevCurrentMap: PrevCurrentMap, currentPage: number) => prevCurrentMap.some(item => item.prev !== item.cur) ? 0 : currentPage