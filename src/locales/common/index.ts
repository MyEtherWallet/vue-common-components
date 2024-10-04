import { getLocales } from '..'
const locales = import.meta.glob('./*.json', { eager: true })
const commonMessages = getLocales(locales)
export default commonMessages;