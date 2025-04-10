import { useState, useRoute } from "nuxt/app";
import { ref } from "vue";

export const useNavigation = () => {
  // Header title
  const title = "<Larry.dev/>";

  // Navigation Options
  const navigation = ref([
    { name: "Home", type: "link", href: "/#home" },
    { name: "About", type: "link", href: "/#about" },
    { name: "Projects", type: "link", href: "/#projects" },
    { name: "Contact", type: "link", href: "/#contact" },
    {
      name: "Examples",
      type: "dropdown",
      isOpen: false,
      items: [{ name: "PokeGen", href: "/poke-gen" }],
    },
  ]);

  const menuTransitioning = useState("menuTransitioning", () => false);
  const mobileMenuOpen = useState("mobileMenuOpen", () => false); // Default value is false
  const dropdownOpen = useState("dropdownOpen", () => false); // For dropdown state
  const route = useRoute();

  const toggleDropdown = (item) => {
    item.isOpen = dropdownOpen.value = !dropdownOpen.value;
  };

  // Toggle mobile menu state, but avoid toggling immediately
  const toggleMobileMenu = (isButtonClicked: boolean = false) => {
    /* 
      The close button is like a dummy because the MobileNavigation already handles closing when clicking 
      outside the view
    */
    if (isButtonClicked && mobileMenuOpen.value === true) return;

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

  const unToggleDropdownAfterClick = (href: string = "") => {
    dropdownOpen.value = false;
    if (href !== "") location.href = href;
  };

  // Is simple logic but it's more to remove logic from html and make it reusable between components
  const isHomePage = (): boolean => {
    return route.path === "/";
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
    isHomePage,
  };
};
