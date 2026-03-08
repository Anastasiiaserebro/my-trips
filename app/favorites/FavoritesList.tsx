"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { TripCard } from "../../components/trip/TripCard";
import { useAuthStore } from "../../lib/authStore";
import type { Trip, User } from "../../lib/travelStore";

interface Props {
  trips: Trip[];
  users: User[];
}

export function FavoritesList({ trips, users }: Props) {
  const router = useRouter();
  const currentUser = useAuthStore((state) => state.currentUser);

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, [currentUser, router]);

  if (!currentUser) {
    return (
      <div className="glass-card flex items-center justify-center px-6 py-12 text-sm text-slate-500">
        Перенаправление на вход...
      </div>
    );
  }

  const likedTrips = trips.filter(
    (trip) =>
      trip.likedByUserIds.includes(currentUser.id) &&
      trip.userId !== currentUser.id,
  );

  if (likedTrips.length === 0) {
    return (
      <div className="glass-card flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
        <p className="text-sm text-slate-600">
          Пока нет избранных путешествий. Лайкай поездки друзей — они появятся
          здесь.
        </p>
        <button
          type="button"
          onClick={() => router.push("/trips")}
          className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-500"
        >
          Смотреть путешествия
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {likedTrips.map((trip) => {
        const author = users.find((u) => u.id === trip.userId) ?? users[0];
        return <TripCard key={trip.id} trip={trip} author={author} />;
      })}
    </div>
  );
}
