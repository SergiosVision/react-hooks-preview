export interface IUser {
    id: string
    email: string
    name: string
    avatar: string
}

export interface UsersResponse {
    users: IUser[]
    total_count: number
}