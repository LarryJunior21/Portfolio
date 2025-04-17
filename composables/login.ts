export const useLogin = () => {
  const { login } = useAuthStore();
  const email = ref("");
  const password = ref("");
  const success = ref(false); // store a boolean, not a Promise

  // Loading state for the login/register buttons
  const isLoading = useState("isLoading", () => false);
  const closeButton = ref<HTMLElement | null>(null);

  const handleLogin = async () => {
    try {
      const result = await login(email.value, password.value);
      success.value = result;
    } catch (err: any) {
      emitActionError(err.message || "Login failed");
    }
  };

  const emitActionError = (error: string) => {
    alert(error);
  };

  const closeModal = () => {
    closeButton.value?.click();
  };

  watch(success, (newValue) => {
    if (newValue) closeModal();
  });

  return {
    handleLogin,
    emitActionError,
    email,
    password,
    isLoading,
    closeButton,
  };
};
