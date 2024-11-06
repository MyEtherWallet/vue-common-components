<template>
  <div class="flex align-center jusify-start">
    <Switch
      :id="id"
      v-model="userConsentVal"
      :aria-label="t('switch')"
      :class="[
        userConsentVal ? 'bg-primary' : 'bg-info',
        'hoverOpacityHasBG relative inline-flex h-6 w-11 items-center rounded-full',
      ]"
    >
      <span
        :class="userConsentVal ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
      />
    </Switch>
    <p class="text8 pl-2">{{ t("data_tracking") }} {{ consentString }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { Switch } from "@headlessui/vue";
import messages from "@/locales/data-tracking/index";

const props = defineProps({
  id: {
    type: String,
    requried: true,
  },
  userConsent: {
    required: true,
    type: Boolean,
  },
  useI18n: {
    required: true,
    type: Function,
  },
});

const { t } = props.useI18n({
  messages: {
    ...messages,
  },
});
const emit = defineEmits<{
  (e: "update:consent", newval: boolean): void;
}>();
const userConsentVal = computed({
  get: () => props.userConsent,
  set: (value) => emit("update:consent", value),
});

const consentString = computed(() =>
  userConsentVal.value ? t("on") : t("off")
);
</script>
<style>
@import "../../style.css";
</style>
