'use client'

import { useState, useCallback } from "react"
import { Navigation } from "@/components/navigation"

export function PropertyWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
   // Wrap setIsOpen in useCallback
   const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <main>
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
      <div className="flex min-h-screen max-w-3xl m-auto flex-col items-center p-10">
        {children}
      </div>
    </main>
  )
} 