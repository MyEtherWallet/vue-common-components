<template>
  <div class="flex align-center jusify-start">
    <Switch
      :id="id"
      v-model="userConsentVal"
      :class="[userConsentVal ? 'bg-primary' : 'bg-info', 'hoverOpacityHasBG']"
      class="relative inline-flex h-6 w-11 items-center rounded-full"
    >
      <span
        :class="userConsentVal ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
      />
    </Switch>
    <p class="text8 pl-2">Data Tracking {{ consentString }}</p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { Switch } from "@headlessui/vue";

const props = defineProps({
  id: {
    type: String,
    requried: true,
  },
  userConsent: {
    required: true,
    type: Boolean,
  },
});

const emit = defineEmits<{
  (e: "update:consent", newval: boolean): void;
}>();
const userConsentVal = computed({
  get: () => props.userConsent,
  set: (value) => emit("update:consent", value),
});

const consentString = computed(() => (userConsentVal.value ? "On" : "Off"));
</script>
