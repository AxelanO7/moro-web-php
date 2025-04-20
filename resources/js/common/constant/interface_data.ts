export interface IPlan {
    id: number,
    name: string,
    objective: string,
    period: string,
    target: string
}

export interface IUser {
    id: number,
    name: string,
    email: string,
    username: string
    password: string
}