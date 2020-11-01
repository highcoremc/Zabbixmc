import { ResponseItem } from '@/http/Response'
import PaymentForm from '@/order/PaymentForm'
import HttpClient from '@/http/HttpClient'
import Order from '@/shop/Order'
import OrderCreateRequest from "@/order/OrderCreateRequest"

export default class OrderApi {

    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async createOrder(request: OrderCreateRequest): Promise<null|string> {
        const response = await this.httpClient.post<ResponseItem<Order>>(`/orders`, {
            data: {
                type: "orders",
                attributes: request
            }
        })

        if (!response.data) {
            return Promise.reject(null)
        }

        return response.data.id
    }

    public async processOrder(id: string): Promise<PaymentForm> {
        const response = await this.httpClient.post<ResponseItem<PaymentForm>>(`/orders/${id}/process`)

        if (!response.data) {
            return Promise.reject()
        }

        return response.data.attributes
    }
}