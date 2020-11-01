import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"

export default class HttpClient {
    protected readonly instance: AxiosInstance

    public constructor(baseURL: string) {
        this.instance = axios.create({
            baseURL,
        })

        this._initializeResponseInterceptor()
    }

    private _initializeResponseInterceptor = () => {
        this.instance.interceptors.response.use(
            this._handleResponse,
            this._handleError,
        )
    }

    set handleResponse(value: ({data}: AxiosResponse) => any) {
        this._handleResponse = value
    }

    set handleError(value: (error: Error[]) => Promise<never>) {
        this._handleError = value
    }

    private _handleResponse = ({data}: AxiosResponse) => data

    private _handleError = (errors: Error[]) => Promise.reject(errors)

    public get = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.get<T>(url, config)
    public delete = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.delete<T>(url, config)
    public head = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.head<T>(url, config)
    public options = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.options<T>(url, config)
    public post = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.post<T>(url, config)
    public put = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.put<T>(url, config)
    public patch = <T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.patch<T>(url, config)
}