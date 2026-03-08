"use client";

import Link from "next/link";
import { useAuthStore } from "@/lib/authStore";

export function RedirectLink() {
  const currentUser = useAuthStore((state) => state.currentUser);

  return currentUser ? (
    <Link
      href="/me"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-400/40 transition hover:bg-amber-300"
    >
      Перейти в профиль
    </Link>
  ) : (
    <Link
      href="/login"
      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-400/40 transition hover:bg-amber-300"
    >
      Авторизоваться
    </Link>
  );
}
