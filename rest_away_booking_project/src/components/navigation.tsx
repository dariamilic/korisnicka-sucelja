"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";

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

function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          page.path === "/"
            ? pathname === page.path
              ? "font-extrabold underline"
              : ""
            : pathname.startsWith(page.path)
            ? "font-extrabold underline"
            : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}

function Hamburger() {
  return (
    <button
      className="flex md:hidden flex-col justify-center items-end w-11 h-11 p-2 space-y-1.5 rounded-sm hover:bg-brand-stroke-weak active:bg-brand-stroke-weak"
      aria-label="Open menu"
    >
      <span className="w-7 h-1 bg-brand-black rounded-full" />
      <span className="w-4 h-1 bg-brand-black rounded-full" />
      <span className="w-6 h-1 bg-brand-black rounded-full" />
    </button>
  );
}


export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="container flex justify-between items-center space-x-5 mt-8 mb-12 mr-12"> 
      <Link href="/">
        <Logo className="text-3xl ml-12" />
      </Link>
      <ul
        className="flex justify-around space-x-12 mt-12 mb-4 mr-20 text-xl text-gray-500 "
      >
        {pages.map((page, index) => processPage(page, index, pathname))}
      </ul>

      <Hamburger/>
    </nav>
  );
}
