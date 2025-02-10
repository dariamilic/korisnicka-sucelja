'use client'; 
import { Navigation } from "@/components/navigation";
import { useState, useCallback } from "react";
import Image from "next/image";

export default function AccountProfilePage() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <>
      {/* Navigacija */}
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
      {/* Glavni sadržaj stranice */}
      <main className="max-w-3xl mx-auto p-6 font-sans ml-6">
        <h1 className="text-2xl font-bold mb-2">General Profile</h1>
        <p className="text-gray-600 mb-6">
          Change your profile picture and adjust your account information.
        </p>

        {/* Sekcija za profilnu sliku i inpute */}
        <div className="flex justify-between items-start space-x-14">
          {/* Input Fields */}
          <div className="w-2/3 space-y-4 mr-10">
            {[
              { label: "Name", id: "name", type: "text", placeholder: "Emily" },
              { label: "Mail", id: "email", type: "email", placeholder: "Emily@company.com" },
              { label: "Password", id: "password", type: "password", placeholder: "********" },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id} className="flex justify-between items-center space-x-2">
          <div className="flex-1">
            <label htmlFor={id} className="block font-bold text-brown-200 mb-1">{label}</label>
            <input id={id} type={type} placeholder={placeholder} className="w-full p-2 border border-gray-300 rounded-md" />
          </div>
            <button className="px-4 py-2 bg-brown-200 text-white rounded-md hover:bg-gray-400 self-center mt-6">Update</button>
              </div>
            ))}
          </div>

          {/* Profilna slika i gumb */}
          <div className="w-1/2 flex flex-col self-start mr-10 translate-x-[280px] translate-y-[-62px]">
          <Image alt="Profile Picture" src="/noPhoto.jpg" width={400} height={400} className="object-cover" />
            <button className="px-6 py-2 bg-brown-200 text-white rounded-md hover:bg-gray-400">Update</button>
          </div>
        </div>
      </main>
    </>
  );
}
