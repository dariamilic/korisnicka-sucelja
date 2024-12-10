"use client";
import Logo from "./logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 py-8">
      <div className="container mx-auto px-6 md:px-12">
        {/* Top Divider Line */}
        <div className="border-t border-gray-400 mb-6"></div>

        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-around  items-center ">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start md:items-start mb-6 md:mb-0">
            <Link href="/">
              <Logo className="text-3xl ml-12" />
            </Link>
            <p className="text-gray-500 text-2xl">Plan your dream vacation</p>
          </div>

          {/* Sitemap Section */}
          <div className="mb-2 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-700 mb-2 ">
              Sitemap
            </h2>
            <ul className="text-gray-600 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/property" className="hover:underline">
                  Property
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:underline">
                  Search
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:underline">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:underline">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold text-gray-700 mb-2">
              Contact us
            </h2>
            <address className="not-italic text-gray-600 text-sm">
              Rudera Boškovića 32
              <br />
              21000, Split, Croatia
              <br />
              <a
                href="mailto:restaway@gmail.com"
                className="hover:underline block mt-2"
              >
                restaway@gmail.com
              </a>
              <a href="tel:+385123000" className="hover:underline block">
                +385 123 000
              </a>
            </address>
            {/* Social Media Icons */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54v-2.89h2.54v-2.2c0-2.506 1.493-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.563v1.872h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 5.812 2.617 5.812 5.823 0 3.206-2.608 5.823-5.812 5.823S6.188 11.192 6.188 7.986C6.188 4.78 8.796 2.163 12 2.163zm0-2.163C8.118 0 5 3.118 5 7s3.118 7 7 7 7-3.118 7-7-3.118-7-7-7zm0 9.813c-1.75 0-3.188-1.438-3.188-3.188S10.25 3.438 12 3.438s3.188 1.438 3.188 3.188S13.75 9.813 12 9.813zm9.318-1.822c0 2.275-1.834 4.11-4.09 4.11h-.116c.073-.442.118-.895.118-1.352 0-3.344-3.25-6.076-7.23-6.076-3.982 0-7.234 2.732-7.234 6.076 0 .457.045.91.116 1.352h-.117C2.517 11.091.682 9.256.682 6.981 0 4.755 1.834 2.92 4.09 2.92c2.128 0 4.048 1.663 4.435 3.722h6.948c.387-2.059 2.308-3.722 4.435-3.722 2.256 0 4.09 1.835 4.09 4.11z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="mt-8 text-gray-500 text-center text-sm">
          © 2024 RestAway. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
