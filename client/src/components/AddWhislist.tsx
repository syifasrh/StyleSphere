"use client";

import { useState } from "react";
import { useToast } from "@chakra-ui/react";

export default function AddWishlist({ productId }: { productId: string }) {
  const [isAdding, setIsAdding] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const toast = useToast();

  const handleAddWishlist = async () => {
    try {
      setIsAdding(true);

      const response = await fetch("http://localhost:3000/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (response.status === 201) {
        toast({
          title: "Wishlist added!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });

        setIsAdded(true);
      } else {
        toast({
          title: "Failed to add to wishlist",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error("Error adding to wishlist:", error);

      toast({
        title: "Failed to add to wishlist",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button
      onClick={handleAddWishlist}
      className={`block w-full select-none rounded-lg ${
        isAdded ? "bg-green-500" : "bg-gray-900/10"
      } py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase ${
        isAdded ? "text-white" : "text-gray-900"
      } transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] ${
        isAdding ? "cursor-not-allowed" : ""
      } ${
        isAdding ? "bg-gray-300" : ""
      } disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
      type="button"
    >
      {isAdded ? "Added to Wishlist" : "Add to Wishlist"}
    </button>
  );
}
