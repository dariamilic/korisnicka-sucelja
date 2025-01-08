'use client'
import { Navigation } from "@/components/navigation";
import { useState, useCallback } from "react";

export default function SupportContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  // Wrap setIsOpen in useCallback
     const handleSetIsOpen = useCallback((state: boolean) => {
      setIsOpen(state);
    }, []);

    return (
    <>
      <Navigation isOpen={isOpen } setIsOpen={handleSetIsOpen} />
      <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-center text-brand-text-strong text-primary-500 mb-8">Contact Us</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap justify-center max-w-4xl bg-white shadow-md rounded-lg overflow-hidden">
        {/* Get In Touch Section */}
        <div className="w-full md:w-1/2 p-6 bg-gray-50">
          <h2 className="text-2xl font-bold text-primary-500 mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet accumsan eros, sit amet auctor nunc. Nullam ac purus.</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="text-primary-500 w-6 h-6 mr-4">📍</span>
              <p className="text-gray-800">Rudera Boškovića 32 21000, Split, Croatia</p>
            </li>
            <li className="flex items-center">
              <span className="text-primary-500 w-6 h-6 mr-4">📞</span>
              <p className="text-gray-800">Phone Number: +385 123 000</p>
            </li>
            <li className="flex items-center">
              <span className="text-primary-500 w-6 h-6 mr-4">📧</span>
              <p className="text-gray-800">E-Mail: restaway@gmail.com</p>
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="text-gray-800 font-bold mb-2">Follow Us:</h3>
            <ul className="flex space-x-4">
              <li className="text-primary-500">Facebook</li>
              <li className="text-primary-500">Twitter</li>
              <li className="text-primary-500">Instagram</li>
              <li className="text-primary-500">YouTube</li>
            </ul>
          </div>
        </div>

        {/* Send a Message Section */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-bold text-primary-500 mb-4">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Name</label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">E-mail address</label>
              <input
                type="email"
                id="email"
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your Message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>

    </>
    );
  }