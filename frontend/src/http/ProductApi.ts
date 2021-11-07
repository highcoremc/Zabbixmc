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

import { ResponseItem } from "@/http/Response"
import HttpClient from "@/http/HttpClient"
import Product from "@/shop/product/Product"

export default class ProductApi {

    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async getProducts(): Promise<Product[]> {
        const response = await this.httpClient.get<ResponseItem<Product>[]>('/products')

        if (!response.data || !Array.isArray(response.data)) {
            return Promise.reject()
        }

        const items = response.data

        const result: Product[] = [];
        for (const {id, attributes} of items) {
            result.push({id, ...attributes})
        }

        return result;
    }

    public async getProduct(id: string): Promise<Product> {
        const response = await this.httpClient.get<ResponseItem<Product>>(`/products/${id}`);

        if (!response.data) {
            return Promise.reject();
        }

        return {id, ...response.data.attributes};
    }
}
