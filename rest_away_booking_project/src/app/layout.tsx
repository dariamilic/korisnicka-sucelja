import { Navigation } from "../components/navigation";

import "./globals.css";
import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import { Footer } from "../components/footer";

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
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
