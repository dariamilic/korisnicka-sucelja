"use client";
import Image from "next/image";

export function PopularDestinations() {
  return (
    <section className="bg-brown-200 py-12 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl flex items-start font-bold text-center text-gray-600 mb-4">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* First object - Zagreb */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
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
          </div>

          {/* Second object - Berlin */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src="/Berlin.png"
              alt="Cottages"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Berlin
            </p>
          </div>

          {/* Third object - Split */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src="/Split.png"
              alt="Apartments"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Split
            </p>
          </div>

          {/* Fourth object - Paris */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <Image
              src="/Paris.png"
              alt="Villas"
              width={500} // Možete prilagoditi veličinu prema potrebama
              height={300} // Možete prilagoditi veličinu prema potrebama
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-center text-lg text-gray-600 font-semibold">
              Paris
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
