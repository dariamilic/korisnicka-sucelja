"use client";
import Image from "next/image";
import Link from "next/link";

export function ObjectTypes() {
  return (
    <section className="bg-brown-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl flex items-start font-bold text-center text-gray-600 mb-4">
          Object Types
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* First object - Houses on the sea */}

          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >
            <div className="relative w-full h-48">
              <Image
                src="/kucaNaMoru.png"
                alt=" Kuca na moru"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw" // Example sizes for responsiveness
                priority={false}
              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Houses on the sea
            </p>
          </Link>

          {/* Second object - Cottages */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >
            {" "}
            <div className="relative w-full h-48">
              <Image
                src="/kucaUsumi.png"
                alt=" Kuca u sumi"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Cottages
            </p>
          </Link>

          {/* Third object - Apartments */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >
            {" "}
            <div className="relative w-full h-48">
              <Image
                src="/zgrada.png"
                alt="Zgrada"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Apartments
            </p>
          </Link>

          {/* Fourth object - Villas */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >
            <div className="relative w-full h-48">
              <Image
                src="/zgradaSaBazenom.png"
                alt="Zgrada sa bazenom"
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                priority={false}
              />
            </div>
            <p className="text-center text-lg text-gray-600 font-semibold">
              Villas
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
