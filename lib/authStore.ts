import { create } from "zustand";
import type { Trip, User } from "./travelStore";
import { devtools, persist } from "zustand/middleware";

type AuthState = {
  currentUser?: User;
  likedTrips: Trip[];
  setCurrentUser: (user: User) => void;
  clearCurrentUser: () => void;
  likeTrip: (trip: Trip) => void;
  dislikeTrip: (trip: Trip) => void;
};

const initialState = {
  currentUser: undefined,
  likedTrips: [],
};

export const useAuthStore = create<AuthState>()(
  devtools((set) => ({
    ...initialState,
    setCurrentUser: (user) => set({ currentUser: user }),
    clearCurrentUser: () => set({ currentUser: undefined }),
    likeTrip: (trip: Trip) =>
      set((state) => ({ likedTrips: [...state.likedTrips, trip] })),
    dislikeTrip: (trip: Trip) =>
      set((state) => ({
        likedTrips: state.likedTrips.filter((t) => t.id !== trip.id),
      })),
  })),
);
