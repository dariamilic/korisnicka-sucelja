'use client'
import { Navigation } from "@/components/navigation";
import { useState, useCallback } from "react";


export default function AccountBookingHistoryPage() {
  const [isOpen, setIsOpen] = useState(false);

   // Wrap setIsOpen in useCallback
   const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

    return (
      <>
      <Navigation setIsOpen={handleSetIsOpen} />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight leading-normal">Sorry, but it looks like you haven&apos;t booked any accommodation yet...</h1>
      </main>
      </>
    );
  }