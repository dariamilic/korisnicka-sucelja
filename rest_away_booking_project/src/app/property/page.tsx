"use client";
import { Navigation } from "@/components/navigation";
import { useState } from "react";

export default function Property() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main>
      <Navigation setIsOpen={setIsOpen} />

      <header className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-6xl font-extrabold tracking-tight">
          List Your Property
        </h1>
      </header>
    </main>
  );
}
