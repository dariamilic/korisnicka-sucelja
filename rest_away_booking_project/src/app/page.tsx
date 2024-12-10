
import { PopularDestinations } from "@/components/popularDestinations";
import { Hero } from "../components/heroSection";
import {ObjectTypes} from "../components/objectTypes";
import { Review } from "@/components/review";



export default function Home() {
  return (
    <main >
      <Hero />
      <ObjectTypes/>
      <PopularDestinations/>
      <Review/>
    </main>
  );
}
