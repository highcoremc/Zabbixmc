export interface ApiResponse<T = any> {
    data?: T
    error?: any
}

export interface ResponseItem<I> {
    id: string
    type: string
    attributes: I
    relationships: object
    links: object
}