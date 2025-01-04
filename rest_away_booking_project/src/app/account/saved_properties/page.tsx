'use client'
import { Navigation } from "@/components/navigation";
import { useState } from "react";
import Image from "next/image";



export default function AccountSavedPropertiesPage() {
  const [isOpen, setIsOpen] = useState(false);

    return (
      <>
      <Navigation setIsOpen={setIsOpen} />
      
      <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-700 mb-8">
          Saved property
        </h2>
        <div className="grid grid-cols-3 gap-8">
          {/* First image - Stan */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/stan_zagreb.jpg"
                alt="Stan"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-700 font-semibold">Stan</p>
              <p className="text-gray-500">Zagreb</p>
              <p className="text-gray-500">Cijena: 100€</p>
              <p className="text-gray-500">Datum: 10.01.2025.</p>
            </div>
          </div>

          {/* Second image - Makarska */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/makarska_kuca.jpeg"
                alt="Makarska"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-700 font-semibold">Makarska</p>
              <p className="text-gray-500">Makarska</p>
              <p className="text-gray-500">Cijena: 120€</p>
              <p className="text-gray-500">Datum: 15.01.2025.</p>
            </div>
          </div>

          {/* Third image - Split */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/stan_na_moru.jpeg"
                alt="Split"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-700 font-semibold">Split</p>
              <p className="text-gray-500">Split</p>
              <p className="text-gray-500">Cijena: 150€</p>
              <p className="text-gray-500">Datum: 20.01.2025.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      </>
    );
  }