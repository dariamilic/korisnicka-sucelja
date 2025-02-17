"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

type Page = {
  title: string;
  path: `/${string}`;
};

const pages: Page[] = [
  {
    title: "Profile",
    path: "/account/profile",
  },
  {
    title: "Booking History",
    path: "/account/booking_history",
  },
  {
    title: "Saved Properties",
    path: "/account/saved_properties",
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
    // Ako korisnik nije na "/account/profile", preusmjeri ga tamo
    if (!pages.some(page => page.path === pathname)) {
      router.push("/account/profile");
    }
  }, [pathname, router]);

  return (
    <ul className="flex justify-center space-x-4 text-brand-text-strong text-gray-500 mt-8">
      {pages.map((page, index) => processPage(page, index, pathname))}
    </ul>
  );
}
