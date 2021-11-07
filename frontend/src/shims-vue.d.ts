import HttpClient from "@/http/HttpClient"
import Vue from 'vue'

declare module 'vue/types/vue' {
  interface Vue {
    $httpClient: HttpClient
  }
}

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
