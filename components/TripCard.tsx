'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Trip, User } from "../lib/travelStore";

type TripCardProps = {
  trip: Trip;
  author: User;
  isLiked?: boolean;
  likesCount?: number;
  onToggleLike?: () => void;
};

export function TripCard({
  trip,
  author,
  isLiked,
  likesCount,
  onToggleLike,
}: TripCardProps) {
  const router = useRouter();

  const handleOpen = () => {
    router.push(`/trips/${trip.id}`);
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onToggleLike) return;
    onToggleLike();
  };

  const ratingStars = "★★★★★".slice(0, trip.rating);

  return (
    <button
      type="button"
      onClick={handleOpen}
      className="glass-card flex w-full flex-col overflow-hidden text-left transition hover:-translate-y-0.5 hover:shadow-2xl"
    >
      <div className="relative h-40 w-full overflow-hidden sm:h-48">
        <Image
          src={trip.coverImage}
          alt={trip.title}
          fill
          sizes="(min-width: 768px) 400px, 100vw"
          className="object-cover"
        />
        <div className="absolute left-3 top-3 flex gap-2">
          <span className="pill bg-sky-900/80 text-sky-50">
            {trip.city}, {trip.country}
          </span>
          <span className="pill bg-sky-50/95 text-sky-800">
            {trip.days} {trip.days === 1 ? "день" : "дней"}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-sky-50">
          <span className="text-[13px]">{ratingStars}</span>
          <span className="text-[11px] opacity-80">
            {trip.rating}.0 / 5 •{" "}
            {trip.approximateCost.toLocaleString("ru-RU")} {trip.currency}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
              {trip.title}
            </h3>
            <p className="mt-1 text-xs text-slate-500">
              {new Date(trip.startDate).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "short",
              })}{" "}
              —{" "}
              {new Date(trip.endDate).toLocaleDateString("ru-RU", {
                day: "2-digit",
                month: "short",
              })}
            </p>
          </div>
          {/* {typeof isLiked === "boolean" ? (
            <button
              type="button"
              onClick={handleLike}
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-[11px] font-medium ${
                isLiked
                  ? "bg-rose-500/10 text-rose-500"
                  : "bg-sky-50 text-slate-500 hover:bg-sky-100"
              }`}
            >
              <span>{isLiked ? "♥" : "♡"}</span>
              <span>{likesCount ?? trip.likedByUserIds.length}</span>
            </button>
          ) : null} */}
        </div>
        <div className="flex items-center justify-between border-t border-sky-50 pt-3 text-[11px] text-slate-500">
          <div className="flex items-center gap-2">
            <span
              className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white"
              style={{ backgroundColor: author.avatarColor }}
            >
              {author.name.charAt(0).toUpperCase()}
            </span>
            <div className="flex flex-col">
              <span className="font-medium text-slate-700">
                {author.name}
              </span>
              <span className="text-[10px]">
                из {author.homeCity}
              </span>
            </div>
          </div>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-sky-700">
            Смотреть детали
          </span>
        </div>
      </div>
    </button>
  );
}

