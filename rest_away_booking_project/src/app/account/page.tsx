"use client";
import { Navigation } from "@/components/navigation";
import { SideNavigation } from "./_components/navigation";
import { useState, useCallback, useEffect } from "react";
import AccountProfilePage from "./profile/page";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <main>
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
            {/* Sporedna navigacija između glavne navigacije i sadržaja */}
                  <div className="flex justify-center p-1">
                  <SideNavigation/>
                  </div>
    </main>
  );
}
