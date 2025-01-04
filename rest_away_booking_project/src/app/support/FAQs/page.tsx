'use client'
import { Navigation } from "@/components/navigation";
import { useState } from "react";


export default function SupportFAQsPage() {
   const [isOpen, setIsOpen] = useState(false);
   
       return (
       <>
         <Navigation setIsOpen={setIsOpen} />
   
   
         <main className="flex min-h-screen flex-col items-center p-10">
           <h1 className="text-6xl font-extrabold tracking-tight">Contact</h1>
         </main>
       </>
    );
  }