
import { PopularDestinations } from "@/components/popularDestinations";
import { Hero } from "../components/heroSection";
import {ObjectTypes} from "../components/objectTypes";



export default function Home() {
  return (
    <main >
      <Hero />
      <ObjectTypes/>
      <PopularDestinations/>
    </main>
  );
}
