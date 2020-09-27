export default interface Product {
    id: string
    title: string
    src: string
    meta?: {
        category?: string
        level?: string
    }
    price: {
        currency: string
        amount: number
    }
}