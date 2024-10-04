import commonMessages from "@/i18n/locales/common";
export type MassagesShema = {
    [key: string]: any
}

export const getLocales = (locales: Record<string, unknown>) => {
    const messages = {} as MassagesShema;
    for (const path in locales) {
        const filename = path.replace(/(\.\/|\.json)/g, '');
        // @ts-ignore
        messages[filename] = locales[path].default;

    }
    return messages;
}

export const mergeLocalesWithCommon = (locales: Record<string, unknown>) => {
    const mergedLocales = locales as MassagesShema;
    for (const key in commonMessages) {
        if (mergedLocales[key]) {
            mergedLocales[key] = {
                ...mergedLocales[key], ...commonMessages[key]
            }
        }
        else {
            mergedLocales[key] = commonMessages[key]
        }
    }
    return mergedLocales;
}