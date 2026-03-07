import { fetchTravelSnapshot } from "../../lib/travelApi";
import Link from "next/link";
import { CurrentUser } from "@/components/login/CurrentUser";

export default async function LoginPage() {
  const { users } = await fetchTravelSnapshot();

  return (
    <div className="glass-card space-y-6 bg-white/95 p-6 sm:p-8">
      <Link
        href={"/"}
        className="text-xs font-medium text-sky-700 hover:text-sky-600"
      >
        ← На главную
      </Link>
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-600">
          АВТОРИЗАЦИЯ
        </p>
        <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
          Выбери, под кем войти
        </h1>
        <p className="max-w-md text-sm text-slate-600">
          На демо-версии приложения авторизация работает через выбор
          пользователя. Позже здесь может быть настоящая регистрация и логин.
        </p>
      </header>

      {
        <div className="grid gap-3 sm:grid-cols-3">
          {users.map((user) => (
            <CurrentUser user={user} key={user.id} />
          ))}
        </div>
      }
    </div>
  );
}
