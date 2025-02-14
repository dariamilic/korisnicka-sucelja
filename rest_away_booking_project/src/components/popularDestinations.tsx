"use client";
import Image from "next/image";
import Link from "next/link";

export function PopularDestinations() {
  return (
    <section className="bg-brown-200 py-12 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl flex items-start font-bold text-center text-gray-600 mb-4">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* First object - Zagreb */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >
            <Image
              src="/Zagreb.png"
              alt="Houses on the Sea"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Zagreb
            </p>
            </Link>
          {/* Second object - Berlin */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >            <Image
              src="/Berlin.png"
              alt="Cottages"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Berlin
            </p>
            </Link>
          {/* Third object - Split */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >            <Image
              src="/Split.png"
              alt="Apartments"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Split
            </p>
            </Link>
          {/* Fourth object - Paris */}
          <Link
            href={"/search"}
            className="bg-white p-4 rounded-lg shadow-lg block"
          >            <Image
              src="/Paris.png"
              alt="Villas"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Paris
            </p>
            </Link>        </div>
      </div>
    </section>
  );
}
