import { TripCard } from "../../components/trip/TripCard";
import { fetchTravelData } from "../../lib/travelApi";
import { FavoritesList } from "./FavoritesList";

export default async function FavoritesPage() {
  const { users, trips } = await fetchTravelData();

  return (
    <div className="space-y-5">
      <header className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            Избранное
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Путешествия друзей, которые тебе понравились
          </p>
        </div>
      </header>

      <FavoritesList trips={trips} users={users} />
    </div>
  );
}
