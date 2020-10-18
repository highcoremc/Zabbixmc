import { ResponseItem } from "@/http/Response";
import HttpClient from "@/http/HttpClient";
import Product from "@/shop/Product";
import Category from "@/shop/Category";

export default class CategoryApi {

    private httpClient: HttpClient;

    constructor(httpClient: HttpClient) {
        this.httpClient = httpClient;
    }

    public async getCategories(): Promise<Category[]> {
        const response = await this.httpClient.get<ResponseItem<Category>[]>('/categories');

        if (!response.data || !Array.isArray(response.data)) {
            return Promise.reject();
        }

        const items = response.data;

        const result: Category[] = [];
        for (const {attributes} of items) {
            result.push(attributes)
        }

        return result;
    }

    public async getProduct(id: string): Promise<Product> {
        const response = await this.httpClient.get<ResponseItem<Product>>(`/categories/${id}`);

        if (!response.data.data) {
            return Promise.reject();
        }

        return {id, ...response.data.data.attributes};
    }
}