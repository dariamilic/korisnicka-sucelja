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
        <nav className="bg-gray-700 p-2 border-b-4  flex items-center justify-between">
          <img src="/RestAway.png" alt="RestAway logo" className="w-38 h-20" />

          <div className="flex-1 flex justify-end">
            <Navigation />
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}