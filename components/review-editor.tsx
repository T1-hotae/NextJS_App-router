"use client";

import { createReviewAction } from "@/actions/create-review.action";
import style from "./review-editor.module.css";
import { useActionState, useEffect } from "react";

export default function ReviewEditor({ bookId }: { bookId: string }) {
  // form 태그 상태 핸들링 핸들링 액션함수, null(초깃값)
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null,
  );

  useEffect(() => {
    if (state && state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section>
      <form className={style.form_container} action={formAction}>
        <input name="bookId" value={bookId} hidden readOnly />
        <textarea
          disabled={isPending}
          required
          name="content"
          placeholder="리뷰 내용"
        />
        <div className={style.submit_container}>
          <input
            required
            disabled={isPending}
            type="text"
            name="author"
            placeholder="작성자"
          />
          <button disabled={isPending} type="submit">
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
