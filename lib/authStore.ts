import { create } from "zustand";
import type { User } from "./travelStore";
import { devtools } from "zustand/middleware";

type AuthState = {
  currentUser?: User;
  setCurrentUser: (user: User) => void;
  clearCurrentUser: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    currentUser: undefined,
    setCurrentUser: (user) => set({ currentUser: user }),
    clearCurrentUser: () => set({ currentUser: undefined }),
  })),
);
