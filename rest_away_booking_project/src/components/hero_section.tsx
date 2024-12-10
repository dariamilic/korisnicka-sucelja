"use client";
export function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 bg-white ">

      
      <div className="grid grid-cols-2 gap-4 max-w-md">

      <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="brown_chair.png" // zamijeni pravim putanjama slika
            alt="Cabin in forest"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-beige bg-brown-100 rounded-lg flex items-end justify-center  text-sm  text-gray-700 ">

          <ul >
          choose what suits you best
          </ul>
        </div>

        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="black_house_forest.png" // zamijeni pravim putanjama slika
            alt="Living room"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="bg-gray-200 rounded-lg overflow-hidden">
          <img
            src="two_brow_chair.png" // zamijeni pravim putanjama slika
            alt="Living room"
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      {/* Desna strana - Tekst i CTA */}
      <div className="mt-8 md:mt-0 md:ml-16 text-center md:text-left max-w-md mr-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">
          Discover A Place Where Comfort Meets Quality!
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Welcome to simple and seamless booking – where every stay feels like
          home.
        </p>
        <button className="bg-beige text-gray-700 font-medium px-6 py-3 rounded-lg hover:bg-gray-200 transition">
          Reserve Now
        </button>
      </div>
    </section>
  );
}
