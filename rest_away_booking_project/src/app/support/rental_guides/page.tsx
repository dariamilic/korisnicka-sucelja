'use client';
import { Navigation } from "@/components/navigation";
import { useState } from "react";
import Image from 'next/image';

export default function SupportRentalGuidesPage() {
  const [isOpen, setIsOpen] = useState(false);

  // Podaci za svaku sekciju (slika, naslov, tekst)
  const sections = [
    {
      image: "/kucaUsumi.png",
      alt: "Section 1 Image",
      title: "Check the Location.",
      text: "Ensure the accommodation is close to the places you plan to visit, like attractions, beaches, or city centers. Use maps to avoid inconvenient distances.",
    },
    {
      image: "/zgrada.png",
      alt: "Section 2 Image",
      title: "Read Reviews",
      text: "Guest reviews reveal the true quality of the accommodation and service. Focus on cleanliness, communication, and the accuracy of the listing.",
    },
    {
      image: "/zgradaSaBazenom.png",
      alt: "Section 3 Image",
      title: "Understand Pricing and Additional Fees",
      text: "Beyond the base price, look out for hidden fees such as cleaning charges, taxes, or deposits.",
    },
    {
      image: "/black_house_forest.png",
      alt: "Review Cancellation Policies",
      title: "Naslov 4",
      text: "Always read the cancellation policy to understand your rights if plans change unexpectedly.",
    },
    {
      image: "/two_brow_chair.png",
      alt: "Reach Out to the Host",
      title: "Naslov 5",
      text: "Ask questions about details not covered in the description, such as Wi-Fi, parking, or extra amenities.",
    },
  ];

  return (
    <>
      <Navigation setIsOpen={setIsOpen} />
      <div className="bg-gray-100 min-h-screen">
        {/* Hero Section with Background Image */}
        <div className="relative h-96 flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/bijela.jpg')` }} // Replace with your actual image path
          ></div>

          {/* Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black opacity-40"></div>

          {/* Hero Text */}
          <div className="relative text-center">
            <h1 className="text-white text-4xl md:text-5xl font-serif px-4">
              These tips will help you find accommodation that perfectly fits your needs.
            </h1>
          </div>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } items-center lg:items-start py-12 px-6 lg:px-20 gap-8`}
          >
            {/* Section Image */}
            <div className="lg:w-1/2">
              <Image
                src={section.image}
                alt={section.alt}
                width={500}
                height={300}
                className="rounded-lg"
              />
            </div>

            {/* Section Text */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-serif text-primary-500 mb-4">{section.title}</h2>
              <p className="text-gray-700">{section.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
