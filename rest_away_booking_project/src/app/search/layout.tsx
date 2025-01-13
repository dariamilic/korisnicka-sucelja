import type { Metadata } from "next";


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
  
      {/* Glavni sadržaj stranice */}
      <main className="p-6">
        {children}
      </main>
    </section>
  );
}