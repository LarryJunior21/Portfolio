<template>
  <div
    class="avatar flex h-fit drop-shadow-sm cursor-pointer mr-0"
    :style="style"
    @click.prevent="modal?.showModal()"
  >
    <span class="mr-2 self-center text-gray-300">Login</span>

    <!-- Circular Avatarf -->
    <div
      class="w-8 h-8 rounded-full overflow-hidden ring ring-emerald-400 ring-offset-2 ring-offset-emerald-600 shadow-2xl drop-shadow-sm"
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
    'login_register_modal'
  ) as HTMLDialogElement;
});
/* ---------------------LIFE CYCLE HOOKS - END--------------------------- */
</script>
