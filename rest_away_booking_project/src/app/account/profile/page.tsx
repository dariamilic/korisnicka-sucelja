'use client';
import './profile.css';
import { Navigation } from "@/components/navigation";
import { useState, useCallback } from "react";
import Image from "next/image";


export default function AccountProfilePage() {
  const [isOpen, setIsOpen] = useState(false);

   // Wrap setIsOpen in useCallback
   const handleSetIsOpen = useCallback((state: boolean) => {
    setIsOpen(state);
  }, []);

  return (
    <>
      {/* Navigacija */}
      <Navigation isOpen={isOpen} setIsOpen={handleSetIsOpen} />
      
      {/* Glavni sadržaj stranice */}
      <main className="profile-container">
        <h1 className="title">General Profile</h1>
        <p className="description">
          Change your profile picture and adjust your account information.
        </p>

        {/* Sekcija za profilnu sliku */}
        <div className="profile-section">
          <div className="profile-picture">
            <Image src="/emily.png" alt="Profile" />
            <button className="update-btn">Update</button>
          </div>
        </div>

         {/* Input Fields */}
         <div className="profile-info">
          <div className="input-group">
          <div className="input-container">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Emily" />
          </div>
          <button className="update-btn">Update</button>
        </div>

        <div className="input-group">
          <div className="input-container">
            <label htmlFor="email">Mail</label>
            <input id="email" type="email" placeholder="Emily@company.com" />
          </div>
          <button className="update-btn">Update</button>
        </div>

        <div className="input-group">
          <div className="input-container">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" placeholder="********" />
          </div>
          <button className="update-btn">Update</button>
        </div>
        </div>
      </main>
    </>
  );
}
