"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,box-shadow,backdrop-filter] duration-300 ${
        scrolled || open
          ? "bg-[color-mix(in_srgb,var(--paper)_88%,transparent)] shadow-[0_1px_0_rgba(28,36,33,0.08)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="site-container flex items-center justify-between gap-4 py-3 md:py-4">
        <Link href="/" className="relative z-10 flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="Head & Heart Yoga"
            width={180}
            height={105}
            className="h-12 w-auto md:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[0.8rem] tracking-[0.14em] uppercase transition-colors ${
                  active
                    ? "text-rosewood"
                    : "text-ink-soft hover:text-rosewood"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/book"
            className="rounded-full bg-rosewood px-5 py-2.5 text-[0.78rem] tracking-[0.14em] text-white uppercase transition-colors hover:bg-rosewood-deep"
          >
            Book a class
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[color-mix(in_srgb,var(--ink)_12%,transparent)] bg-white/70 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-px bg-ink transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`h-px bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px bg-ink transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      <div
        className={`lg:hidden ${open ? "pointer-events-auto visible opacity-100" : "pointer-events-none invisible opacity-0"} absolute inset-x-0 top-full border-b border-[color-mix(in_srgb,var(--ink)_8%,transparent)] bg-paper/95 backdrop-blur-md transition-opacity`}
      >
        <nav className="site-container flex flex-col gap-1 py-4">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-sm tracking-[0.12em] text-ink uppercase"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-2 mb-2 inline-flex items-center justify-center rounded-full bg-rosewood px-5 py-3 text-[0.78rem] tracking-[0.14em] text-white uppercase"
          >
            Book a class
          </Link>
        </nav>
      </div>
    </header>
  );
}
