import Product from "@/shop/Product";

export default interface Order {
    id?: string
    recipient: object
    customer: object
    status: string
    product: Product
    price: number
    currency: string
    metadata?: any[]
    completedAt?: Date
}