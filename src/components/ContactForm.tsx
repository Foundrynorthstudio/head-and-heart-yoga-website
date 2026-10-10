"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Yoga enquiry from ${name || "website"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("ready");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <label className="block">
        <span className="text-[0.72rem] tracking-[0.16em] text-sage uppercase">
          Name
        </span>
        <input
          name="name"
          required
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base outline-none transition focus:border-rosewood"
          autoComplete="name"
        />
      </label>
      <label className="block">
        <span className="text-[0.72rem] tracking-[0.16em] text-sage uppercase">
          Email
        </span>
        <input
          name="email"
          type="email"
          required
          className="mt-2 w-full border-b border-ink/20 bg-transparent py-3 text-base outline-none transition focus:border-rosewood"
          autoComplete="email"
        />
      </label>
      <label className="block">
        <span className="text-[0.72rem] tracking-[0.16em] text-sage uppercase">
          Message
        </span>
        <textarea
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y border-b border-ink/20 bg-transparent py-3 text-base outline-none transition focus:border-rosewood"
        />
      </label>
      <button
        type="submit"
        className="btn"
      >
        Send message
      </button>
      {status === "ready" ? (
        <p className="text-sm text-ink-soft">
          Opening your email app — if nothing appears, write to{" "}
          <a href={site.emailHref} className="text-rosewood underline-offset-2 hover:underline">
            {site.email}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
