'use client';

import { useState, useCallback } from "react";
import { Navigation } from "@/components/navigation";
import { SideNavigation } from '../_components/navigation';

export default function SearchLocationPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Wrap setIsOpen in useCallback
  const handleSetIsOpen = useCallback((state: boolean) => {
   setIsOpen(state);
 }, []);

 return (
   <>
     {/* Navigacija */}
     <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />  
     <SideNavigation/> 
     <main className="flex min-h-screen flex-col items-center p-10">
        <h1 className="text-6xl font-extrabold tracking-tight">Search Location Filter</h1>
      </main>
      </>
    );
  }