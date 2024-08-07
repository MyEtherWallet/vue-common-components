# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# COMPONENTS
-  vue header and vue footer
- header as web component. Make sure to install vue and vue router when used. Use currUrl prop to pass current page url.

```
//in main.js
import { registerMewHeader, MewHeaderWebComponent } from '@myetherwallet/vue-common-components'
// Register MEW header and add event listner on consent change
registerMewHeader()
const MEWHeader = new MewHeaderWebComponent({
    currProject: "MEW_BLOG",
    bgVisible: true,
    userConsent: window.userConsent,
    amplitude: window.amplitude,
    currUrl: window.location.href
})
document.body.appendChild(MEWHeader)

// Add event listeners
const MEWHeaderShadow = document.querySelector("mew-header-web-component")
MEWHeaderShadow.addEventListener('update:consent', window.handleOptActionConsentChnage)
// Add to window object if you want to change component props
window.MEWHeader = MEWHeader

```

# How to test this in another project
1. Build and Pack the library 
```
yarn build
yarn pack 
```
2. Copy generated {x}.tgz file path
3. install it in another prokect. IE in landing page project:
```
pnpm install {x}.tgz
```