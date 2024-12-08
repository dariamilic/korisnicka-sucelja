import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Search",
};

export default function Search() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Search</h1>
    </main>
  );
}
