import RelationShip from "@/http/RelationShip"

export interface ResponseItem<I> {
    id: string
    type: string
    attributes: I
    links: string[]
    relationships: RelationShip[]
}