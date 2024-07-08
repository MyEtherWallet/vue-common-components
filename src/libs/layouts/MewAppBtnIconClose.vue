<template>
  <MewAppBtnIcon :icon="ICONClose" @click="closeClick" />
</template>

<script setup lang="ts">
import MewAppBtnIcon from "./MewAppBtnIcon.vue";
import ICONClose from "@/assets/icons/close.svg";

const emit = defineEmits<{
  close: [payload: MouseEvent];
}>();

const closeClick = (payload: MouseEvent) => {
  emit("close", payload);
};
</script>
