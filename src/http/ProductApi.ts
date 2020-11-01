import { ResponseItem } from "@/http/Response"
import HttpClient from "@/http/HttpClient"
import Product from "@/shop/Product"

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