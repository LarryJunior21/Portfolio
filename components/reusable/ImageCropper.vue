<template>
  <dialog id="cropImageModal" class="modal">
    <div class="modal-box">
      <div
        v-if="isLoading"
        class="flex flex-col items-center justify-center py-10"
      >
        <span class="loading loading-spinner loading-lg text-primary"></span>
        <p class="mt-4 text-center text-gray-600">Loading image cropper...</p>
      </div>

      <Cropper
        :src="image"
        :stencil-props="{
          aspectRatio: 3 / 2,
        }"
        @change="change"
        @ready="onCropperReady"
      />

      <div class="modal-action">
        <form method="dialog">
          <button class="btn bg-violet-600 border-0" @click="updateImage">
            Crop image
          </button>
        </form>
      </div>
    </div>
  </dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Cropper } from 'vue-advanced-cropper';
import 'vue-advanced-cropper/dist/style.css';

const props = defineProps({
  image: String,
});
const { croppedPokemonImage } = usePoke();

const dataUrl = ref(null);
const isLoading = ref(true);

// Function to handle when the cropper is ready
const onCropperReady = () => {
  isLoading.value = false;
};

// Set a timeout as a fallback in case the ready event doesn't fire
onMounted(() => {
  // If the cropper doesn't load within 3 seconds, hide the loader anyway
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

const updateImage = () => {
  if (dataUrl) {
    croppedPokemonImage.value = dataUrl;
  }
};

const change = ({ canvas }) => {
  dataUrl.value = canvas.toDataURL();
};
</script>
