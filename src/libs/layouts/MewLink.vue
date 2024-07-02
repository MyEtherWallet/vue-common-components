<template>
    <div>
        <a v-if="!isNative" :href="routeURL" @click="linkClick">{{ props.linkText }}
            <slot />
        </a>
        <link-component v-else :to="routeURL" @click="linkClick">{{ linkText }}
            <slot />
        </link-component>
    </div>

</template>

<script setup lang="ts">

import { RouterLink } from "vue-router";
import { PropType, ref } from "vue";
import { PROJECT_LINKS, PROJECTS } from "@/helpers/links";

const emit = defineEmits<{
    (e: "mewlink:click", newval: string): void;
}>();


const props = defineProps({
    linkUrl: {
        required: true,
        type: String,
    },
    linkComponent: {
        type: Object as PropType<typeof RouterLink>,
        required: true,
    },
    currProject: {
        required: true,
        type: String as PropType<PROJECTS>
    },
    linkText: {
        type: String,
        default: "",
    },
});

/**
 *Render proper component
 */
const DEFAULT_URL = "https://www.myetherwallet.com/";


const getPojectLinks = (): string[] => {
    const urlKeys = Object.keys(PROJECT_LINKS[props.currProject]);
    const links = urlKeys.map(key => {
        return PROJECT_LINKS[props.currProject][key]
    });
    return links
}

const isNative = ref(false)
const routeURL = ref(DEFAULT_URL)
isNative.value = getPojectLinks().includes(props.linkUrl)
const prefix = isNative.value ? '/' : DEFAULT_URL
routeURL.value = `${prefix}${props.linkUrl}`;

const linkClick = (e: MouseEvent): void => {
    emit("mewlink:click", props.linkUrl);
}

</script>