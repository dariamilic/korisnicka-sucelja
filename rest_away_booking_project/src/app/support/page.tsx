"use client";
import { Navigation } from "@/components/navigation";
import {useState, useCallback} from "react";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);

  // Wrap setIsOpen in useCallback
     const handleSetIsOpen = useCallback((state: boolean) => {
      setIsOpen(state);
    }, []);

  return (
    <main>
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
      <header  className="flex min-h-screen flex-col items-center p-10">
      <h1 className="text-6xl font-extrabold tracking-tight">Support</h1>
      </header>
    </main>
  );
}
