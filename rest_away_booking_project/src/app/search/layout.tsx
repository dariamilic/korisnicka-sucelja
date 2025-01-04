import type { Metadata } from "next";
import { Navigation } from "./_components/navigation";

export const metadata: Metadata = {
  title: "Search",
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Sporedna navigacija između glavne navigacije i sadržaja */}
      <div className="flex justify-center bg-gray-100 p-4 border-b">
        <Navigation />
      </div>

      {/* Glavni sadržaj stranice */}
      <main className="p-6">
        {children}
      </main>
    </section>
  );
}