import ProductDescription from "@/shop/ProductDescription";

export default interface Product {
    key: string
    id?: string
    title: string
    category?: string
    description?: ProductDescription[]
    metadata?: {
        level?: string
        src?: string
    }
    type: string
    price: number
    currency: string
}