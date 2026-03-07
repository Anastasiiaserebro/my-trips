"use client";

import { useAuthStore } from "@/lib/authStore";
import { Trip } from "@/lib/travelStore";
import { useRouter } from "next/compat/router";

interface Props {
  trip: Trip;
  isLiked?: boolean;
}

export function Like({ isLiked, trip }: Props) {
  const router = useRouter();
  const currentUser = useAuthStore((state) => state.currentUser);
  //   const updated = await toggleTripLike(trip.id, currentUser.id);

  const handleLikeClick = () => {
    if (!currentUser || !trip) {
      router?.push("/login");
      return;
    }
  };

  return (
    <button
      type="button"
      onClick={handleLikeClick}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold ${
        isLiked
          ? "bg-rose-500/10 text-rose-500"
          : "bg-sky-50 text-slate-600 hover:bg-sky-100"
      }`}
    >
      <span>{isLiked ? "♥" : "♡"}</span>
      <span>{trip.likedByUserIds.length} лайков</span>
    </button>
  );
}
