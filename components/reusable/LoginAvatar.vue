<template>
  <!-- <div
    class="avatar absolute grid h-fit top-[12.9%] right-[15%] drop-shadow-sm cursor-pointer"
    :style="style"
    @click.prevent="modal?.showModal()"
  >
    <div
      class="ring-emerald-400 ring-offset-emerald-600 w-10 h-10 rounded-full ring ring-offset-2 drop-shadow-sm"
    >
      <img src="~/assets/images/pikachu_avatar.png" />
    </div>
    <span class="text-gray-700">Login</span>
  </div> -->

  <div
    class="avatar absolute grid h-fit top-[12.9%] right-[15%] drop-shadow-sm cursor-pointer"
  >
    <!-- Circular Avatar -->
    <div
      class="w-10 h-10 rounded-full overflow-hidden ring ring-emerald-400 ring-offset-2 ring-offset-emerald-600"
    >
      <img
        src="~/assets/images/pikachu_avatar.png"
        class="w-full h-full object-cover"
      />
    </div>
  </div>

  <ReusableLoginRegisterModal />
</template>

<script setup lang="ts">
const { style } = defineProps({ style: String });

const modal = ref<HTMLDialogElement | null>(null);

/* ---------------------LIFE CYCLE HOOKS - START--------------------------- */
onMounted(() => {
  modal.value = document.getElementById(
    "login_register_modal"
  ) as HTMLDialogElement;
});
/* ---------------------LIFE CYCLE HOOKS - END--------------------------- */
</script>

<style lang="css">
path {
  fill: transparent;
}

text {
  fill: #ff9800;
}

svg {
  max-width: 500px;
  letter-spacing: 10px;
}
</style>
