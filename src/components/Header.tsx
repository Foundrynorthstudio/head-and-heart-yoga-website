"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BasketLink } from "@/components/BasketLink";
import { site } from "@/lib/site";

const headerNav = site.headerNav;

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-paper shadow-[0_1px_0_rgba(28,36,33,0.08)]">
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
          {headerNav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
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
          <BasketLink />
          <Link
            href="/community"
            className={`btn btn-quiet ${
              pathname === "/community" || pathname.startsWith("/community/")
                ? "border-rosewood text-rosewood"
                : ""
            }`}
          >
            Community
          </Link>
          <Link href="/live" className="btn">
            Join
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
          {headerNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="py-3 text-sm tracking-[0.12em] text-ink uppercase"
            >
              {item.label}
            </Link>
          ))}
          <BasketLink className="py-3" />
          <div className="mt-2 mb-2 flex flex-wrap gap-3">
            <Link href="/community" className="btn btn-quiet">
              Community
            </Link>
            <Link href="/live" className="btn">
              Join
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
