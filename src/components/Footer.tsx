import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-[color-mix(in_srgb,var(--ink)_10%,transparent)] bg-[color-mix(in_srgb,var(--sage-deep)_92%,black)] text-[color-mix(in_srgb,white_88%,transparent)]">
      <div className="site-container grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-3xl text-white">Head & Heart Yoga</p>
          <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,white_72%,transparent)]">
            Inclusive, philosophy-rooted yoga with Vicky — online, and in
            Stirling, Scotland.
          </p>
        </div>

        <div>
          <p className="text-[0.72rem] tracking-[0.18em] text-sky-soft uppercase">
            Explore
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {site.footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-white"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[0.72rem] tracking-[0.18em] text-sky-soft uppercase">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={site.emailHref} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li>
              <Link href="/support" className="hover:text-white">
                Further support
              </Link>
            </li>
            <li>
              <a
                href={site.giftCard}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Gift card
              </a>
            </li>
            <li>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href={site.social.tiktok}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white"
              >
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="site-container flex flex-col gap-2 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Head & Heart Yoga · Stirling</p>
          <p>Practices as unique as you are</p>
        </div>
      </div>
    </footer>
  );
}
