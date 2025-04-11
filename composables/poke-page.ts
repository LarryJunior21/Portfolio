import html2canvas from 'html2canvas-pro';
import type { PokeCard } from '../types/poke-type';

export const usePoke = () => {
  /* ---------------------CONSTS AND STATES - START--------------------------- */
  const store = usePokeStore();
  const { cardTypes, Xtype, Plustype, Minustype } = useCardAssets();
  const { croppedPokemonImage } = useImageUpload();

  // Name States
  const isImageLoaded = useState('isImageLoaded', () => false);
  const pokemonName = useState<string>('pokemonName', () => '');
  const attackName = useState<string>('attackName', () => '');
  const cardPreview = ref(null);

  const hp = ref(100);
  const currentCardTypeIndex = ref(0);
  const energyType = ref('');
  const energySymbol = ref('');
  const displayEnergySymbol = ref('');
  const energyCost = ref('');
  const attackDescription = ref('');

  const buttonClicked = ref('');

  // Check for the first load of the page
  const isFirstLoad = ref(true);

  // State to track the collapse
  const isCollapsed = ref(false);

  // Ref to get the collapsible element
  const collapsible = ref(null);

  // Open cropp modal programatically after uploading the image

  const currentCard = useState('currentCard', () => ({}));
  /* ---------------------CONSTS AND STATES - END--------------------------- */

  /* ---------------------FUNCTIONS - START--------------------------- */
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
        displayEnergySymbol.value = '';
    }
  };

  // Navigation functions
  const nextCardType = () => {
    isImageLoaded.value = false;
    buttonClicked.value = 'next';

    currentCardTypeIndex.value =
      (currentCardTypeIndex.value + 1) % cardTypes.value.length;
  };

  const prevCardType = () => {
    isImageLoaded.value = false;
    buttonClicked.value = 'prev';

    currentCardTypeIndex.value =
      (currentCardTypeIndex.value - 1 + cardTypes.value.length) %
      cardTypes.value.length;
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
      alert('Failed to generate card image. Please try again.' + error);
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
  /* ---------------------FUNCTIONS - END--------------------------- */

  /* ---------------------LIFE CYCLE HOOKS - START--------------------------- */
  onBeforeMount(() => {
    if (isFirstLoad.value) {
      isFirstLoad.value = false; // Set to false after the first load
    }
  });
  /* ---------------------LIFE CYCLE HOOKS - END--------------------------- */

  /* ---------------------WATCHERS - START--------------------------- */
  // Also watch for changes to ensure the limit is enforced
  watch(hp, (newValue: number) => {
    if (newValue > 340) {
      hp.value = 340;
    } else if (newValue < 0) {
      hp.value = 0;
    }
  });

  watch(
    [pokemonName, hp, attackName, attackDescription, energyType, energyCost],
    () => {
      currentCard.value = {
        id: 0,
        name: pokemonName.value,
        hp: hp.value,
        image: croppedPokemonImage,
        attackName: attackName.value,
        // energyType: energyType.value,
        energyCost: energyCost.value,
        attackDescription: attackDescription.value,
      };
      store.updateCard(currentCard.value as PokeCard);
    }
  );
  /* ---------------------WATCHERS - END--------------------------- */

  return {
    // Refs
    isImageLoaded,
    currentCardTypeIndex,
    pokemonName,
    hp,
    energyType,
    energySymbol,
    displayEnergySymbol,
    energyCost,
    attackDescription,
    cardPreview,
    attackName,
    buttonClicked,

    isFirstLoad,
    isCollapsed,
    collapsible,

    // Methods & other vars (assuming these are defined elsewhere in your setup)
    collapsibleStyle,
    cardTypes,
    toggleCollapse,
    downloadCard,
    prevCardType,
    nextCardType,
    limitHp,
    selectEnergyType,
    changeEnergy,
  };
};
