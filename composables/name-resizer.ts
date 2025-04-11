export const useNameResizer = () => {
  const { pokemonName, attackName } = usePoke();

  const nameWrapper = useState<HTMLElement | null>('nameWrapper', () => null);
  const attackWrapper = useState<HTMLElement | null>(
    'attackWrapper',
    () => null
  );
  const nameText = useState<HTMLElement | null>('nameText', () => null);
  const attackText = useState<HTMLElement | null>('attackText', () => null);
  const nameScale = useState<number>('nameScale', () => 1);
  const attackScale = useState<number>('attackScale', () => 1);

  /* ---------------------FUNCTIONS - START--------------------------- */
  const updateNameScale = () => {
    if (!nameWrapper.value || !nameText.value) return;
    const wrapperWidth = nameWrapper?.value?.offsetWidth;
    const textWidth = nameText.value.scrollWidth;

    // Only nameScale down if text overflows
    nameScale.value = textWidth > wrapperWidth ? wrapperWidth / textWidth : 1;
  };

  const updateAttackScale = () => {
    if (!attackWrapper.value || !attackText.value) return;
    const wrapperWidth = attackWrapper?.value?.offsetWidth;
    const textWidth = attackText.value.scrollWidth;

    // Only nameScale down if text overflows
    attackScale.value = textWidth > wrapperWidth ? wrapperWidth / textWidth : 1;
  };
  /* ---------------------FUNCTIONS - END--------------------------- */

  /* ---------------------LIFE CYCLE HOOKS - START--------------------------- */
  onMounted(() => {
    updateNameScale();
    updateAttackScale();

    window.addEventListener('resize', () => {
      updateNameScale();
      updateAttackScale();
    });
  });
  /* ---------------------LIFE CYCLE HOOKS - END--------------------------- */

  /* ---------------------WATCHERS - START--------------------------- */
  watch([pokemonName, attackName], async (newValues, oldValues) => {
    await nextTick();
    if (newValues[0] !== oldValues[0]) {
      updateNameScale();
    }
    if (newValues[1] !== oldValues[1]) {
      updateAttackScale();
    }
  });
  /* ---------------------WATCHERS - END--------------------------- */

  return {
    nameWrapper,
    nameText,
    nameScale,
    attackWrapper,
    attackText,
    attackScale,
  };
};
