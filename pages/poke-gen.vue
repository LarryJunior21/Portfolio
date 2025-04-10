<template>
  <ui-animatedBackground />

  <div
    class="flex justify-center min-h-screen pt-28 py-12 px-0 sm:px-6 lg:px-8 relative"
  >
    <div
      class="flex w-[100%] sm:w-[80%] py-8 px-0 sm:px-8 bg-gray-100 rounded-2xl shadow-lg"
    >
      <div class="max-w-4xl mx-auto grid items-center">
        <h1
          class="pokemon-title text-3xl font-bold text-center text-gray-900 mb-8"
        >
          Pokémon Card Creator
        </h1>

        <div>
          <!-- Card Preview Section -->
          <div
            class="flex items-center justify-center mb-8 flex-col md:flex-row"
          >
            <!-- Left Arrow -->
            <button
              class="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 mr-4 hidden md:block"
              :style="{
                pointerEvents:
                  (!isImageLoaded && buttonClicked === 'next') || isFirstLoad
                    ? 'none'
                    : 'auto',
              }"
              @click="prevCardType"
            >
              <span
                v-if="
                  (!isImageLoaded && buttonClicked === 'prev') || isFirstLoad
                "
                class="loading loading-spinner h-8 w-8 text-gray-700"
              />
              <ChevronLeft v-else class="h-8 w-8 text-gray-700" />
            </button>
            <!-- Card Preview -->
            <div ref="cardPreview" class="relative w-90 h-125">
              <NuxtImg
                :key="cardTypes[currentCardTypeIndex]"
                v-slot="{ src, isLoaded, imgAttrs }"
                class="w-full h-full object-contain"
                :src="cardTypes[currentCardTypeIndex]"
                alt="image"
                :custom="true"
                loading="lazy"
                preload
              >
                <!-- Update the flag localy to use in other components -->
                <div v-show="false">{{ isImageLoaded = isLoaded }}</div>

                <!-- Show the actual image when loaded -->
                <img v-if="isImageLoaded" v-bind="imgAttrs" :src="src" />

                <!-- Show a placeholder while loading -->
                <img
                  v-else
                  class="rounded-2xl"
                  src="https://placehold.co/360x500?text=Loading..."
                  alt="placeholder"
                />
              </NuxtImg>
              <!-- Pokemon Image - Check if the croppedPokemonImage is done from cropper AND 
              if the card image is loaded so the pokemon image doesn't stay floating -->
              <div
                v-if="croppedPokemonImage && isImageLoaded"
                class="absolute top-[52.5px] h-[195px] w-[292px] left-[11.2rem] transform -translate-x-1/2 flex items-center justify-center overflow-hidden"
              >
                <img
                  class="w-full h-full object-contain"
                  :src="croppedPokemonImage"
                  alt="Pokemon"
                />
              </div>

              <!-- Pokemon Name -->
              <div
                v-if="isImageLoaded"
                ref="nameWrapper"
                class="absolute top-[1.2rem] left-[5.5rem] w-[9.5rem] overflow-hidden flex h-[25px]"
              >
                <span
                  ref="nameText"
                  :style="{
                    transform: `scaleX(${nameScale})`,
                    transformOrigin: 'left',
                  }"
                  class="block font-bold text-black text-left whitespace-nowrap self-end text-shadow-md/40 text-shadow-white"
                >
                  {{ pokemonName || "Name" }}
                </span>
              </div>

              <!-- HP -->
              <div
                v-if="isImageLoaded"
                class="flex absolute top-[1.2rem] text-black right-13 text-shadow-md/40 text-shadow-white"
              >
                <div class="font-bold self-end text-[10px]">hp</div>
                <div class="font-bold h-[25px] text-lg">{{ hp || "0" }}</div>
              </div>
              <!-- Attack -->
              <div
                v-if="isImageLoaded"
                class="absolute bottom-[20%] left-1/2 transform text-gray-900 -translate-x-1/2 w-[80%] text-center"
                :class="{ 'text-white': currentCardTypeIndex === 6 }"
              >
                <div class="flex items-center justify-between mb-1 gap-1">
                  <div class="w-full max-w-5">
                    <img
                      v-if="energyType"
                      :src="energyType"
                      class="w-5 h-5 -mr-8"
                      alt="Energy type"
                    />
                  </div>
                  <!-- absolute top-[1.2rem] left-[5.5rem] w-[9.5rem] overflow-hidden flex h-[25px] -->
                  <div
                    v-if="isImageLoaded"
                    ref="attackWrapper"
                    class="overflow-hidden flex"
                  >
                    <span
                      ref="attackText"
                      :style="{
                        transform: `scaleX(${attackScale})`,
                        transformOrigin: 'left',
                      }"
                      class="block font-semibold w-full text-nowrap whitespace-nowrap self-end"
                    >
                      {{ attackName }}
                    </span>
                  </div>
                  <div
                    class="flex items-center justify-end space-x-1 w-full max-w-[72px] overflow-hidden"
                  >
                    {{ energyCost }}
                    <!-- Hide the energy cost display pushing the name to the right -->
                    <div
                      :class="{ hidden: !displayEnergySymbol }"
                      class="w-[8px] relative top-0.5 flex h-3 ml-1 text-black"
                    >
                      {{ displayEnergySymbol }}
                    </div>
                  </div>
                </div>
                <p
                  class="w-[285px] break-words h-13 text-xs text-left overflow-hidden text-ellipsis line-clamp-3"
                >
                  {{ attackDescription }}
                </p>
              </div>
            </div>

            <div class="flex mt-4 md:block md:m-0">
              <button
                class="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 mr-4 block md:hidden"
                :style="{
                  pointerEvents:
                    (!isImageLoaded && buttonClicked === 'next') || isFirstLoad
                      ? 'none'
                      : 'auto',
                }"
                @click="prevCardType"
              >
                <span
                  v-if="
                    (!isImageLoaded && buttonClicked === 'prev') || isFirstLoad
                  "
                  class="loading loading-spinner h-8 w-8 text-gray-700"
                />
                <ChevronLeft v-else class="h-8 w-8 text-gray-700" />
              </button>

              <!-- Right Arrow -->
              <button
                class="p-2 rounded-full bg-white shadow-md hover:bg-gray-200 ml-4"
                :style="{
                  pointerEvents:
                    (!isImageLoaded && buttonClicked === 'prev') || isFirstLoad
                      ? 'none'
                      : 'auto',
                }"
                @click="nextCardType"
              >
                <span
                  v-if="
                    (!isImageLoaded && buttonClicked === 'next') || isFirstLoad
                  "
                  class="loading loading-spinner h-8 w-8 text-gray-700"
                />
                <ChevronRight v-else class="h-8 w-8 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        <!-- Form Section -->
        <div
          class="bg-white shadow rounded-lg p-6 w-[95%] sm:w-full justify-self-center"
        >
          <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <!-- Pokemon Name -->
            <div>
              <label
                for="pokemonName"
                class="block text-sm font-medium text-gray-700"
                >Pokemon Name</label
              >
              <input
                id="pokemonName"
                v-model="pokemonName"
                type="text"
                class="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
              />
            </div>

            <!-- HP -->
            <div>
              <label for="hp" class="block text-sm font-medium text-gray-700"
                >HP</label
              >
              <input
                id="hp"
                v-model="hp"
                type="number"
                min="0"
                max="340"
                class="mt-1 p-2 text-gray-700 block w-full rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                @input="limitHp"
              />
            </div>

            <reusable-imageCropper :image="pokemonImage" />
            <!-- Pokemon Image Upload -->
            <div>
              <label
                for="pokemonImage"
                class="block text-sm font-medium text-gray-700"
                >Pokemon Image</label
              >
              <input
                id="pokemonImage"
                ref="imageUploader"
                type="file"
                accept="image/*"
                class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
                @click="resetImageUploader"
                @change="handleImageUpload"
              />
            </div>

            <div :class="{ 'h-min': !isCollapsed }">
              <label class="block text-sm font-medium text-gray-700"
                >Optional - Input card attack</label
              >
              <!-- Button to toggle the collapsible section -->
              <div
                class="flex p-2 mt-1 w-full shadow-sm bg-violet-50 hover:bg-violet-100 items-center cursor-pointer rounded-md"
                @click="toggleCollapse"
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
                        id="attackName"
                        v-model="attackName"
                        type="text"
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
                            class="py-1 px-0.5 shadow-sm rounded-md hover:bg-gray-100"
                            :class="{
                              'ring-2 ring-violet-500': energyType === energy,
                            }"
                            @click="selectEnergyType(energy)"
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
                          class="flex flex-col items-start lg:flex-row lg:items-center gap-4 mt-1"
                          :class="{
                            'pointer-events-none opacity-25': energyType === '',
                          }"
                        >
                          <!-- Input Field -->
                          <input
                            id="energyCost"
                            v-model="energyCost"
                            type="number"
                            :disabled="energyType === ''"
                            min="0"
                            max="999999"
                            class="p-2 w-full sm:w-24 rounded-md border-gray-300 shadow-sm focus:border-violet-500 focus:ring-violet-500"
                            @input="limitInput"
                          />

                          <!-- Energy Symbol Buttons -->
                          <div class="flex space-x-2">
                            <button
                              :class="[
                                'rounded-md',
                                energySymbol === 'X'
                                  ? 'bg-violet-500 text-white'
                                  : 'hover:bg-gray-300',
                              ]"
                              class="flex p-3 shadow-sm items-center justify-center w-10 h-10 text-xl"
                              @click="changeEnergy('X')"
                            >
                              <NuxtImg :src="Xtype" />
                            </button>
                            <button
                              :class="[
                                'rounded-md',
                                energySymbol === '+'
                                  ? 'bg-violet-500 text-white'
                                  : 'hover:bg-gray-300',
                              ]"
                              class="flex p-2.5 shadow-sm items-center justify-center w-10 h-10 text-xl"
                              @click="changeEnergy('+')"
                            >
                              <NuxtImg :src="Plustype" />
                            </button>
                            <button
                              :class="[
                                'rounded-md',
                                energySymbol === '-'
                                  ? 'bg-violet-500 text-white'
                                  : 'hover:bg-gray-300',
                              ]"
                              class="flex p-2.5 shadow-sm items-center justify-center w-10 h-10 text-xl"
                              @click="changeEnergy('-')"
                            >
                              <NuxtImg :src="Minustype" />
                            </button>
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Download Button -->
          <div class="mt-6">
            <button
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
              @click="downloadCard"
            >
              Download Card
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeft, ChevronRight } from "lucide-vue-next";

const {
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

  // Scaling texts
  nameWrapper,
  nameText,
  nameScale,
  attackWrapper,
  attackText,
  attackScale,

  isFirstLoad,
  isCollapsed,
  collapsible,
  croppedPokemonImage,
  imageUploader,

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
} = usePoke();

const limitInput = () => {
  // Convert the value to a string to prevent exceeding 6 digits
  const maxLength = 6;
  const valueAsString = energyCost.value.toString();

  // If the number is more than 6 digits, truncate it
  if (valueAsString.length > maxLength) {
    energyCost.value = parseInt(valueAsString.slice(0, maxLength));
  }
};
</script>

<script>
export default {
  methods: {
    resetImageUploader() {
      this.$refs.imageUploader.value = "";
    },
  },
};
</script>

<style scoped src="~/assets/css/pokemon.css" />
