'use client'
import { Navigation } from "@/components/navigation";
import { useState } from "react";


export default function AccountBookingHistoryPage() {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <>
      <Navigation setIsOpen={setIsOpen} />
      <main className="flex min-h-screen flex-col items-center justify-center p-6 text-center">
        <h1 className="text-2xl font-bold tracking-tight leading-normal">Sorry, but it looks like you haven't booked any accommodation yet...</h1>
      </main>
      </>
    );
  }