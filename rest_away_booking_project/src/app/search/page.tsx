"use client";
import { Navigation } from "@/components/navigation";
import { useState, useCallback, useEffect } from "react";
import { createClient } from "contentful";
import ObjaveCard from "./objaveCard";

const spaceID = process.env.NEXT_PUBLIC_CONNTENTFUL_SPACE_ID!;
const accessToken = process.env.NEXT_PUBLIC_CONNTENTFUL_ACCESS_KEY!;

export async function fetchContentData() {
  const client = createClient({
    space: spaceID,
    accessToken: accessToken,
  });

  const res = await client.getEntries({ content_type: "objave" });
  return res.items;
}

const Home = () => {
  const [objave, setObjave] = useState<any[]>([]);
  const [filteredObjave, setFilteredObjave] = useState<any[]>([]);
  const [priceRange, setPriceRange] = useState(0);
  const [location, setLocation] = useState("");
  const [sizeRange, setSizeRange] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchContentData();
      setObjave(data);
      setFilteredObjave(data); // Default prikaz
    };
    getData();
  }, []);

  // Filter funkcionalnost
  useEffect(() => {
    const filtered = objave.filter((item) => {
      const fields = item.fields;

      // Filtriranje prema lokaciji
      const matchesLocation = location
        ? fields.title?.toLowerCase().includes(location.toLowerCase()) ||
          fields.about?.toLowerCase().includes(location.toLowerCase())
        : true;

      // Filtriranje prema ceni (ukoliko postoji polje za cenu)
      const matchesPrice = !fields.price || fields.price <= priceRange || priceRange === 0;

      // Filtriranje prema veličini (ukoliko postoji polje za veličinu)
      const matchesSize = !fields.size || fields.size <= sizeRange || sizeRange === 0;

      // Filtriranje prema odabranim filterima
      const matchesFilters = selectedFilters.every((filter) =>
        fields.filters.includes(filter)
      );

      // Filtriranje prema tipu prostora
      const matchesType = selectedTypes.length
        ? selectedTypes.some((type) => fields.title?.toLowerCase().includes(type.toLowerCase()))
        : true;

      return matchesLocation && matchesPrice && matchesSize && matchesFilters && matchesType;
    });

    setFilteredObjave(filtered);
  }, [location, priceRange, sizeRange, selectedFilters, selectedTypes, objave]);

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSizeRange(Number(e.target.value));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPriceRange(Number(e.target.value));
  };

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleFilterChange = (filter: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((item) => item !== filter)
        : [...prev, filter]
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );
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
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">
                  Location
                </div>
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full border border-primary-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-gray-400"
                  onChange={handleLocationChange}
                />
              </div>

              {/* Price Range Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">
                  Price range
                </div>
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
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">
                  Amenities Filter
                </div>
                <div className="pl-2">
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Wi-Fi")}
                    />{" "}
                    Wi-Fi
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Air Conditioning")}
                    />{" "}
                    Air Conditioning
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Parking")}
                    />{" "}
                    Parking
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Elevator")}
                    />{" "}
                    Elevator
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Household appliances")}
                    />{" "}
                    Household appliances
                  </label>
                </div>
              </div>

              {/* Luxury Amenities Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">
                  Luxury Amenities
                </div>
                <div className="pl-2">
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Swimming pool")}
                    />{" "}
                    Swimming pool
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Jacuzzi")}
                    />{" "}
                    Jacuzzi
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Sauna")}
                    />{" "}
                    Sauna
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Fitness center")}
                    />{" "}
                    Fitness center
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Balcony with a view")}
                    />{" "}
                    Balcony with a view
                  </label>
                </div>
              </div>

              {/* Practical Options Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">
                  Practical Options
                </div>
                <div className="pl-2">
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Proximity to public transport")}
                    />{" "}
                    Proximity to public transport
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleFilterChange("Pet-friendly")}
                    />{" "}
                    Pet-friendly
                  </label>
                </div>
              </div>

              {/* Type of Space Filter */}
              <div className="mb-6">
                <div className="bg-brown-200 text-brown-600 font-semibold text-sm rounded-full py-1 px-4 inline-block mb-2">
                  Type of Space
                </div>
                <div className="pl-2">
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Apartment")}
                    />{" "}
                    Apartment
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("House")}
                    />{" "}
                    House
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Cottage")}
                    />{" "}
                    Cottage
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Villa")}
                    />{" "}
                    Villa
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Shared Housing")}
                    />{" "}
                    Shared Housing
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Farmhouse")}
                    />{" "}
                    Farmhouse
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Mobile Home")}
                    />{" "}
                    Mobile Home
                  </label>
                  <label className="block mb-2">
                    <input
                      type="checkbox"
                      onChange={() => handleTypeChange("Bungalow")}
                    />{" "}
                    Bungalow
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Section */}
          <div className="w-full md:w-3/4 px-10 py-14">
            <div className="text-3xl md:text-3xl font-bold text-gray-700 mb-4 text-center">
              Our Suggestions:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredObjave.map((objave) => (
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
