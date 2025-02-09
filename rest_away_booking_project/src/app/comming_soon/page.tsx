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
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
      
      
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-5xl font-bold tracking-tight leading-normal">Comming soon...
        </h1>
      </main>
      </>
    );
  }