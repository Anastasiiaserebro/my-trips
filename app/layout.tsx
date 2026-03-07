import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "../components/Header";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "myTrips — твои путешествия и друзья",
  description:
    "Личный дневник путешествий: города, впечатления, заметки и путешествия друзей.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-sky-50 antialiased`}
      >
        <Theme>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 bg-gradient-to-b from-sky-700 to-sky-50 pb-10 pt-4">
              <div className="mx-auto max-w-5xl px-4 sm:px-6">{children}</div>
            </main>
          </div>
        </Theme>
      </body>
    </html>
  );
}
