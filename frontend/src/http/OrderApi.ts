/*
 * Copyright (c) 2021 Loper.me <bizrenay@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { ResponseItem } from '@/http/Response'
import PaymentForm from '@/shop/order/PaymentForm'
import HttpClient from '@/http/HttpClient'
import Order from '@/shop/order/Order'
import OrderCreateRequest from "@/shop/order/OrderCreateRequest"
import OrderCalc from "@/shop/order/OrderCalc"
import PriceCalculateRequest from "@/shop/order/PriceCalculateRequest"
import qs from "query-string"

export default class OrderApi {

    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async calcPrice(request: PriceCalculateRequest): Promise<null|number> {
        const config = {
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        }

        const data = {
            recipient: request.recipient,
            product_id: request.product,
        }

        const response = await this.httpClient.post<ResponseItem<OrderCalc>>(`/orders/calc`, qs.stringify(data), config)

        if (!response.data) {
            return Promise.reject(null)
        }

        return Math.floor(response.data.attributes.total)
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
