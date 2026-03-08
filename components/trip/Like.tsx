"use client";

import { useState } from "react";
import { useAuthStore } from "@/lib/authStore";
import { toggleTripLike } from "@/lib/travelApi";
import { Trip } from "@/lib/travelStore";
import { useRouter } from "next/navigation";

interface Props {
  trip: Trip;
}

export function Like({ trip }: Props) {
  const router = useRouter();
  const currentUser = useAuthStore((state) => state.currentUser);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isOwnTrip = trip.userId === currentUser?.id;
  const isLiked = currentUser
    ? trip.likedByUserIds.includes(currentUser.id)
    : false;

  const handleLikeClick = async () => {
    if (!currentUser || !trip) {
      router.push("/login");
      return;
    }

    if (isOwnTrip) return;

    setIsSubmitting(true);
    try {
      await toggleTripLike(trip.id, currentUser.id);
      router.refresh();
    } finally {
      setIsSubmitting(false);
    }
  };

  const canLike = currentUser && !isOwnTrip;

  if (isOwnTrip) {
    return (
      <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-1.5 text-xs font-semibold text-slate-500">
        <span>♡</span>
        <span>{trip.likedByUserIds.length} лайков</span>
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleLikeClick}
      disabled={!canLike || isSubmitting}
      className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${
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
