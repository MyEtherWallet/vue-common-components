export enum PROJECTS {
    PORTFOLIO = 'MEW_PORTFOLIO',
    LANDING = 'MEW_LANDING',
    TOKENS = 'MEW_TOKENS_PAGE',
    BLOG = 'MEW_BLOG'
}
export const PROJECT_LINKS: Record<PROJECTS, Record<string, string>> = {
    [PROJECTS.PORTFOLIO]: {
        CAREERS: "careers",
        WALLET_ACCESS: "wallet/access",
        HOW_IT_WORKS: "how-it-works",
        HOW_IT_WORKS_SWAP: "how-it-works#swap",
        HOW_IT_WORKS_NFT: "how-it-works#nft",
        HOW_IT_WORKS_DAPPS: "how-it-works#dapps",
        ADVERTISE_WITH_US: "advertise-with-us",
        VERIFY_MESSAGE: "tools?tool=verify",
        CONVERT_UNITS: "tools?tool=convert",
        SEND_OFFLINE_HELPER: "tools?tool=offline",
    },
    [PROJECTS.LANDING]: {
        FAQ: "faq",
        STAKING: "staking",
        TEAM: "team",
        PRIVACY_POLICY: "privacy-policy",
        ABOUT: "about",
        TERMS_OF_SERVICE: "terms-of-service",
        BUG_BOUNTY: "bug-bounty",
        PRESSKIT: "presskit",
        SECURITY_POLICY: "security-policy",
        HOME: ""
    },
    [PROJECTS.TOKENS]: {},
    [PROJECTS.BLOG]: {}
}

