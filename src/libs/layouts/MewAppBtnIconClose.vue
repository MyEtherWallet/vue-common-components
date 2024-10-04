<template>
  <MewAppBtnIcon :icon="ICONClose" @click="closeClick" :is-white="props.isWhite"
    :aria-label-string="t('common_components.close')" />
</template>

<script setup lang="ts">
import MewAppBtnIcon from "./MewAppBtnIcon.vue";
import ICONClose from "@/assets/icons/close.svg";
import commonMessages from "@/i18n/locales/common/index";

const props = defineProps({
  isWhite: {
    default: false,
    type: Boolean
  },
  useI18n: {
    required: true,
    type: Function
  }
});
const { t } = props.useI18n({
  messages: {
    ...commonMessages
  }
})
const emit = defineEmits<{
  close: [payload: MouseEvent];
}>();

const closeClick = (payload: MouseEvent) => {
  emit("close", payload);
};
</script>
