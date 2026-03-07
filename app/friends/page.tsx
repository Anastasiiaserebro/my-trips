import Link from "next/link";
import { fetchTravelSnapshot } from "../../lib/travelApi";

export default async function FriendsPage() {
  const { users, trips } = await fetchTravelSnapshot();

  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Друзья
        </h1>
        <p className="text-sm text-slate-600">
          Перейдите в профиль друга, чтобы посмотреть его путешествия, лайки и
          комментарии.
        </p>
      </header>

      {
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {users.map((user) => {
            const userTrips = trips.filter((t) => t.userId === user.id);
            const totalTrips = userTrips.length;
            const avgRating =
              totalTrips === 0
                ? null
                : (
                    userTrips.reduce((sum, t) => sum + t.rating, 0) / totalTrips
                  ).toFixed(1);

            return (
              <Link
                key={user.id}
                href={`/friends/${user.id}`}
                className="glass-card flex flex-col items-start gap-3 p-4 text-left transition hover:-translate-y-0.5"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                    style={{ backgroundColor: user.avatarColor }}
                  >
                    {user.name.charAt(0).toUpperCase()}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {user.name}
                    </p>
                    <p className="text-xs text-slate-500">{user.homeCity}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 text-[11px] text-slate-600">
                  <span className="pill bg-sky-50 text-sky-800">
                    {totalTrips}{" "}
                    {totalTrips === 1
                      ? "путешествие"
                      : totalTrips >= 2 && totalTrips <= 4
                        ? "путешествия"
                        : "путешествий"}
                  </span>
                  {avgRating && (
                    <span className="pill bg-amber-50 text-amber-700">
                      Средняя оценка {avgRating} / 5
                    </span>
                  )}
                </div>
                <span className="mt-1 text-[11px] font-semibold text-sky-700">
                  Открыть профиль →
                </span>
              </Link>
            );
          })}
        </div>
      }
    </div>
  );
}
