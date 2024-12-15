"use client";
import Image from "next/image";

export function ObjectTypes() {
  return (
    <section className="bg-brown-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl flex items-start font-bold text-center text-gray-600 mb-4">
          Object Types
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* First object - Houses on the sea */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/kucaNaMoru.png"
                alt="Houses on the Sea"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Example sizes for responsiveness
                priority={false}
              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Houses on the sea
            </p>
          </div>

          {/* Second object - Cottages */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/kucaUsumi.png"
                alt="Cottages"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}

              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Cottages
            </p>
          </div>

          {/* Third object - Apartments */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/zgrada.png"
                alt="Apartments"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}

              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Apartments
            </p>
          </div>

          {/* Fourth object - Villas */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-48">
              <Image
                src="/zgradaSaBazenom.png"
                alt="Villas"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}

              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Villas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
