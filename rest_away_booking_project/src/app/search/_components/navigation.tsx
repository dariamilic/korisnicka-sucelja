"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  {
    title: "Location Filter",
    path: "/search/location",
  },
  {
    title: "Price Range Filter",
    path: "/search/price",
  },
  {
    title: "Amenities Filters",
    path: "/search/amenities",
  },
  {
    title: "Property Size Filter",
    path: "/search/property_size",
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