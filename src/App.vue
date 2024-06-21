<script setup lang="ts">
import { TheHeader } from "./libs/main";
</script>
<template>
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div> -->
  <TheHeader :bg-visible="true" />
</template>

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
