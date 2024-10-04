import { getLocales } from '..'
const locales = import.meta.glob('./*.json', { eager: true })
const messages = getLocales(locales)
export default messages;