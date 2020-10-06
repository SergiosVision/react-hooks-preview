import {useRef, useEffect} from 'react'
import {useHistory} from 'react-router'
import queryString from 'query-string'

export const useQuery = () => {
    const {location, push} = useHistory()

    const addQueries = (object: object) => {
        const stringified = queryString.stringify(object)

        push({
            pathname: location.pathname,
            search: stringified
        })
    }

    const getQueries = (): object | {[key: string]: any} => {
        return queryString.parse(location.search)
    }

    return {
        addQueries,
        getQueries
    }
}

export const usePrevious = <T = {}>(value: T) => {
    const ref = useRef<T>()

    useEffect(() => {
        ref.current = value
    })

    return ref.current
}