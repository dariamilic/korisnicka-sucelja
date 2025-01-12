'use client'
import { Navigation } from "@/components/navigation";
import { useState, useCallback } from "react";



const Home = () => {
  const [priceRange, setPriceRange] = useState(0);
  const [location, setLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [sizeRange, setSizeRange] = useState(0);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeRange(Number(e.target.value));
  };

  const properties = [
    { id: 1, country: 'Hrvatska', price: '47€', location: 'Zagreb', image: '/Zagreb.png' },
    { id: 2, country: 'Hrvatska', price: '350€', location: 'Makarska', image: 'Makarska_kuca.jpeg', date: '15.07.2025.-20.07.2025.' },
    { id: 3, country: 'Bosna i Hercegovina', price: '250€', location: 'Jahorina', image: 'jahorina.jpg', date: '25.02.2025.-27.02.2025.' },
  ];

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };
    const handleSetIsOpen = useCallback((state: boolean) => {
      setIsOpen(state);
    }, []);

  return (
    <>
    <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
    <div className="bg-white text-gray-800 min-h-screen">
    <div className="flex flex-wrap">
          {/* Left Filters Section */}
          <div className="w-full md:w-1/4 pr-24 py-6">
            <div>
              {/* Location Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">Location</div>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full border border-primary-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
                />
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 text-sm font-semibold rounded-full py-1 px-4 inline-block mb-2">Price range</div>
                <input
                  type="range"
                  min="0"
                  max="9999"
                  className="w-full focus:outline-none focus:ring-primary-500"
                  value={priceRange}
                  onChange={handlePriceChange}
                />
                <div className="text-sm text-gray-600 mt-2">Selected Price: {priceRange}€</div>

              </div>

              {/* Amenities Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">Amenities Filter</div>
                <div className="pl-2">
                  <div className="mb-2 text-gray-600 underline">Basic Amenities:</div>
                  <label className="block mb-2">
                    <input type="checkbox" /> Wi-Fi
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Air Conditioning
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Parking
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Elevator
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Household appliances
                  </label>
                  <div className="mt-4 mb-2 text-gray-600 underline">Luxury Amenities:</div>
                  <label className="block mb-2">
                    <input type="checkbox" /> Swimming pool
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Jacuzzi
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Sauna
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Fitness center
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Balcony with a view
                  </label>
                  <div className="mt-4 mb-2 text-gray-600 underline">Practical Options:</div>
                  <label className="block mb-2">
                    <input type="checkbox" /> Proximity to public transport
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Pet-friendly
                  </label>
                </div>
              </div>

              {/* Property Size Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">Property Size</div>
                <div className="mb-6">
                <input
                  type="range"
                  min="0"
                  max="500"
                  value={sizeRange}
                  onChange={handleSizeChange}
                  className="w-full focus:outline-none focus:ring-primary-500"
                />
                <div className="text-sm text-gray-600 mt-2">Selected Size: {sizeRange} m²</div>
              </div>
                <div className="pl-2">
                  <div className="mb-2 text-gray-600 underline">Number of Rooms:</div>
                  <label className="block mb-2">
                    <input type="checkbox" /> 1
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> 2
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> 3
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> more than 3
                  </label>
                  <div className="mt-4 mb-2 text-gray-600 underline">Number of bathrooms:</div>
                  <label className="block mb-2">
                    <input type="checkbox" /> 1
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> 2
                  </label>
                  <div className="mt-4 mb-2 text-gray-600 underline">Type of Space:</div>
                  <label className="block mb-2">
                    <input type="checkbox" /> Apartment
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> House
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Cottage
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Villa
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Shared Housing
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Farmhouse
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Mobile Home
                  </label>
                  <label className="block mb-2">
                    <input type="checkbox" /> Bungalow
                  </label>
                </div>
              </div>
            </div>
          </div>

      
      
          {/* Main Content Section */}
          
          <div className="w-full md:w-3/4 px-10 py-14">
            {/* Search Bar */}
            <div className="text-center mb-8">
              <input
                type="text"
                placeholder="Something is already on your mind..."
                className="w-full md:w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
              />
            </div>

            {/* Suggestions Title */}
            <div className="text-3xl md:text-3xl font-bold text-gray-700 mb-4 text-lg font-semibold mb-6 text-center">Our Suggestions:</div>

            {/* Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 bg-gray-200">
                <img
                  src="/images/property1.jpg"
                  alt="Property"
                  className="w-full h-32 object-cover rounded"
                />
                <div className="mt-2 text-center">Hrvatska</div>
                <div className="text-sm text-center">Price: 47€</div>
                <div className="text-sm text-center">Location: Zagreb</div>
              </div>
              <div className="border rounded-lg p-4 bg-gray-200">
                <img
                  src="/images/property2.jpg"
                  alt="Property"
                  className="w-full h-32 object-cover rounded"
                />
                <div className="mt-2 text-center">Hrvatska</div>
                <div className="text-sm text-center">Price: 350€</div>
                <div className="text-sm text-center">Location: Makarska</div>
                <div className="text-sm text-center">Date: 15.07.2025-20.07.2025</div>
              </div>
              <div className="border rounded-lg p-4 bg-gray-200">
                <img
                  src="/images/property3.jpg"
                  alt="Property"
                  className="w-full h-32 object-cover rounded"
                />
                <div className="mt-2 text-center">Bosna i Hercegovina</div>
                <div className="text-sm text-center">Price: 250€</div>
                <div className="text-sm text-center">Location: Jahorina</div>
                <div className="text-sm text-center">Date: 25.02.2025-27.02.2025</div>
              </div>
          </div>
        </div>
      </div>
    </div>
   </>
  );
};

export default Home;
