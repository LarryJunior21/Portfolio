export const useLogin = () => {
  const { login } = useAuthStore();

  const handleLogin = () => {
    login('', '');
  };

  return {
    handleLogin,
  };
};
