import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  user: { id: string; email: string | undefined } | null;
  loading: boolean;
  login: (userData: { id: string; email: string | undefined }) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // Initial state
  isLoggedIn: false,
  user: null,
  loading: true,

  // Actions to update the state
  login: (userData) =>
    set({
      isLoggedIn: true,
      user: userData,
      loading: false,
    }),
  logout: () =>
    set({
      isLoggedIn: false,
      user: null,
      loading: false,
    }),
  setLoading: (isLoading) => set({ loading: isLoading }),
}));
