export const useNavigation = () => {
  const title = 'Welcome to my Portfolio';

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

  const mobileMenuOpen = useState('mobileMenuOpen', () => false); // Default value is false
  const dropdownOpen = useState('dropdownOpen', () => false); // For dropdown state

  const toggleDropdown = (item: any) => {
    item.isOpen = dropdownOpen.value = !dropdownOpen.value;
  }

  const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value;
    dropdownOpen.value = false;
  }

  return {
    title,
    navigation,
    mobileMenuOpen,
    dropdownOpen,
    toggleDropdown,
    toggleMobileMenu,
  }
}
