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

import Category from "@/shop/product/Category";
import {ResponseItem} from "@/http/Response"
import HttpClient from "@/http/HttpClient"

export default class CategoryApi {

    private httpClient: HttpClient

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient
    }

    public async getCategories(): Promise<Category[]> {
        const response = await this.httpClient.get<ResponseItem<Category>[]>('/categories')

        if (!response.data || !Array.isArray(response.data)) {
            return Promise.reject()
        }

        const items = response.data

        const result: Category[] = []
        for (const { attributes } of items) {
            result.push(attributes)
        }

        return result
    }
}
