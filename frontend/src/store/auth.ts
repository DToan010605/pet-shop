import { create } from "zustand";

type User = {
  email: string;
  firstName: string;
  lastName: string;
  birthday?: { day: string; month: string; year: string };
  country?: string;
};

type AuthState = {
  user: User | null;
  setUser: (u: User | null) => void;
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
