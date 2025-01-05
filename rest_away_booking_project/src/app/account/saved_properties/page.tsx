'use client';
import { Navigation } from "@/components/navigation";
import { useState } from "react";
import Image from "next/image";

export default function AccountSavedPropertiesPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Podaci za svaku nekretninu
  const properties = [
    {
      image: "/stan_zagreb.jpg",
      alt: "Stan",
      country: "Hrvatska",
      price: "47€",
      location: "Zagreb",
      date: "10.01.2025.-11.02.2025.",
    },
    {
      image: "/makarska_kuca.jpeg",
      alt: "Makarska",
      country: "Hrvatska",
      price: "350€",
      location: "Makarska",
      date: "15.07.2025.-20.07.2025.",
    },
    {
      image: "/stan_na_moru.jpeg",
      alt: "Split",
      country: "Hrvatska",
      price: "180€",
      location: "Split",
      date: "20.08.2025.-22.08.2025.",
    },
    {
      image: "/jahorina.jpg",
      alt: "Jahorina",
      country: "Bosna i Hercegovina",
      price: "250€",
      location: "Jahorina",
      date: "25.02.2025.-27.03.2025.",
    },
  ];

  return (
    <>
      <Navigation setIsOpen={setIsOpen} />

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-brand-text-strong text-primary-500 mb-8">
            Saved property
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <div className="relative w-full h-48">
                  <Image
                    src={property.image}
                    alt={property.alt}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="mt-4 text-center">
                  <p className="text-lg text-gray-700 font-semibold">{property.country}</p>
                  <p className="text-gray-500">Price: {property.price}</p>
                  <p className="text-gray-500">Location: {property.location}</p>
                  <p className="text-gray-500">Date: {property.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
