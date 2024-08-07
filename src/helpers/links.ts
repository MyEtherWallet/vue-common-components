export enum PROJECTS {
    PORTFOLIO = 'MEW_PORTFOLIO',
    LANDING = 'MEW_LANDING',
    TOKENS = 'MEW_TOKENS_PAGE',
    BLOG = 'MEW_BLOG'
}
export const PROJECT_LINKS: Record<PROJECTS, Record<string, string>> = {
    [PROJECTS.PORTFOLIO]: {
        CAREERS: "careers",
        ABOUT: "about",
        WALLET_ACCESS: "wallet/access",
        HOW_IT_WORKS: "how-it-works",
        HOW_IT_WORKS_SWAP: "how-it-works#swap",
        HOW_IT_WORKS_NFT: "how-it-works#nft",
        HOW_IT_WORKS_DAPPS: "how-it-works#ndapps",
        TEAM: "team",
        ADVERTISE_WITH_US: "advertise-with-us",
        PRIVACY_POLICY: "privacy-policy",
        TERMS_OF_SERVICE: "terms-of-service",
        BUG_BOUNTY: "bug-bounty",
        PRESSKIT: "presskit",
        SECURITY_POLICY: "security-policy",
        VERIFY_MESSAGE: "tools?tool=verify",
        CONVERT_UNITS: "tools?tool=convert",
        SEND_OFFLINE_HELPER: "tools?tool=offline",
    },
    [PROJECTS.LANDING]: {
        FAQ: "faq",
        STAKING: "staking",
        HOME: ""
    },
    [PROJECTS.TOKENS]: {},
    [PROJECTS.BLOG]: {}
}

