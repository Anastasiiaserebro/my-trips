import { fetchTravelData } from "../../../lib/travelApi";
import Link from "next/link";
import { Like } from "@/components/trip/Like";
import { CommentFrom } from "@/components/trip/CommentForm";
import { revalidateTag } from "next/cache";

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  // revalidateTag('travelData', 'travelData')

  const snapshot = await fetchTravelData();
  const trip = snapshot.trips.find((t) => t.id === tripId);
  const comments = trip?.comments ?? [];
  const users = snapshot.users;

  const tripComments = comments
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  const author = users.find((u) => u.id === trip?.userId);

  if (!trip || !author) {
    return (
      <div className="glass-card flex flex-col items-center justify-center gap-3 px-6 py-12 text-center">
        <p className="text-sm font-semibold text-slate-800">
          Путешествие не найдено
        </p>
        <Link href={`/trips`} className="rounded-full bg-sky-600 px-4 py-2">
          Вернуться к списку
        </Link>
      </div>
    );
  }

  const ratingStars = "★★★★★".slice(0, trip.rating);

  return (
    <div className="glass-card space-y-6 bg-white/95 p-6 sm:p-8">
      <Link
        href={`/trips`}
        className="text-xs font-medium text-sky-700 hover:text-sky-600"
      >
        ← Назад к путешествиям
      </Link>
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
            ПУТЕШЕСТВИЕ
          </p>
          <h1 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {trip.title}
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            {trip.city}, {trip.country} • {trip.days}{" "}
            {trip.days === 1 ? "день" : "дней"}
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {new Date(trip.startDate).toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "long",
            })}{" "}
            —{" "}
            {new Date(trip.endDate).toLocaleDateString("ru-RU", {
              day: "2-digit",
              month: "long",
            })}
          </p>
        </div>
        <div className="flex flex-col items-end gap-2 text-right">
          <div className="flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-medium text-sky-800">
            <span className="text-sm">{ratingStars}</span>
            <span>
              {trip.rating}.0 / 5 •{" "}
              {trip.approximateCost.toLocaleString("ru-RU")} {trip.currency}
            </span>
          </div>
          <Like trip={trip} />
        </div>
      </header>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <div className="space-y-4">
          <div className="rounded-2xl bg-sky-50/80 p-4 text-sm text-slate-700">
            <p className="font-medium text-slate-900">Впечатления от поездки</p>
            <p className="mt-2 text-sm leading-relaxed">
              {trip.notes ??
                "Автор пока не добавил подробное описание этого путешествия."}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-sky-100 bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                ДОСТОПРИМЕЧАТЕЛЬНОСТИ
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {trip.attractions.map((place) => (
                  <li key={place.id} className="space-y-0.5">
                    <p className="font-medium">{place.name}</p>
                    {place.note ? (
                      <p className="text-xs text-slate-500">{place.note}</p>
                    ) : null}
                  </li>
                ))}
                {trip.attractions.length === 0 && (
                  <li className="text-xs text-slate-500">
                    Список мест пока пуст.
                  </li>
                )}
              </ul>
            </div>

            <div className="rounded-2xl border border-sky-100 bg-white/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
                КАФЕ И РЕСТОРАНЫ
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {trip.cafes.map((place) => (
                  <li key={place.id} className="space-y-0.5">
                    <p className="font-medium">{place.name}</p>
                    {place.note ? (
                      <p className="text-xs text-slate-500">{place.note}</p>
                    ) : null}
                  </li>
                ))}
                {trip.cafes.length === 0 && (
                  <li className="text-xs text-slate-500">
                    Кафе пока не добавлены.
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
              АВТОР
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span
                className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
                style={{ backgroundColor: author.avatarColor }}
              >
                {author.name.charAt(0).toUpperCase()}
              </span>
              <div>
                <p className="text-sm font-medium text-slate-900">
                  {author.name}
                </p>
                <p className="text-xs text-slate-600">{author.homeCity}</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-sky-100 bg-white/90 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">
              КОММЕНТАРИИ
            </p>

            <CommentFrom trip={trip} />

            <div className="mt-4 space-y-3">
              {tripComments.length === 0 ? (
                <p className="text-xs text-slate-500">
                  Пока нет комментариев — станьте первым.
                </p>
              ) : (
                tripComments.map((comment) => {
                  const commentAuthor =
                    users.find((u) => u.id === comment.authorId) ?? author;
                  return (
                    <div
                      key={comment.id}
                      className="rounded-2xl bg-sky-50/80 p-3 text-xs text-slate-800"
                    >
                      <div className="mb-1 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span
                            className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-semibold text-white"
                            style={{
                              backgroundColor: commentAuthor.avatarColor,
                            }}
                          >
                            {commentAuthor.name.charAt(0).toUpperCase()}
                          </span>
                          <span className="font-medium">
                            {commentAuthor.name}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500">
                          {new Date(comment.createdAt).toLocaleDateString(
                            "ru-RU",
                            {
                              day: "2-digit",
                              month: "short",
                            },
                          )}
                        </span>
                      </div>
                      <p className="leading-relaxed">{comment.message}</p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
