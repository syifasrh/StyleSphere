/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import AddWishlist from "./AddWhislist";

export default function Card() {
  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transform duration-300 hxranslate-y-1 cursor-pointer hover:shadow-2xl group">
      <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
        <img
          src="https://voila.id/cdn/shop/files/9product-734814-DAAAI-2747-Xms-2023-09-13T2155130700_1200x1200.jpg?v=1694616949"
          className="absolute"
        />
        <img
          src="https://voila.id/cdn/shop/files/8product-734814-DAAAI-2747-Xms-2023-09-13T2155100700_1024x1024.jpg?v=1694616950"
          className="relative transform duration-500 group-hover:opacity-0"
        />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center justify-between">
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            GG Marmont Matelassé Flap Shoulder Bag Rose Pink
          </p>
          <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
            Rp. 27.000.000,-
          </p>
        </div>
        <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
          Luxurious and stylish design
        </p>
      </div>
      <div className="p-6 pt-0">
        <AddWishlist />
      </div>
    </div>
  );
}
