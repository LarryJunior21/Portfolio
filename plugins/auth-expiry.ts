export default defineNuxtPlugin(() => {
  const auth = useAuthStore();

  let logoutTimeout: NodeJS.Timeout | undefined;

  watch(
    () => auth.expiresAt,
    (expiresAt) => {
      try {
        if (logoutTimeout) clearTimeout(logoutTimeout);

        if (!expiresAt) return;

        const now = Date.now() / 1000;
        const delay = (expiresAt - now) * 1000;

        if (delay <= 0) {
          auth.logout();
          return;
        }

        logoutTimeout = setTimeout(() => {
          auth.logout();
        }, delay);
      } catch (err: any) {
        throw new Error('Error in auth expiry watcher:', err);
      }
    },
    { immediate: true }
  );
});
