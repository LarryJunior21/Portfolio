import { defineStore } from 'pinia';
import type { Session, User } from '~/types/general-types';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | any,
    token: null as null | string,
    refreshToken: null as null | string,
    expiresAt: null as null | number,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const response = await $fetch<{
          error: boolean;
          message: string;
          session?: Session;
          user?: User;
        }>('/api/login', {
          method: 'POST',
          body: { email, password },
        });

        // Check if session and user exist and then set them
        if (response.session && response.user) {
          this.token = response.session.access_token;
          this.refreshToken = response.session.refresh_token;
          this.user = response.user;
          this.expiresAt = response.session.expires_at;
        } else {
          throw new Error('Login failed: No session or user data received');
        }
      } catch (err: any) {
        throw new Error(err?.data?.error || 'Login failed');
      }
    },

    logout() {
      this.token = null;
      this.user = null;
      this.refreshToken = null;
      this.expiresAt = null;

      const authCookie = useCookie('auth');
      authCookie.value = null;
    },
  },
  persist: true,
});
