import RelationShip from "@/http/RelationShip";

export interface ApiResponse<T> {
    data?: T
    errors?: Error[]
}

export interface ResponseItem<I> {
    id: string
    type: string
    attributes: I
    links: string[]
    relationships: RelationShip[]
}