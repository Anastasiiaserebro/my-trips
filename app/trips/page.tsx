
import { TripCard } from "../../components/TripCard";
import type { Trip, User } from "../../lib/travelStore";
import { fetchTravelSnapshot, toggleTripLike } from "../../lib/travelApi";
import { useAuthStore } from "../../lib/authStore";

export default async function TripsPage() {
  const snapshot = await fetchTravelSnapshot();
  const {users, trips} = snapshot

  return (
    <div className="space-y-5">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Все путешествия
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Короткий обзор по городам: рейтинг, дни и примерный бюджет.
          </p>
        </div>
      </header>

      {trips.length === 0 ? (
        <div className="glass-card flex items-center justify-center px-6 py-12 text-center text-sm text-slate-500">
          У тебя пока нет сохранённых поездок. Начни с первой истории после
          авторизации.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {trips.map((trip) => {
            const author = users.find((u) => u.id === trip.userId) ?? users[0];
            // const likedByCurrent =
            //   currentUser && trip.likedByUserIds.includes(currentUser.id);

            return (
              <TripCard
                key={trip.id}
                trip={trip}
                author={author}
                // isLiked={!!currentUser && !!likedByCurrent}
                likesCount={trip.likedByUserIds.length}
                // onToggleLike={
                //   currentUser
                //     ? async () => {
                //         const updated = await toggleTripLike(
                //           trip.id,
                //           currentUser.id,
                //         );
                //         setTrips((prev) =>
                //           prev.map((t) => (t.id === updated.id ? updated : t)),
                //         );
                //       }
                //     : undefined
                // }
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
