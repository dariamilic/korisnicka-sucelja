'use client'
import { Navigation } from "@/components/navigation";
import { useState, useCallback, useEffect } from "react";
import { createClient } from 'contentful';
import ObjaveCard from './objaveCard';


const spaceID = process.env.NEXT_PUBLIC_CONNTENTFUL_SPACE_ID!;
const accessToken = process.env.NEXT_PUBLIC_CONNTENTFUL_ACCESS_KEY!;

export async function fetchContentData() {
  const client = createClient({
    space: spaceID,
    accessToken: accessToken,
  });

  const res = await client.getEntries({ content_type: 'objave' });

  return res.items;
}

const Home = () => {
  const [objave, setObjave] = useState([]);
  const [priceRange, setPriceRange] = useState(0);
  const [location, setLocation] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [sizeRange, setSizeRange] = useState(0);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchContentData();
      setObjave(data);
    };
    getData();
  }, []);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeRange(Number(e.target.value));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  console.log(objave);
  console.log(location);

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
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2 underline">Location</div>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full border border-primary-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
                  onChange={handleLocationChange}
                />
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <div className="bg-gray-300 text-brown-600 text-sm rounded-full py-1 px-4 inline-block mb-2">Price range</div>
                <input
                  type="range"
                  min="0"
                  max="9999"
                  className="w-full"
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {objave.map(objave =>(
              <ObjaveCard key={objave.sys.id} objave={objave} />
            ))}
            </div>
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;