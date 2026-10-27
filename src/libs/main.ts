import MewHeader from "./layouts/MewHeader.vue";
import MewFooter from "./layouts/MewFooter.vue";
import MEWSubscribe from "./layouts/MewSubscribe.vue"
import AppFooter from "./footer/AppFooter.vue";
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

// v7 design library (2.x)
export { AppFooter };
export {
  FOOTER_DONATION_TOKENS,
  FOOTER_EVENTS,
  FOOTER_SOCIALS,
} from "./footer/types";
export type {
  FooterDonation,
  FooterDonationToken,
  FooterLink,
  FooterLinkGroup,
  FooterSocial,
  FooterSocialName,
} from "./footer/types";

