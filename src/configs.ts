console.log(import.meta)
const configs = {
    MAIL_KEY: import.meta.env.VITE_EMAIL_KEY || '',
}

export default configs
