import Product from "@/shop/product/Product"

export default interface Category {
    metadata?: {
        icon?: string
    }
    priority: number
    title: string
    name: string
}

export type CategoryProducts = {
    category: string
    products?: Product[]
}