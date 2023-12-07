/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Card from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Search from "@/components/Search";

export default function Products() {
  return (
    <div className="bg-green-100">
      <div className="py-32 mx-11">
        <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden md:max-w-5xl mb-10 shadow-lg">
          <div className="md:flex">
            <img
              src="https://voila.id/cdn/shop/files/global-banner-gender-newarrival_x500.jpg?v=1701363995"
              alt=""
            />
          </div>
        </div>
        <div className="mb-10">
          <Search />
        </div>
        {/* Card */}
        <div className="flex justify-around">
          <Card />
        </div>
      </div>
    </div>
  );
}
