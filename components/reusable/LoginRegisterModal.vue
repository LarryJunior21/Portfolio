<template>
  <dialog id="login_register_modal" class="modal transition-override">
    <div
      class="modal-box max-h-full h-auto shadow-md bg-white dark:bg-gray-800 hide-scroll"
    >
      <form method="dialog">
        <button
          class="btn btn-sm btn-square btn-ghost absolute right-2 top-2 shadow-none border-transparent bg-white/90 dark:bg-gray-800/99 hover:border-gray-100/90 hover:bg-white/90 hover:dark:bg-gray-800/99 focus:outline-none focus-visible:outline-none focus-visible:outline-0"
        >
          ✕
        </button>
      </form>
      <label
        class="swap swap-flip text-9xl justify-self-center cursor-auto grid"
        @click.stop="preventSwapClick"
      >
        <input
          id="box-swap"
          type="checkbox"
          class="pointer-events-none hidden"
        />
        <div class="swap-off">
          <fieldset
            class="fieldset w-xs border border-emerald-600 p-4 rounded-box bg-white/90 dark:bg-gray-800/99"
            :class="{ hidden: isLogin }"
          >
            <legend class="fieldset-legend">Login</legend>

            <label class="fieldset-label">Email</label>
            <input type="email" class="input" placeholder="Email" />

            <label class="fieldset-label">Password</label>
            <input type="password" class="input" placeholder="Password" />

            <button class="btn btn-neutral mt-4">Login</button>
          </fieldset>

          <div class="text-sm mt-6 text-center">
            Don't have an account?
            <span
              class="text-purple-600 font-semibold cursor-pointer"
              @click.prevent="toggleSwap"
              >Click here to register</span
            >
          </div>
        </div>
        <div class="swap-on">
          <fieldset
            class="fieldset w-xs border border-emerald-600 p-4 rounded-box shadow-xl bg-white/90 dark:bg-gray-800/99"
            :class="{ hidden: !isLogin }"
          >
            <legend class="fieldset-legend">Register</legend>

            <label class="fieldset-label">Name</label>
            <input type="text" class="input" placeholder="Ash Ketchum" />

            <label class="fieldset-label">Email</label>
            <input type="email" class="input" placeholder="Email" />

            <label class="fieldset-label">Password</label>
            <input type="password" class="input" placeholder="Password" />

            <label class="fieldset-label">Confirm password</label>
            <input type="password" class="input" placeholder="Password" />

            <button class="btn btn-neutral mt-4">Create Account</button>
          </fieldset>

          <div class="text-sm mt-6 text-center">
            Already have an account?
            <span
              class="text-purple-600 font-semibold cursor-pointer"
              @click.prevent="toggleSwap"
              >Click here to login
            </span>
          </div>
        </div>
      </label>
    </div>
  </dialog>
</template>

<script setup>
const isLogin = ref(false);

const toggleSwap = () => {
  const checkbox = document.getElementById('box-swap');
  checkbox.checked = !checkbox.checked;
  checkbox.dispatchEvent(new Event('change'));
  isLogin.value = !isLogin.value;
};

const preventSwapClick = (e) => {
  const target = e.target;

  // If the click came from an actual input or button, let it through
  const isFormControl =
    target.closest('input') ||
    target.closest('button') ||
    target.closest('select') ||
    target.closest('textarea');

  if (!isFormControl) {
    // Prevent the label click from toggling the checkbox
    e.preventDefault();
  }
};
</script>

<style scoped>
input:focus {
  outline: none;
  border: none;
}

.hide-scroll {
  scrollbar-width: none;
}

.transition-override {
  transition:
    transform 0.3s ease-out,
    visibility 0s,
    background-color 0.3s ease-out,
    opacity 0.1s ease-out;
}
</style>
