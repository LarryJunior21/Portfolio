import { defineStore } from 'pinia';
import type { PokeCard } from '../types/poke-type';

const card = {
  id: 0,
  name: 'Name',
  hp: 100,
} as PokeCard;

export const usePokeStore = defineStore('card', {
  state: () => ({
    current_card: card,
    hasCardOnPreviousState: false,
    retrievedCopy: card,
  }),
  getters: {
    getCard(state) {
      return state.current_card;
    },
    getSavedState() {
      const savedCard = localStorage.getItem('card');
      if (savedCard) {
        this.hasCardOnPreviousState = true;
        this.retrievedCopy = JSON.parse(savedCard);
      }
    },
  },
  actions: {
    updateCard(card: PokeCard) {
      this.current_card = card;
    },
    retrieveCurrentCard() {
      this.current_card = this.retrievedCopy;
    },
  },
  persist: {
    storage: piniaPluginPersistedstate.localStorage(),
  },
});
