'use client'

import { useState } from "react"
import { Navigation } from "@/components/navigation"

export function PropertyWrapper({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main>
      <Navigation setIsOpen={setIsOpen} />
      <div className="flex min-h-screen max-w-3xl m-auto flex-col items-center p-10">
        {children}
      </div>
    </main>
  )
} 