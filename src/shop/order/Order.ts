import Recipient from "@/shop/order/Recipient"
import Customer from "@/shop/Customer"
import Product from "@/shop/product/Product"

export default interface Order {
    id?: string
    recipient: Recipient
    customer: Customer
    status: string
    product: Product
    price: number
    currency: string
    metadata?: string[]|number[]|boolean[]
    completedAt?: Date
}