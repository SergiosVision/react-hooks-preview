import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'

import {UsersResponse} from '../common/interfaces/user'

const trimStringValues = (data?: object | object[]) => {
    const deepTrim = (obj: {[key: string]: any}) => {
        Object.keys(obj).forEach(key => {
            const value = obj[key]
            const type = typeof value

            if (value !== null && (type === 'string' || type === 'object') && obj.hasOwnProperty(key)) {
                if (type === 'object') {
                    deepTrim(obj[key])
                } else {
                    obj[key] = obj[key].trim()
                }
            }
        })
    }

    let requestData: {[key: string]: any} | {[key: string]: any}[]

    if (Array.isArray(data)) {
        requestData = [...data] as {[key: string]: any}[]
        (requestData as {[key: string]: any}[]).map(deepTrim)
    } else if (data instanceof FormData) {
        requestData = data
    } else {
        requestData = {...data}

        deepTrim(requestData)
    }

    return requestData
}

const responseBody = (response: AxiosResponse) => response.data

const requests = {
    post: (url: string, data?: object | object[], config: AxiosRequestConfig = {}) => {
        const requestData = trimStringValues(data)

        return axios.post(url, requestData, config).then(responseBody)
    },
    get: (url: string, config?: AxiosRequestConfig) => axios.get(url, config).then(responseBody),
    delete: (url: string, config?: AxiosRequestConfig) => axios.delete(url, config).then(responseBody)
}

const Users = {
    get: (params: {
        offset: number,
        limit: number,
        sort_by?: string,
        sort_direction?: string,
        search?: string
    }): Promise<UsersResponse> => requests.get('http://localhost:5000/api/users', {params}),
    delete: (id: string): Promise<void> => requests.delete(`http://localhost:5000/api/users/${id}`),
    addRandom: (count?: number): Promise<void> => requests.post('http://localhost:5000/api/users', {count})
}

const api = {
    Users
}

export default api