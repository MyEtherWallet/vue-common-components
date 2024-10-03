import { createI18n } from 'vue-i18n'
export const i18n = createI18n({
    legacy: false, // you must set `false`, to use Composition API
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {}
})