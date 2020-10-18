export default interface OrderCreateRequest {
    product: {
        id: string
    }
    recipient: {
        name: string
    }
    customer: {
        name: string
        email?: string
    }
}