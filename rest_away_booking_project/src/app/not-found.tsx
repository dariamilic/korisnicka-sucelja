import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center"> 
      <h1 className="text-5xl text-gray-700 font-bold tracking-tight leading-normal mb-4">
        Oops!
      </h1>
      <h2 className="text-xl text-gray-700 mb-5">
      You seem to be lost. We can't find the page you're looking for.      </h2>
      <Link href="/" className="text-brown-200">Go back home</Link>
    </section>
  );
}