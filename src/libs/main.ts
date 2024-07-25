import MewHeader from "./layouts/MewHeader.vue";
import MewFooter from "./layouts/MewFooter.vue";
import MEWSubscribe from "./layouts/MewSubscribe.vue"
import { defineCustomElement } from 'vue'

const MewHeaderWebComponent = defineCustomElement(MewHeader)
const MewSubscribeWebComponent = defineCustomElement(MEWSubscribe)

const registerMewHeader = () => {
    customElements.define('mew-header-web-component', MewHeaderWebComponent)
}
const registerSubscribe = () => {
    customElements.define('mew-subscribe-web-component', MewSubscribeWebComponent)
}

export { MewHeader, MewFooter, MEWSubscribe, MewHeaderWebComponent, MewSubscribeWebComponent, registerMewHeader, registerSubscribe };

