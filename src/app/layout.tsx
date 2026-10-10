import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["SOFT", "opsz"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Head & Heart Yoga | Stirling & Online",
    template: "%s | Head & Heart Yoga",
  },
  description:
    "Inclusive yoga with Vicky in Stirling and online. Vinyasa-based classes shaped around your natural mobility, with philosophy at the heart of practice.",
  metadataBase: new URL("https://www.headandheartyoga.com"),
  openGraph: {
    title: "Head & Heart Yoga",
    description:
      "Yoga practices as unique as you are — Stirling & Online with Vicky.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/images/favicon.jpg",
    apple: "/images/favicon.jpg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
