import { TripCard } from "../../../components/trip/TripCard";
import { fetchTravelData, toggleTripLike } from "../../../lib/travelApi";
import Link from "next/link";

export default async function FriendProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;
  const { users, trips } = await fetchTravelData();

  const user = users.find((u) => u.id === userId);
  const userTrips = trips.filter((t) => t.userId === userId);

  if (!user) {
    return (
      <div className="glass-card flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
        <p className="text-sm font-semibold text-slate-800">
          Пользователь не найден
        </p>
        <Link
          href="/friends"
          className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-500"
        >
          Вернуться к списку друзей
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <Link href="/friends" className="text-xs font-medium hover:text-sky-200">
        ← Назад к друзьям
      </Link>

      <header className="glass-card flex flex-col gap-4 bg-sky-50/90 p-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span
            className="flex h-12 w-12 items-center justify-center rounded-full text-base font-semibold text-white"
            style={{ backgroundColor: user.avatarColor }}
          >
            {user.name.charAt(0).toUpperCase()}
          </span>
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              {user.name}
            </h1>
            <p className="text-xs text-slate-600">{user.homeCity}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
          <span className="pill bg-sky-100 text-sky-800">
            {userTrips.length}{" "}
            {userTrips.length === 1
              ? "путешествие"
              : userTrips.length >= 2 && userTrips.length <= 4
                ? "путешествия"
                : "путешествий"}
          </span>
        </div>
      </header>

      {userTrips.length === 0 ? (
        <div className="glass-card flex items-center justify-center px-6 py-10 text-center text-sm text-slate-500">
          У этого друга пока нет сохранённых поездок.
        </div>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {userTrips.map((trip) => (
            <TripCard key={trip.id} trip={trip} author={user} />
          ))}
        </div>
      )}
    </div>
  );
}
