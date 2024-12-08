import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Property",
};



export default function Property() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">
        List Your Property
      </h1>
    </main>
  );
}
