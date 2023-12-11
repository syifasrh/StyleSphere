/* eslint-disable @next/next/no-img-element */
"use client";

import Wishlist from "@/components/Wishlist";
import { ProductModel } from "@/db/models/products";
import { UserModel } from "@/db/models/users";
import { ObjectId } from "mongodb";
import { useEffect, useState } from "react";
import { BASE_URL } from "../BaseURL";

interface WishlistItems {
  _id: ObjectId;
  userId: ObjectId;
  user: UserModel[];
  productId: ObjectId;
  product: ProductModel;
  createdAt: Date;
  updatedAt: Date;
}

export default function WishlistPage() {
  const [wishlistItems, setWishlistItems] = useState<WishlistItems[]>([]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/wishlist/`, {
          method: "GET",
          cache: "no-store",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const resp = await response.json();

        if (response.ok) {
          setWishlistItems(resp.data);
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
      <div className="min-h-screen bg-green-100 py-20">
        <h1 className="mb-10 pt-10 text-center text-green-600 text-2xl font-bold container mx-auto max-w-5xl px-6 md:justify-center md:flex md:space-x-6 xl:px-0">
          Wishlist Items
        </h1>
        <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
          {/* component wishlist */}
          <Wishlist wishlistItems={wishlistItems} setWishlistItems={setWishlistItems} />
        </div>
      </div>
    </div>
  );
}
