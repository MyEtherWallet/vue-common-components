<template>
  <MewAppBtnIcon :icon="ICONClose" @click="closeClick" :is-white="props.isWhite"
    :aria-label-string="t('common_components.close')" />
</template>

<script setup lang="ts">
import MewAppBtnIcon from "./MewAppBtnIcon.vue";
import ICONClose from "@/assets/icons/close.svg";
import { useI18n } from 'vue-i18n'
import commonMessages from "@/i18n/locales/common/index";
const { t } = useI18n({
  messages: {
    ...commonMessages
  }
})
const props = defineProps({
  isWhite: {
    default: false,
    type: Boolean
  }
});
const emit = defineEmits<{
  close: [payload: MouseEvent];
}>();

const closeClick = (payload: MouseEvent) => {
  emit("close", payload);
};
</script>
