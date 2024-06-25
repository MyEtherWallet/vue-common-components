<template>
  <TheHeader
    :bg-visible="false"
    :link-component="RouterLink"
    :user-consent="userConsent"
    @update:consent="onUserConsentChange"
    :amplitude="{ track: () => {} }"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import { TheHeader } from "./libs/main";
import { RouterLink } from "vue-router";
const userConsent = ref(false);
const onUserConsentChange = (newval: boolean) => {
  userConsent.value = newval;
};
</script>

<style scoped>
.staking {
  background: linear-gradient(
    44.56deg,
    #4cc9ff 0%,
    #9dd6c9 34.49%,
    #ffe589 76.6%,
    #ff0013 118.76%
  );
  background: linear-gradient(
    90deg,
    #e40c5b 0%,
    #674cff 33%,
    #1681ff 66%,
    #05c0a5 100%
  );
}
</style>
