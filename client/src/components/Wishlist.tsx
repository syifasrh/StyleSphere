// Wishlist.tsx
/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { Remove } from "./Remove";
import { priceFormat } from "@/helpers/formatPrice";
import { BASE_URL } from "@/app/BaseURL";
import { WishlistItems } from "@/app/wishlist/page";

export const dynamic = 'force-dynamic';

interface WishlistProps {
  wishlistItems: WishlistItems[];
  setWishlistItems: React.Dispatch<React.SetStateAction<WishlistItems[]>>;
}

export default function Wishlist({
  wishlistItems,
  setWishlistItems,
}: WishlistProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = async (productId: string) => {
    try {
      setIsLoading(true);

      const response = await fetch(`${BASE_URL}/api/wishlist/`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        console.log("Item berhasil dihapus dari wishlist!");
        const newWishlist = wishlistItems.filter(
          (item) => item?._id.toString() !== productId
        )
        setWishlistItems(newWishlist);
      } else {
        console.error("Failed to remove item from wishlist");
      }
    } catch (error) {
      console.error("Error removing item from wishlist:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg md:w-2/3">
      {wishlistItems.length === 0 ? (
        <div>
          <div className="text-center py-4 lg:px-4">
            <div
              className="p-2 bg-green-800 items-center text-green-100 leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <span className="flex rounded-full bg-green-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                Important
              </span>
              <span className="font-semibold mr-2 text-left flex-auto">
                Shop our latest collection of chic branded bags and elevate your
                fashion game!
              </span>
            </div>
          </div>
        </div>
      ) : (
        wishlistItems.map((wishlistItem, index) => (
          <div
            key={index}
            className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
          >
            <img
              src={wishlistItem?.product?.images[0]}
              className="w-full rounded-lg sm:w-40 h-40 object-cover"
              alt={`Product ${index + 1}`}
            />
            <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
              <div className="mt-5 sm:mt-0">
                <h2 className="text-lg font-bold text-gray-900">
                  {wishlistItem.product?.name}
                </h2>
                <p className="mt-1 text-xs text-gray-700">
                  {wishlistItem.product?.description}
                </p>
              </div>
              <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                <div className="flex items-center space-x-4">
                  <p className="text-sm">
                    {priceFormat(wishlistItem.product?.price)}
                  </p>
                  <Remove handleRemove={() => handleRemove(wishlistItem._id.toString())} />
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
