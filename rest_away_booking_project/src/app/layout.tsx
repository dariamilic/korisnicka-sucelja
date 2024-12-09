import { Navigation } from "../components/navigation";
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
        <div>
          <Navigation />
        </div>

        {children}
      </body>
    </html>
  );
}
