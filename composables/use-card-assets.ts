export const useCardAssets = () => {
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

  // Attack types SVGs
  const Xtype = '/images/icons/x_sign.svg';
  const Plustype = '/images/icons/plus_sign.svg';
  const Minustype = '/images/icons/minus_sign.svg';

  return {
    cardTypes,
    energyTypes,
    Xtype,
    Minustype,
    Plustype,
  };
};
