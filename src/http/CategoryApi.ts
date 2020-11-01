import {ResponseItem} from "@/http/Response"
import HttpClient from "@/http/HttpClient"
import Category from "@/shop/Category"

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