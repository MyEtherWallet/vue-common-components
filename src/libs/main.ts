import MewHeader from "./layouts/MewHeader.vue";
import MewFooter from "./layouts/MewFooter.vue";
import { defineCustomElement } from 'vue'

const MewHeaderWebComponent = defineCustomElement(MewHeader)

const registerMewHeader = () => {
    customElements.define('mew-header-web-component', MewHeaderWebComponent)
}

export { MewHeader, MewFooter, MewHeaderWebComponent, registerMewHeader };

