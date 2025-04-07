<template>
  <div class="min-h-screen bg-gray-100 pt-28 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">
      <h1
        class="pokemon-title text-3xl font-bold text-center text-gray-900 mb-8"
      >
        Pokémon Card Creator
      </h1>

      <div>
        <!-- Card Preview Section -->
        <div class="flex items-center justify-center mb-8 flex-col md:flex-row">
          <!-- Left Arrow -->
          <button
            @click="prevCardType"
            class="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 mr-4 hidden md:block"
          >
            <ChevronLeft class="h-8 w-8 text-gray-700" />
          </button>

          <!-- Card Preview -->
          <div class="relative w-90 h-125" ref="cardPreview">
            <NuxtImg
              class="w-full h-full object-contain"
              :src="cardTypes[currentCardTypeIndex]"
              alt="image"
              :custom="true"
              v-slot="{ src, isLoaded, imgAttrs }"
            >
              <!-- Update the flag localy to use in other components -->
              <div v-show="false">{{ (isImageLoaded = isLoaded) }}</div>
              <!-- Show the actual image when loaded -->
              <img v-if="isLoaded" v-bind="imgAttrs" :src="src" />

              <!-- Show a placeholder while loading -->
              <img
                v-else
                class="rounded-2xl"
                src="https://placehold.co/360x500?text=Loading..."
                alt="placeholder"
              />
            </NuxtImg>
            <!-- Card Background -->
            <!-- <img
              
              alt="Pokemon card background"
            /> -->

            <!-- Pokemon Image -->
            <div
              v-if="pokemonImage"
              class="absolute top-[3.3rem] h-[194px] w-[291px] left-[11.2rem] transform -translate-x-1/2 flex items-center justify-center overflow-hidden"
            >
              <img :src="pokemonImage" alt="Pokemon" />
            </div>

            <!-- Pokemon Name -->
            <div
              v-if="isImageLoaded"
              ref="wrapper"
              class="absolute top-[1.2rem] left-[5.5rem] w-[9.5rem] overflow-hidden flex h-[25px]"
            >
              <span
                ref="text"
                :style="{
                  transform: `scaleX(${scale})`,
                  transformOrigin: 'left',
                }"
                class="block font-bold text-black text-left whitespace-nowrap self-end text-shadow-md/40 text-shadow-white"
              >
                {{ pokemonName || 'Name' }}
              </span>
            </div>

            <!-- HP -->
            <div
              v-if="isImageLoaded"
              class="flex absolute top-[1.2rem] text-black right-13 text-shadow-md/40 text-shadow-white"
            >
              <div class="font-bold self-end text-[10px]">hp</div>
              <div class="font-bold h-[25px] text-lg">{{ hp || '0' }}</div>
            </div>
            <!-- Attack -->
            <div
              v-if="isImageLoaded"
              class="absolute bottom-[20%] left-1/2 transform text-gray-900 -translate-x-1/2 w-[80%] text-center"
              :class="{ 'text-white': currentCardTypeIndex === 6 }"
            >
              <div class="flex items-center justify-between mb-1">
                <img
                  v-if="energyType"
                  :src="energyType"
                  class="w-5 h-5 -mr-8"
                  alt="Energy type"
                />
                <span class="font-semibold" v-if="attackName">
                  {{ attackName }}
                </span>
                <div class="flex items-center space-x-1">
                  {{ energyCost }}
                  <div
                    class="w-[8px] flex h-3 ml-1"
                    v-html="displayEnergySymbol"
                  />
                </div>
              </div>
              <p class="w-[285px] break-words h-13 text-xs text-left">
                {{ attackDescription }}
              </p>
            </div>
          </div>

          <div class="flex mt-4 md:block md:m-0">
            <button
              @click="prevCardType"
              class="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 mr-4 block md:hidden"
            >
              <ChevronLeft class="h-8 w-8 text-gray-700" />
            </button>

            <!-- Right Arrow -->
            <button
              @click="nextCardType"
              class="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 ml-4"
            >
              <ChevronRight class="h-8 w-8 text-gray-700" />
            </button>
          </div>
        </div>
      </div>

      <!-- Form Section -->
      <div class="bg-white shadow rounded-lg p-6">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Pokemon Name -->
          <div>
            <label
              for="pokemonName"
              class="block text-sm font-medium text-gray-700"
              >Pokemon Name</label
            >
            <input
              type="text"
              id="pokemonName"
              v-model="pokemonName"
              class="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
            />
          </div>

          <!-- HP -->
          <div>
            <label for="hp" class="block text-sm font-medium text-gray-700"
              >HP</label
            >
            <input
              type="number"
              id="hp"
              v-model="hp"
              min="0"
              max="340"
              @input="limitHp"
              class="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
            />
          </div>

          <!-- Pokemon Image Upload -->
          <div>
            <label
              for="pokemonImage"
              class="block text-sm font-medium text-gray-700"
              >Pokemon Image</label
            >
            <input
              type="file"
              id="pokemonImage"
              @change="handleImageUpload"
              accept="image/*"
              class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
            />
          </div>

          <div :class="{ 'h-min': !isCollapsed }">
            <label
              for="pokemonImage"
              class="block text-sm font-medium text-gray-700"
              >Optional - Input card attack</label
            >
            <!-- Button to toggle the collapsible section -->
            <div
              @click="toggleCollapse"
              class="flex p-2 mt-1 w-full shadow-sm bg-violet-50 hover:bg-violet-100 items-center cursor-pointer rounded-md"
            >
              <span class="text-sm font-medium text-violet-700"
                >Attack Section</span
              >
              <svg
                class="h-4 w-4 ml-1 transition-transform duration-300 text-violet-700"
                :class="isCollapsed ? 'rotate-180' : ''"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>

            <!-- Collapsible Div with animated unfold/roll-down effect -->
            <div
              ref="collapsible"
              class="bg-white shadow rounded-lg overflow-hidden transition-all duration-300 ease-in-out mt-2"
              :style="collapsibleStyle"
            >
              <div class="p-6">
                <!-- Attack Section -->
                <div class="sm:col-span-2 text-gray-700">
                  <!-- Attack Name -->
                  <div>
                    <label
                      for="attackName"
                      class="block text-sm font-medium text-gray-700"
                      >Attack Name</label
                    >
                    <input
                      type="text"
                      id="attackName"
                      v-model="attackName"
                      class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    />
                  </div>

                  <!-- Energy Cost and Symbol -->
                  <div
                    class="mt-4 grid grid-rows-2 gap-4"
                    :class="{
                      'pointer-events-none opacity-25': attackName === '',
                    }"
                  >
                    <!-- ENERGY COST ICONS -->
                    <div>
                      <label
                        for="energyCost"
                        class="block text-sm font-medium text-gray-700"
                        >Energy Cost</label
                      >
                      <div class="mt-1 inline-block space-x-2">
                        <button
                          v-for="(energy, index) in energyTypes"
                          :key="index"
                          @click="selectEnergyType(energy)"
                          class="py-1 px-0.5 shadow-sm rounded-md hover:bg-gray-100"
                          :class="{
                            'ring-2 ring-violet-500': energyType === energy,
                          }"
                        >
                          <img
                            :src="energy"
                            class="w-6 h-6"
                            alt="Energy type"
                          />
                        </button>
                      </div>
                    </div>
                    <!-- DAMAGE X + - -->
                    <div>
                      <label
                        for="energyCost"
                        class="block text-sm font-medium text-gray-700"
                        >Damage</label
                      >
                      <div
                        class="flex flex-col items-start md:flex-row md:items-center gap-4 mt-1"
                        :class="{
                          'pointer-events-none opacity-25': energyType === '',
                        }"
                      >
                        <!-- Input Field -->
                        <input
                          type="number"
                          id="energyCost"
                          :disabled="energyType === ''"
                          v-model="energyCost"
                          min="0"
                          class="p-2 w-full sm:w-24 rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                        />

                        <!-- Energy Symbol Buttons -->
                        <div class="flex space-x-2">
                          <button
                            @click="changeEnergy('X')"
                            :class="[
                              'rounded-md',
                              energySymbol === 'X'
                                ? 'bg-violet-500 text-white'
                                : 'hover:bg-gray-300',
                            ]"
                            class="flex p-3 shadow-sm items-center justify-center w-10 h-10 text-xl"
                            v-html="Xtype"
                          />
                          <button
                            @click="changeEnergy('+')"
                            :class="[
                              'rounded-md',
                              energySymbol === '+'
                                ? 'bg-violet-500 text-white'
                                : 'hover:bg-gray-300',
                            ]"
                            class="flex p-2.5 shadow-sm items-center justify-center w-10 h-10 text-xl"
                            v-html="Plustype"
                          />
                          <button
                            @click="changeEnergy('-')"
                            :class="[
                              'rounded-md',
                              energySymbol === '-'
                                ? 'bg-violet-500 text-white'
                                : 'hover:bg-gray-300',
                            ]"
                            class="flex p-2.5 shadow-sm items-center justify-center w-10 h-10 text-xl"
                            v-html="Minustype"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Description -->
                  <div
                    class="mt-4"
                    :class="{
                      'pointer-events-none opacity-25': attackName === '',
                    }"
                  >
                    <label
                      for="attackDescription"
                      class="block text-sm font-medium text-gray-700"
                      >Description</label
                    >
                    <textarea
                      id="attackDescription"
                      v-model="attackDescription"
                      rows="3"
                      class="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Download Button -->
        <div class="mt-6">
          <button
            @click="downloadCard"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          >
            Download Card
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, nextTick, computed } from 'vue';
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import html2canvas from 'html2canvas-pro';

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

const wrapper = ref<HTMLElement | null>(null);
const text = ref<HTMLElement | null>(null);
const scale = ref(1);

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
  currentCardTypeIndex.value =
    (currentCardTypeIndex.value + 1) % cardTypes.value.length;
};

const prevCardType = () => {
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

// State to track the collapse
const isCollapsed = ref(false);

// Ref to get the collapsible element
const collapsible = ref(null);

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
</script>

<style scoped src="~/assets/css/pokemon.css" />
