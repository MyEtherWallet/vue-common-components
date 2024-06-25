<template>
  <AppBtnIcon :icon="ICONClose" @click="closeClick" />
</template>

<script setup lang="ts">
import AppBtnIcon from "./AppBtnIcon.vue";
import ICONClose from "@/assets/icons/close.svg";

const emit = defineEmits<{
  close: [payload: MouseEvent];
}>();

const closeClick = (payload: MouseEvent) => {
  emit("close", payload);
};
</script>
