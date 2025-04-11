export const useImageUpload = () => {
  /* ---------------------CONSTS AND STATES - START--------------------------- */
  // const store = usePokeStore();

  const srcImageFromUploader = useState('srcImageFromUploader', () => '');
  const croppedPokemonImage = useState('croppedPokemonImage', () => '');
  const imageUploader = ref<HTMLInputElement | null>(null);

  // Open cropp modal programatically after uploading the image
  const modal = ref<HTMLDialogElement | null>(null);

  /* ---------------------CONSTS AND STATES - END--------------------------- */

  /* ---------------------FUNCTIONS - START--------------------------- */
  // Handle image upload
  const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;

    // Remove the cropped image if another one was already uploaded
    if (croppedPokemonImage.value !== '') croppedPokemonImage.value = '';

    const file = target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        srcImageFromUploader.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
      modal?.value?.showModal();
    }
  };
  /* ---------------------FUNCTIONS - END--------------------------- */

  /* ---------------------LIFE CYCLE HOOKS - START--------------------------- */
  onMounted(() => {
    modal.value = document.getElementById(
      'cropImageModal'
    ) as HTMLDialogElement;
  });
  /* ---------------------LIFE CYCLE HOOKS - END--------------------------- */

  return {
    // Refs
    srcImageFromUploader,
    imageUploader,
    croppedPokemonImage,
    handleImageUpload,
  };
};
