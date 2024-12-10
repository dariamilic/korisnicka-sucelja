import { Navigation } from "../components/navigation";
import { Hero } from "../components/hero_section";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | RestAway",
    default: "RestAway",
  },
  description: "Book place by your standards",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <Navigation />
        </header>
        <main>
          <Hero />
          {children}
        </main>
        <footer className="mt-auto bg-gray-100 text-center py-4">
          <p className="text-sm text-gray-500">
            © 2023 RestAway. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
