"use client";
import Image from "next/image";

export function Review() {
  return (
    <section className="bg-[#f4f1e6] py-20">
      <div className="max-w-screen-lg mx-auto text-center">
        <h2 className="text-4xl font-semibold mb-12 text-gray-700">
          {" "}
          Reviews{" "}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg  ">
            <Image
              src="emily.png"
              alt="Emily Johnson"
              className="w-24 h-24 rounded-full mb-4 object-cover"
              quality={100}
            />
            <p className="font-medium text-xl text-gray-800">Emily Johnson</p>
            <p className="text-gray-500 mt-2 ">
              I really appreciate organization. I like that everything is in one
              place, and this site offers exactly that.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <Image
              src="jake.png"
              alt="Jake Davis"
              className="w-24 h-24 rounded-full mb-4 object-cover"
              quality={100}
            />
            <p className="font-medium text-xl text-gray-800">Jake Davis</p>
            <p className="text-gray-500 mt-2">
              Booking my trip was so easy! Everything went smoothly, and I had
              an amazing experience.
            </p>
          </div>

          <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
            <Image
              src="saraha.png"
              alt="Sarah Miller"
              className="w-24 h-24 rounded-full mb-4 object-cover"
              quality={100}
            />
            <p className="font-medium text-xl text-gray-800">Sarah Miller</p>
            <p className="text-gray-500 mt-2">
              At 67, I had a flawless experience booking my seaside stay.
              Everything was simple, stress-free, and truly amazing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
