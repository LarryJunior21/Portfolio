export const useLogin = () => {
  const { login } = useAuthStore();
  const { showToast } = useToast();

  const email = ref("");
  const password = ref("");
  const success = ref(false); // store a boolean, not a Promise

  // Loading state for the login/register buttons
  const isLoading = useState("isLoading", () => false);
  const closeButton = ref<HTMLElement | null>(null);

  const handleLogin = async () => {
    isLoading.value = true;
    try {
      const result = await login(email.value, password.value);
      success.value = result;
      isLoading.value = false;
    } catch (err: any) {
      emitActionError("Server error, please try again later", "error");
      isLoading.value = false;
    }
  };

  const emitActionError = (
    message: string,
    type: "info" | "success" | "error"
  ) => {
    showToast(message, type);
  };

  const closeModal = () => {
    closeButton.value?.click();
  };

  watch(success, (newValue) => {
    if (newValue) {
      closeModal();
      emitActionError("You are logged in :)", "success");
    } else {
      emitActionError("Login failed, please check email/password", "error");
    }
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
