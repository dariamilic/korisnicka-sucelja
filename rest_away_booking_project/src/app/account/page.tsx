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
      <main className="max-w-3xl mx-auto p-6 font-sans ml-0 md:ml-64">
        <h1 className="text-2xl font-bold mb-2">General Profile</h1>
        <p className="text-gray-600 mb-6">
          Change your profile picture and adjust your account information.
        </p>

        {/* Desktop verzija */}
        <div className="hidden lg:flex items-start space-x-20">
          <div className="w-2/3 space-y-4">
            {[
              { label: "Name", id: "name", type: "text", placeholder: "Emily" },
              { label: "Mail", id: "email", type: "email", placeholder: "Emily@company.com" },
              { label: "Password", id: "password", type: "password", placeholder: "********" },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id} className="flex justify-between items-center space-x-2">
                <label htmlFor={id} className="block font-bold text-brown-200">{label}</label>
                <input id={id} type={type} placeholder={placeholder} className="flex-1 p-2 border border-gray-300 rounded-md" />
                <button className="px-4 py-2 bg-brown-200 text-white rounded-md hover:bg-gray-400">Update</button>
              </div>
            ))}
          </div>

          {/* Profilna slika i gumb */}
          <div className="w-1/2 flex flex-col self-start mr-10 translate-x-[280px] translate-y-[-62px]">
          <Image alt="Profile Picture" src="/noPhoto.jpg" width={400} height={400} className="object-cover" />
            <button className="px-6 py-2 bg-brown-200 text-white rounded-md hover:bg-gray-400">Update</button>
          </div>
        </div>

        {/* Mobilna verzija */}
        <div className="lg:hidden flex flex-col items-start text-center space-y-4">
          {/* Input polja */}
          <div className="w-full max-w-[90%] space-y-4">
            {[
              { label: "Name", id: "name", type: "text", placeholder: "Emily" },
              { label: "Mail", id: "email", type: "email", placeholder: "Emily@company.com" },
              { label: "Password", id: "password", type: "password", placeholder: "********" },
            ].map(({ label, id, type, placeholder }) => (
              <div key={id} className="flex flex-col items-start space-y-1">
                <label htmlFor={id} className="font-bold text-brown-800">{label}</label>
                <div className="flex w-full space-x-2">
                  <input id={id} type={type} placeholder={placeholder} className="flex-1 p-2 border border-gray-300 rounded-md" />
                  <button className="px-4 py-2 bg-brown-200 text-white rounded-md hover:bg-gray-400">Update</button>
                </div>
              </div>
            ))}
          </div>

          {/* Profilna slika i gumb za ažuriranje */}
          <div className="flex flex-col items-center space-y-2 pl-6">
            <Image alt="Profile Picture" src="/noPhoto.jpg" width={200} height={200} className="object-cover rounded-md" />
            <button className="px-4 py-2 bg-brown-200 text-white rounded-md hover:bg-gray-400">Update Picture</button>
          </div>
        </div>
      </main>
    </>
  );
}
