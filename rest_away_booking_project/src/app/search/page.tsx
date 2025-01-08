"use client";
import { Navigation } from "@/components/navigation";
import { SideNavigation } from "./_components/navigation";
import {useState, useCallback} from "react";


export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  // Wrap setIsOpen in useCallback
  const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);
  return (
    <main>
    <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
    <SideNavigation />
    <header  className="flex min-h-screen flex-col items-center p-10">
    <h1 className="text-6xl font-extrabold tracking-tight">Search</h1>
    </header>
  </main>
  );
}
