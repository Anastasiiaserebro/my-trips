"use client";

import { useAuthStore } from "@/lib/authStore";
import { User } from "@/lib/travelStore";
import { useRouter } from "next/compat/router";


interface Props {
  user: User;
}

export function CurrentUser({ user }: Props) {
  const setCurrentUser = useAuthStore((state) => state.setCurrentUser);

  const router = useRouter();
  const currentUser = useAuthStore((state) => state.currentUser);

  const handleSelect = (user: User) => {
    setCurrentUser(user);
    router?.push("/trips");
  };

  const isCurrent = currentUser?.id === user.id;

  return (
    <button
      key={user.id}
      type="button"
      onClick={() => handleSelect(user)}
      className={`flex flex-col items-center gap-2 rounded-2xl border px-3 py-4 text-center text-xs transition ${
        isCurrent
          ? "border-sky-500 bg-sky-50"
          : "border-sky-100 bg-sky-50/60 hover:border-sky-300 hover:bg-sky-50"
      }`}
    >
      <span
        className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
        style={{ backgroundColor: user.avatarColor }}
      >
        {user.name.charAt(0).toUpperCase()}
      </span>
      <span className="font-medium text-slate-900">{user.name}</span>
      <span className="text-[11px] text-slate-500">{user.homeCity}</span>
    </button>
  );
}
