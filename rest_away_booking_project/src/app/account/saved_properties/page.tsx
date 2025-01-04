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
        <h2 className="text-4xl font-bold text-center text-brand-text-strong text-gray-500 mb-8">
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
              <p className="text-lg text-gray-700 font-semibold">Hrvatska</p>
              <p className="text-gray-500">Price: 47€ </p>
              <p className="text-gray-500">Location: Zagreb</p>
              <p className="text-gray-500">Date: 10.01.2025.-11.02.2025.</p> 
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
              <p className="text-lg text-gray-700 font-semibold">Hrvatska</p>
              <p className="text-gray-500">Price: 350€</p>
              <p className="text-gray-500">Location: Makarska</p>
              <p className="text-gray-500">Date: 15.07.2025.-20.07.2025</p>
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
              <p className="text-lg text-gray-700 font-semibold">Hrvatska</p>
              <p className="text-gray-500">Price: 180€</p>
              <p className="text-gray-500">Location: Split</p>
              <p className="text-gray-500">Date: 20.08.2025.-22.08.2025</p>
            </div>
          </div>
           {/* Fourth image - Dubrovnik */}
           <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/jahorina.jpg"
                alt="Jahorina"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-lg text-gray-700 font-semibold">Bosna i Hercegovina</p>
              <p className="text-gray-500">Price: 250€</p>
              <p className="text-gray-500">Location: Jahorina</p>
              <p className="text-gray-500">Date: 25.02.2025.-27.03.2025.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      </>
    );
  }