import HttpClient from "@/http/HttpClient";

export default class HttpClientPlugin {

    private static _instance?: HttpClientPlugin

    public install = (Vue: any, options: object) => {
        Vue.prototype.$httpClient = new HttpClient(
            process.env.VUE_APP_BASE_URL)
    }

    public static instance() {
        if (undefined === this._instance) {
            this._instance = new HttpClientPlugin()
        }

        return this._instance
    }
}