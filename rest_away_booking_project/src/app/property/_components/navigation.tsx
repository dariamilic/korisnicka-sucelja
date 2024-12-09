"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  {
    title: "Hotels",
    path: "/property/hotels",
  },
  {
    title: "Houses",
    path: "/property/houses",
  },
  {
    title: "Apartments",
    path: "/property/apartments",
  },
  {
    title: "Vacation Rentals",
    path: "/property/vacation_rentals",
  },
  
];
function processPage(page: Page, index: number, pathname: string) {
  return (
    <li key={index}>
      <Link
        href={page.path}
        className={
          pathname === page.path ? "font-extrabold text-slate-600" : ""
        }
      >
        {page.title}
      </Link>
    </li>
  );
}
export function Navigation() {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <ul className="flex justify-center space-x-4 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}