/* eslint-disable @next/next/no-img-element */
"use client";

import Wishlist from "@/components/Wishlist";
import { WishlistModel } from "@/db/models/wishlist";
import { useEffect, useState } from "react";

export default function Cart() {
  const [wishlistItems, setWishlistItems] = useState<WishlistModel[]>([]);

  useEffect(() => {
    const userIdFromCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)userId\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );

    const userIdFromHeaders = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/wishlist");
        const data = await response.json();

        if (response.ok) {
          return data.userId;
        } else {
          console.error("Failed to fetch user ID from headers");
          return null;
        }
      } catch (error) {
        console.error("Error fetching user ID from headers:", error);
        return null;
      }
    };

    const fetchWishlist = async () => {
      try {
        const userId = userIdFromCookie || (await userIdFromHeaders());

        if (!userId) {
          console.error("User ID is not available");
          return;
        }

        const response = await fetch(
          `http://localhost:3000/api/wishlist/${userId}`
        );
        const data = await response.json();

        if (response.ok) {
          setWishlistItems(data.data);
        } else {
          console.error("Failed to fetch wishlist data");
        }
      } catch (error) {
        console.error("Error fetching wishlist data:", error);
      }
    };

    fetchWishlist();
  }, []);

  return (
    <div>
      <div className="h-screen bg-green-100 pt-20">
        <h1 className="mb-10 pt-10 text-center text-green-600 text-2xl font-bold">
          Wishlist Items
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {/* component wishlist */}
          <Wishlist wishlistItems={wishlistItems}/>
        </div>
      </div>
    </div>
  );
}
