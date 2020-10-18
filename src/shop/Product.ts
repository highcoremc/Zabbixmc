export default interface Product {
    id?: string
    title: string
    category?: string
    description?: string
    metadata?: {
        level?: string
        src?: string
    }
    type: string
    price: number
    currency: string
}