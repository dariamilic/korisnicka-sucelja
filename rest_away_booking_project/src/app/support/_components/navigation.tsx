"use client";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  {
    title: "FAQs",
    path: "/support/FAQs",
  },
  {
    title: "Contact",
    path: "/support/contact",
  },
  {
    title: "Rental Guides",
    path: "/support/rental_guides",
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

export function SideNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Ako korisnik nije na "/support/FAQs", preusmjeri ga tamo
    if (!pages.some(page => page.path === pathname)) {
      router.push("/support/FAQs");
    }
  }, [pathname, router]);

  return (
    <ul className="flex justify-center space-x-4 text-brand-text-strong text-gray-500 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}
