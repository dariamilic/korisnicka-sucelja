"use client";
import { PopularDestinations } from "@/components/popularDestinations";
import { Hero } from "../components/heroSection";
import {ObjectTypes} from "../components/objectTypes";
import { Review } from "@/components/review";
import { Navigation } from "@/components/navigation";
import { useState } from "react";



export default function Home() {

  const [isOpen, setIsOpen] = useState(false);
   
  return (
    <main >
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Hero />
      <ObjectTypes/>
      <PopularDestinations/>
      <Review/>
    </main>
  );
}
