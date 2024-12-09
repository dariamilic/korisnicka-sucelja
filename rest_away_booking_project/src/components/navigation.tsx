"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
            ? "font-extrabold"
            : ""
          : pathname.startsWith(page.path)
          ? "font-extrabold"
          : ""
      }
      >
        {page.title}
      </Link>
    </li>
  );
}

export function Navigation() {
  const pathname = usePathname();

  return (
    <ul className="flex justify-end
     space-x-6 mt-12 mb-8 mr-20">
      {" "}
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}
