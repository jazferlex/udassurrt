"use client";

import { SubmitEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";

type FormState = {
  email: string;
  password: string;
  remember: boolean;
};

export default function LoginPage() {
  const [form, setForm] = useState<FormState>({
    email: "",
    password: "",
    remember: false,
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const onSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!form.email || !form.password) {
      setError("pls fill in both email + password");
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      alert(`Signed in as ${form.email} (demo only)`);
    } catch {
      setError("login machine broke. try again in a sec");
    } finally {
      setIsSubmitting(false);
    }
  };

  const onGoogleSignIn = async () => {
    setError(null);
    setIsGoogleLoading(true);

    try {
      await signIn("google", { callbackUrl: "/" });
    } catch {
      setError("google login failed. try again.");
      setIsGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* dreamy background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-(--primary)/25 blur-3xl" />
        <div className="absolute right-15 top-24 h-80 w-80 rounded-full bg-(--secondary)/25 blur-3xl" />
        <div className="absolute -bottom-22.5 left-1/3 h-96 w-96 rounded-full bg-(--accent)/20 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-lg flex-col justify-center px-6 py-12">
        <div className="mb-8 space-y-2">
          <p className="inline-flex w-fit items-center gap-2 rounded-full border border-border-soft bg-(--card-bg)/70 px-3 py-1 text-xs font-semibold tracking-wide">
            <span className="text-primary">●</span> u-dassurrt bakery club
          </p>
          <h1 className="text-3xl font-semibold tracking-tight">
            welcome back, sweet tooth 🍰
          </h1>
          <p className="text-sm opacity-80">
            sign in to save favorites, track orders, and pretend you are “just browsing”.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-5 backdrop-blur-sm rounded-3xl bg-transparent p-6 shadow-[0_16px_40px_rgba(255,126,185,0.18)]"
        >
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
              className="w-full rounded-2xl border border-border-soft bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-(--foreground)/40 focus:border-primary focus:ring-4 focus:ring-(--primary)/20"
              placeholder="you@sprinkles.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">
              password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={form.password}
              onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))}
              className="w-full rounded-2xl border border-border-soft bg-white/70 px-4 py-3 text-sm outline-none transition placeholder:text-(--foreground)/40 focus:border-primary focus:ring-4 focus:ring-(--primary)/20"
              placeholder="••••••••"
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <label className="flex items-center gap-2 text-sm opacity-80">
              <input
                type="checkbox"
                checked={form.remember}
                onChange={(e) => setForm((prev) => ({ ...prev, remember: e.target.checked }))}
                className="h-4 w-4 rounded border-border-soft accent-primary"
              />
              remember me
            </label>

            <Link
              href="/"
              className="text-sm font-medium text-primary underline decoration-(--primary)/40 underline-offset-4 hover:decoration-primary"
            >
              i forgot
            </Link>
          </div>

          {error ? (
            <p className="rounded-2xl border border-(--primary)/25 bg-(--primary)/10 px-4 py-3 text-sm text-foreground">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-2xl bg-linear-to-r from-primary to-accent px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,126,185,0.35)] transition hover:brightness-105 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "mixing your login..." : "sign in"}
          </button>

          <button
            type="button"
            onClick={onGoogleSignIn}
            disabled={isGoogleLoading}
            className="w-full rounded-2xl border border-border-soft bg-white/70 px-4 py-3 text-sm font-semibold text-foreground transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white/10 dark:hover:bg-white/20"
          >
            {isGoogleLoading ? "connecting to google..." : "continue with Google"}
          </button>

          <div className="pt-1 text-center text-xs opacity-70">
            by signing in, you agree to be tempted by desserts daily.
          </div>
        </form>

        <p className="mt-6 text-center text-sm opacity-80">
          not you?{" "}
          <Link
            href="/"
            className="font-semibold text-foreground underline decoration-(--primary)/35 underline-offset-4 hover:decoration-primary"
          >
            go home
          </Link>
        </p>
      </div>
    </div>
  );
}
