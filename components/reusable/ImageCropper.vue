<template>
  <dialog id="cropImageModal" class="modal">
    <div class="modal-box">
      <div
        v-if="isLoading"
        class="flex flex-col items-center justify-center py-10"
      >
        <span class="loading loading-spinner loading-lg text-primary" />
        <p class="mt-4 text-center text-gray-100">Loading image cropper...</p>
      </div>

      <div v-if="srcImageFromUploader && !isLoading">
        <Cropper
          class="cropper-class"
          :src="srcImageFromUploader"
          :stencil-props="{
            aspectRatio: 3 / 2,
          }"
          :auto-zoom="true"
          @change="onCropChange"
          @ready="onCropperReady"
        />
      </div>

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

const { croppedPokemonImage, srcImageFromUploader } = useImageUpload();

const dataUrl = ref(null);
const isLoading = ref(true);

// Function to handle when the cropper is ready
const onCropperReady = () => {
  isLoading.value = false;
};

// Set a timeout as a fallback in case the ready event doesn't fire
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
});

// Function to handle the cropper change (resize), but not update the image here
const onCropChange = ({ canvas }) => {
  dataUrl.value = canvas.toDataURL();
};

// Function to update the image only when the button is clicked
const updateImage = () => {
  if (dataUrl.value) {
    croppedPokemonImage.value = dataUrl.value;
  }
};
</script>

<!-- Style for Cropper can be scoped but not the stretcher -->
<style>
.cropper-class {
  max-height: 500px;

  .vue-advanced-cropper__stretcher {
    max-height: 500px;
  }
}
</style>
