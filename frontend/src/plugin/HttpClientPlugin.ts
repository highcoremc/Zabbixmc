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

import HttpClient from "@/http/HttpClient";

export default class HttpClientPlugin {

    private static _instance?: HttpClientPlugin

    public install = (Vue: any) => {
        Vue.prototype.$httpClient = new HttpClient(
            process.env.VUE_APP_BASE_URL)
    }

    public static instance(): HttpClientPlugin {
        if (undefined === this._instance) {
            this._instance = new HttpClientPlugin()
        }

        return this._instance
    }
}
