import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class MyMixin extends Vue {
    discordChannel: string = process.env.VUE_APP_DS_CHANNEL_LINK

    channelTelegram: string = process.env.VUE_APP_TG_CHANNEL_LINK
    contactTelegram: string = process.env.VUE_APP_TG_CONTACT_LINK

    contactVk: string = process.env.VUE_APP_VK_CONTACT_LINK
    groupVk: string = process.env.VUE_APP_VK_GROUP_LINK

    projectProtocol: string = "true" === process.env.VUE_APP_HTTPS_ENABLED ? "https" : "http"
    projectDomain: string = process.env.VUE_APP_PROJECT_DOMAIN
    contactMail: string = process.env.VUE_APP_CONTACT_EMAIL
    projectName: string = process.env.VUE_APP_PROJECT_NAME

    get projectUrl(): string {
        return `${this.projectProtocol}://${this.projectDomain}`
    }
}
