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
    public post = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.post<T>(url, data, config)
    public put = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.put<T>(url, data, config)
    public patch = <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> => this.instance.patch<T>(url, data, config)
}
