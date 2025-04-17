<template>
  <div class="toast toast-top toast-start z-60 fixed" v-if="toasts.length">
    <div
      v-for="(toast, index) in toasts"
      :key="index"
      :class="['alert', alertClass(toast.type)]"
    >
      <span>{{ toast.message }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { toasts, alertClass } = useToast();
</script>

<style>
.toast {
  z-index: 9999 !important;
}
</style>
