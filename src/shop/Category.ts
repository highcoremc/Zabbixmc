import Product from "@/shop/Product";

export default interface Category {
    meta?: {
        icon?: string
    }
    title: string
    name: string
}

export type CategoryProducts = {
    category: string
    products?: Product[]
}