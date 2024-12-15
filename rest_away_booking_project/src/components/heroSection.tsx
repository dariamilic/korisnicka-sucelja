"use client";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-around space-x-4 md:px-20 py-12 bg-white">
      <div className="grid grid-cols-2 flex-1 gap-4 max-w-md">
        {/* Slika 1 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/brown_chair.png" // zamijeni pravim putanjama slika
            alt="Cabin in forest"
            className="object-cover"
            width={300} // prilagodi dimenzije prema slici
            height={300} // prilagodi dimenzije prema slici
            priority
          />
        </div>

        {/* Tekst */}
        <div className="bg-beige bg-brown-200 rounded-lg flex items-end justify-center text-sm text-gray-700">
          <ul className="mb-12 ml-8 font-serif">choose what suits you best</ul>
        </div>

        {/* Slika 2 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/black_house_forest.png" // zamijeni pravim putanjama slika
            alt="Living room"
            className="object-cover w-full h-full"
            width={300} // prilagodi dimenzije prema slici
            height={300} // prilagodi dimenzije prema slici
            priority
          />
        </div>

        {/* Slika 3 */}
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/two_brow_chair.png" // zamijeni pravim putanjama slika
            alt="Living room"
            className="object-cover w-full h-full"
            width={300} // prilagodi dimenzije prema slici
            height={300} // prilagodi dimenzije prema slici
            priority
          />
        </div>
      </div>

      {/* Desna strana - Tekst i CTA */}
      <div className="mt-8 flex-1 md:mt-0 md:ml-16 text-center md:text-left max-w-md mr-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          Discover A Place Where Comfort Meets Quality!
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Welcome to simple and seamless booking – where every stay feels like
          home.
        </p>
        <button className="bg-beige text-brown-300 border-2 border-brown-300 font-medium px-6 py-3 rounded-lg hover:bg-brown-200 hover:border-gray-700 hover:text-gray-700 transition">
          Reserve Now
        </button>
      </div>
    </section>
  );
}
