/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Card from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Products() {
  return (
    <div className="bg-green-100">
      {/* Navbar */}
      <Navbar />
      <div className="py-32 mx-11">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl mb-10">
          <div className="md:flex">
            <img
              src="https://voila.id/cdn/shop/files/global-banner-gender-newarrival_x500.jpg?v=1701363995"
              alt=""
            />
          </div>
        </div>
        {/* Card */}
        <div className="flex justify-around">
          <Card />
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}
