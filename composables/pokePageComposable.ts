import { ref, onMounted, watch, nextTick, computed, onBeforeMount } from 'vue';
import html2canvas from 'html2canvas-pro';

export const usePoke = () => {
  // Card types (backgrounds)
  const cardTypes = ref([
    '/images/pokemon-cards/card-water.png',
    '/images/pokemon-cards/card-fire.png',
    '/images/pokemon-cards/card-grass.png',
    '/images/pokemon-cards/card-lightning.png',
    '/images/pokemon-cards/card-psychic.png',
    '/images/pokemon-cards/card-fighting.png',
    '/images/pokemon-cards/card-dark.png',
  ]);

  // Energy types
  const energyTypes = ref([
    '/images/pokemon-cards/energy/fire.png',
    '/images/pokemon-cards/energy/water.png',
    '/images/pokemon-cards/energy/grass.png',
    '/images/pokemon-cards/energy/lightning.png',
    '/images/pokemon-cards/energy/psychic.png',
    '/images/pokemon-cards/energy/fighting.png',
    '/images/pokemon-cards/energy/dark.png',
    '/images/pokemon-cards/energy/fairy.png',
    '/images/pokemon-cards/energy/metal.png',
    '/images/pokemon-cards/energy/dragon.png',
    '/images/pokemon-cards/energy/colorless.png',
  ]);

  // State
  const isImageLoaded = ref(false);
  const currentCardTypeIndex = ref(0);
  const pokemonName = ref('');
  const hp = ref(100);
  const pokemonImage = ref('');
  const energyType = ref('');
  const energySymbol = ref('');
  const displayEnergySymbol = ref(``);
  const energyCost = ref('');
  const attackDescription = ref('');
  const cardPreview = ref(null);
  const attackName = ref('');
  const buttonClicked = ref('');

  const wrapper = ref<HTMLElement | null>(null);
  const text = ref<HTMLElement | null>(null);
  const scale = ref(1);
  const isFirstLoad = ref(true);

  // State to track the collapse
  const isCollapsed = ref(false);

  // Ref to get the collapsible element
  const collapsible = ref(null);

  onBeforeMount(() => {
    if (isFirstLoad.value) {
      isFirstLoad.value = false; // Set to false after the first load
    }
  });

  const Xtype = `
    <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="xmark"
    class="svg-inline--fa fa-xmark"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    >
    <path
        fill="currentColor"
        d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"
    ></path>
    </svg>
    `;

  const Plustype = `
    <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="plus"
    class="svg-inline--fa fa-plus"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    >
    <path
        fill="currentColor"
        d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
    ></path>
    </svg>`;

  const Minustype = `
    <svg
    aria-hidden="true"
    focusable="false"
    data-prefix="fas"
    data-icon="minus"
    class="svg-inline--fa fa-minus"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    >
    <path
        fill="currentColor"
        d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"
    ></path>
    </svg>`;

  const updateScale = () => {
    if (!wrapper.value || !text.value) return;
    const wrapperWidth = wrapper?.value?.offsetWidth;
    const textWidth = text.value.scrollWidth;

    // Only scale down if text overflows
    scale.value = textWidth > wrapperWidth ? wrapperWidth / textWidth : 1;
  };

  onMounted(() => {
    updateScale();
    window.addEventListener('resize', updateScale);
  });

  watch(pokemonName, async () => {
    await nextTick();
    updateScale();
  });

  // HP limit function
  const limitHp = () => {
    if (hp.value > 340) {
      hp.value = 340;
    } else if (hp.value < 0) {
      hp.value = 0;
    }
  };

  const selectEnergyType = (energy: string) => {
    // Allows the user to select and disselect
    energyType.value = energyType.value === energy ? '' : energy;
    if (energyType.value === '') {
      energySymbol.value = '';
    }
  };

  // Also watch for changes to ensure the limit is enforced
  watch(hp, (newValue: number) => {
    if (newValue > 340) {
      hp.value = 340;
    } else if (newValue < 0) {
      hp.value = 0;
    }
  });

  const changeEnergy = (newValue: string) => {
    energySymbol.value = newValue == energySymbol.value ? '' : newValue;

    switch (energySymbol.value) {
      case 'X':
        displayEnergySymbol.value = Xtype;
        break;
      case '+':
        displayEnergySymbol.value = Plustype;
        break;
      case '-':
        displayEnergySymbol.value = Minustype;
        break;
      default:
        displayEnergySymbol.value = ``;
    }
  };

  // Navigation functions
  const nextCardType = () => {
    buttonClicked.value = 'next';

    currentCardTypeIndex.value =
      (currentCardTypeIndex.value + 1) % cardTypes.value.length;
  };

  const prevCardType = () => {
    buttonClicked.value = 'prev';

    currentCardTypeIndex.value =
      (currentCardTypeIndex.value - 1 + cardTypes.value.length) %
      cardTypes.value.length;
  };

  // Handle image upload
  const handleImageUpload = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        pokemonImage.value = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  // Download card as image
  const downloadCard = async () => {
    if (!cardPreview.value) return;

    try {
      const canvas = await html2canvas(cardPreview.value, {
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      const link = document.createElement('a');
      link.download = `${pokemonName.value || 'pokemon'}-card.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
    } catch (error) {
      console.error('Error generating card image:', error);
      alert('Failed to generate card image. Please try again.');
    }
  };

  // Computed style for animation
  const collapsibleStyle = computed(() => {
    return isCollapsed.value
      ? { maxHeight: '1000px', opacity: 1 } // Open state style
      : { maxHeight: '0', opacity: 0 }; // Collapsed state style
  });

  // Toggle function to change collapse state
  const toggleCollapse = () => {
    isCollapsed.value = !isCollapsed.value;
  };

  return {
    // Refs
    isImageLoaded,
    currentCardTypeIndex,
    pokemonName,
    hp,
    pokemonImage,
    energyType,
    energySymbol,
    displayEnergySymbol,
    energyCost,
    attackDescription,
    cardPreview,
    attackName,
    buttonClicked,
    wrapper,
    text,
    scale,
    isFirstLoad,
    isCollapsed,
    collapsible,

    // Methods & other vars (assuming these are defined elsewhere in your setup)
    collapsibleStyle,
    cardTypes,
    energyTypes,
    Xtype,
    Minustype,
    Plustype,
    toggleCollapse,
    downloadCard,
    handleImageUpload,
    prevCardType,
    nextCardType,
    limitHp,
    selectEnergyType,
    changeEnergy,
  };
};
