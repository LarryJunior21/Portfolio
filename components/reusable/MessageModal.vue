<template>
  <dialog id="reactiveModal" class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">{{ title }}</h3>
      <p class="py-4">{{ message }}</p>
      <div class="modal-action">
        <form method="dialog">
          <button class="btn">{{ buttonName }}</button>
        </form>
      </div>
    </div>
    <!-- This backdrop enables click-outside-to-close -->
    <form method="dialog" class="modal-backdrop">
      <button aria-label="Close modal" />
    </form>
  </dialog>
</template>

<script lang="ts" setup>
const props = defineProps({ title: String, message: String, btnName: String });
const buttonName =
  props.btnName && props.btnName !== "" ? props.btnName : "Close";
</script>
