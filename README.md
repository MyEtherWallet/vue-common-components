# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Versioning

- `~1.x` — components for the **landing page** (`mew-landing`) and **Mewtopia**. Maintenance only; no v7 design-library components land here. 1.x bugfixes go to a `v1` maintenance branch.
- `~2.x` — components for the **v7 web app** (`MyEtherWallet/MyEtherWallet`, `app.myetherwallet.com`), built on the v7 design library (Figma "MEW Web App – Design Library").

Pin the range that matches your app. Breaking changes within a line bump the major of that line only.

# COMPONENTS
-  vue header and vue footer
- `AppFooter` (2.x) — v7 design-library footer. Content-only props (already-translated copy, links, socials, version); the consumer owns i18n and URLs. Responsive by its own width (container queries): Small < 688px, Medium 688–1359px, Large ≥ 1360px. Preview: `yarn dev` and open `/#footer`.

```
import { AppFooter, FOOTER_EVENTS } from '@myetherwallet/vue-common-components'
// <AppFooter v-bind="footerProps" :amplitude="amplitude" />
```

  The library ships no CSS for it: the consumer's Tailwind must scan `dist/*.js` and define the v7 design-library tokens (`bg-background-default`, `text-label-base`, …) and container queries.
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