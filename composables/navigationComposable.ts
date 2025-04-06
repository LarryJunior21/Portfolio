export const useNavigation = () => {
  // Header title
  const title = 'Welcome to my portfolio';

  // Navigation Options
  const navigation = ref([
    { name: 'Home', type: 'link', href: '/#home' },
    { name: 'About', type: 'link', href: '/#about' },
    { name: 'Projects', type: 'link', href: '/#projects' },
    { name: 'Contact', type: 'link', href: '/#contact' },
    {
      name: 'Examples',
      type: 'dropdown',
      isOpen: false,
      items: [
        { name: 'Generate your pokemon card', href: '/poke-gen' },
        { name: 'Example 2', href: '#example-2' },
        { name: 'Example 3', href: '#example-3' },
      ],
    },
  ]);

  const menuTransitioning = useState('menuTransitioning', () => false);
  const mobileMenuOpen = useState('mobileMenuOpen', () => false); // Default value is false
  const dropdownOpen = useState('dropdownOpen', () => false); // For dropdown state

  const toggleDropdown = (item: any) => {
    item.isOpen = dropdownOpen.value = !dropdownOpen.value;
  };

  // Toggle mobile menu state, but avoid toggling immediately
  const toggleMobileMenu = () => {
    menuTransitioning.value = true; // Start transition
    setTimeout(() => {
      mobileMenuOpen.value = !mobileMenuOpen.value; // Change state after transition delay
      dropdownOpen.value = false;
    }, 100);
  };

  // After the transition leaves (when the MenuIcon disappears), we can update the state
  const afterLeave = () => {
    menuTransitioning.value = false; // Transition finished
  };

  const unToggleDropdownAfterClick = (href: string = '') => {
    dropdownOpen.value = false;
    if (href !== '') location.href = href;
  };

  return {
    title,
    navigation,
    mobileMenuOpen,
    dropdownOpen,
    toggleDropdown,
    toggleMobileMenu,
    afterLeave,
    unToggleDropdownAfterClick,
  };
};
