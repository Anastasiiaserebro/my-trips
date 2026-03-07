// import { useRouter } from "next/navigation";
// import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { Comment, Trip, User } from "../../../lib/travelStore";
import {
  addCommentToTrip,
  fetchTravelSnapshot,
  toggleTripLike,
} from "../../../lib/travelApi";
import { useAuthStore } from "../../../lib/authStore";
import Link from "next/link";

const commentSchema = z.object({
  message: z
    .string()
    .min(3, "Комментарий слишком короткий")
    .max(400, "Максимум 400 символов"),
});

type CommentFormValues = z.infer<typeof commentSchema>;

export default async function TripDetailPage({
  params,
}: {
  params: Promise<{ tripId: string }>;
}) {
  const { tripId } = await params;
  // const router = useRouter();
  // const currentUser = useAuthStore((state) => state.currentUser);

  const snapshot = await fetchTravelSnapshot();
  const trip = snapshot.trips.find((t) => t.id === tripId);
  const comments = snapshot.comments.filter((c) => c.tripId === tripId);
  const users = snapshot.users;

  const tripComments = comments
    .slice()
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );

  // const isLiked =
  //   !!currentUser && !!trip
  //     ? trip.likedByUserIds.includes(currentUser.id)
  //     : false;

  // const {
  //   register,
  //   handleSubmit,
  //   reset,
  //   formState: { errors, isSubmitting },
  // } = useForm<CommentFormValues>({
  //   resolver: zodResolver(commentSchema),
  //   defaultValues: { message: "" },
  // });

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
        {/* <button
          type="button"
          onClick={() => router.push("/trips")}
          className="rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white hover:bg-sky-500"
        >
          Вернуться к списку
        </button> */}
      </div>
    );
  }

  const ratingStars = "★★★★★".slice(0, trip.rating);

  // const onSubmit = async (values: CommentFormValues) => {
  //   if (!currentUser) {
  //     router.push("/login");
  //     return;
  //   }
  //   const created = await addCommentToTrip(
  //     trip.id,
  //     currentUser.id,
  //     values.message.trim(),
  //   );
  //   setComments((prev) => [...prev, created]);
  //   reset({ message: "" });
  // };

  // const handleLikeClick = () => {
  //   if (!currentUser || !trip) {
  //     router.push("/login");
  //     return;
  //   }
  //   void (async () => {
  //     const updated = await toggleTripLike(trip.id, currentUser.id);
  //     setTrip(updated);
  //   })();
  // };

  return (
    <div className="glass-card space-y-6 bg-white/95 p-6 sm:p-8">
      {/* <button
        type="button"
        onClick={() => router.back()}
        className="text-xs font-medium text-sky-700 hover:text-sky-600"
      >
        ← Назад к путешествиям
      </button> */}

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
          {/* <button
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
          </button> */}
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

            {/* <form className="mt-3 space-y-2" onSubmit={handleSubmit(onSubmit)}>
              <textarea
                rows={3}
                placeholder={
                  currentUser
                    ? "Поделитесь впечатлением или задайте вопрос..."
                    : "Только авторизованные друзья могут оставлять комментарии."
                }
                className="w-full resize-none rounded-2xl border border-sky-100 bg-sky-50/60 px-3 py-2 text-xs text-slate-800 outline-none ring-sky-400 focus:bg-white focus:ring-2 disabled:opacity-60"
                {...register("message")}
                disabled={!currentUser || isSubmitting}
              />
              {errors.message && (
                <p className="text-[11px] text-rose-500">
                  {errors.message.message}
                </p>
              )}
              <div className="flex items-center justify-between">
                <p className="text-[11px] text-slate-500">
                  Комментарии видят все авторизованные друзья.
                </p>
                <button
                  type="submit"
                  disabled={!currentUser || isSubmitting}
                  className="rounded-full bg-sky-600 px-4 py-1.5 text-xs font-semibold text-white disabled:cursor-not-allowed disabled:bg-sky-300"
                >
                  Отправить
                </button>
              </div>
            </form> */}

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
