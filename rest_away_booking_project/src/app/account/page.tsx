"use client";
import { Navigation } from "@/components/navigation";
import { SideNavigation } from "./_components/navigation";
import { useState, useCallback } from "react";
import Link from "next/link";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <main>
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
      {/* Glavni sadržaj */}
      <div className="relative h-screen w-full">
        {/* Pozadinska slika */}
        <div
           className="absolute inset-0"
           style={{
             backgroundImage: "url('/prazanzid.jpg')", // Promijeni u naziv svoje slike
           }}
        ></div>

        {/* Sloj za tekst */}
        <div className="absolute inset-0 flex flex-col items-center pt-10">
          {/* Glavni naslov */}
          <div className="text-center text-white mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              It looks like you're not logged in yet.
            </h1>
          </div>

          {/* Tekstovi i gumbi na lijevoj i desnoj strani */}
          <div className="flex justify-between w-full px-10 mt-40">
            {/* Lijevi tekst i gumb */}
            <div className="flex flex-col items-center w-1/2 text-left text-white">
              <p className="text-xl md:text-2xl font-semibold mb-4">
                Log in now and continue exploring amazing opportunities.
              </p>
              <Link href="/signIn">
                <button className=" mt-2 py-2 px-4 bg-[#b2935c] text-white rounded-lg hover:bg-[#5B597A] focus:ring-2 focus:ring-offset-2 focus:ring-[#5B597A]">
                  Sign In
                </button>
              </Link>
            </div>

            {/* Desni tekst i gumb */}
            <div className="flex flex-col items-center w-1/2 text-right text-white">
              <p className="text-xl md:text-2xl font-semibold mb-4">
                Don’t have a profile? Sign up today and join our community!
              </p>
              <Link href="/signUp">
                <button className=" mt-2 py-2 px-4 bg-[#b2935c] text-white rounded-lg hover:bg-[#5B597A] focus:ring-2 focus:ring-offset-2 focus:ring-[#5B597A]">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
