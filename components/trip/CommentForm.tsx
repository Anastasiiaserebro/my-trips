"use client";

import { useAuthStore } from "@/lib/authStore";
import { addCommentToTrip } from "@/lib/travelApi";
import { Trip } from "@/lib/travelStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import z from "zod";

type CommentFormValues = z.infer<typeof commentSchema>;

const commentSchema = z.object({
  message: z
    .string()
    .min(3, "Комментарий слишком короткий")
    .max(400, "Максимум 400 символов"),
});

interface Props {
  trip: Trip;
}

export function CommentFrom({ trip }: Props) {
  const router = useRouter();
  const currentUser = useAuthStore((state) => state.currentUser);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CommentFormValues>({
    resolver: zodResolver(commentSchema),
    defaultValues: { message: "" },

  });

  const onSubmit = async (values: CommentFormValues) => {
    if (!currentUser) {
      router.push("/login");
      return;
    }

    await addCommentToTrip(
      trip.id,
      currentUser.id,
      values.message.trim(),
    );
    reset({ message: "" });
    router.refresh();
  };

  return (
    <form className="mt-3 space-y-2" onSubmit={handleSubmit(onSubmit)}>
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
        <p className="text-[11px] text-rose-500">{errors.message.message}</p>
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
    </form>
  );
}
