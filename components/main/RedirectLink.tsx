"use client";

import Link from "next/link";
import { useRouter } from "next/compat/router";
import { useAuthStore } from "@/lib/authStore";

export function RedirectLink() {
  const currentUser = useAuthStore((state) => state.currentUser);

  const router = useRouter();

  const handlePrimaryClick = () => {
    if (currentUser) {
      router?.push("/trips");
    } else {
      router?.push("/login");
    }
  };

  return (
    <Link
      href="/trips"
      onClick={handlePrimaryClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-md shadow-amber-400/40 transition hover:bg-amber-300"
    >
      {currentUser ? "Перейти к моим путешествиям" : "Авторизоваться"}
    </Link>
  );
}
