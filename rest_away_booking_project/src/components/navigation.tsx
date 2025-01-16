"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  { title: "Home", path: "/" },
  {
    title: "Property",
    path: "/property",
  },
  {
    title: "Search",
    path: "/search",
  },
  {
    title: "Account",
    path: "/account",
  },
  {
    title: "Support",
    path: "/support",
  },
  {
    title: "Sign up",
    path: "/signUp",
  },
  {
    title: "Sign in",
    path: "/signIn",
  },
];

type NavigationProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

function processPage(
  page: Page,
  index: number,
  pathname: string,
  onClick?: () => void
) {
  const isActive =
    page.path === "/" ? pathname === page.path : pathname.startsWith(page.path);
  return (
    <li key={index} className="text-center ">
      <Link href={page.path} onClick={onClick}>
        <span
          className={cn(
            { "hover:text-brown-200 hover:bg-brand-primary": !isActive },
            {
              " border-2 border-gray-600 rounded-lg px-2 py-1 text-gray-700":
                isActive,
            }
          )}
        >
          {page.title}
        </span>
      </Link>
    </li>
  );
}

export function Navigation({ setIsOpen }: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpenState] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpenState(false);
        setIsOpen(false);
      }
    };

    setIsOpen(isOpen);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, setIsOpen]);

 

  return (
    <nav className=" flex justify-between items-center space-x-5 mt-8 mb-4 mr-12">
      <Link href="/">
        <Logo className="text-3xl ml-12" />
      </Link>

      {/* Hamburger Menu Button */}
      <div className="-mr-2 flex xl:hidden">
        <button
          onClick={() => setIsOpenState(!isOpen)}
          type="button"
          className="inline-flex items-center justify-center p-2 text-main-text-black hover:text-secondary-text-black focus:outline-none"
          aria-controls="mobile-menu"
         // aria-expanded={isOpen}
        >
          {!isOpen ? (
            <svg
              className="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          ) : (
            ""
            
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden xl:flex justify-around space-x-12 mt-12 mb-4 mr-20 text-xl text-gray-500  ">
        {pages.map((page, index) => processPage(page, index, pathname))}
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50"
          onClick={() => setIsOpenState(false)}
        >
          <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
          {/*Background*/}
          <div
            ref={menuRef}
            className="fixed right-0 top-0 h-auto
             w-1/2 bg-white shadow-lg p-4 z-50 rounded-lg "
          >
            <div className="flex justify-center  items-center">
              {/*
              <Link href="/">
                <Logo className="h-5 w-auto" />
              </Link>
               */}
              <button
                onClick={() => setIsOpenState(false)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-main-text-black hover:text-secondary-text-black focus:outline-none"
              >
{/**
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
 */}              </button>
            </div>
            <ul className="mt-4 space-y-4 text-main-text-black">
              {pages.map((page, index) => processPage(page, index, pathname))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
