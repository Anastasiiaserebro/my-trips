import Link from "next/link";
import { fetchTravelSnapshot } from "../../lib/travelApi";
import { Friends } from "@/components/friends/Friends";

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

      <Friends trips={trips} users={users} />
    </div>
  );
}
