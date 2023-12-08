"use client";

import { useState } from "react";

interface RemoveProps {
  itemId: string;
  onRemove: () => void;
}

export default function Remove({ itemId, onRemove }: RemoveProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleRemove = async () => {
    try {
      setIsLoading(true);

      // Ganti URL dan method sesuai dengan API endpoint untuk menghapus item wishlist
      const response = await fetch(
        `http://localhost:3000/api/wishlist/${itemId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        onRemove();
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
    <button onClick={handleRemove} disabled={isLoading}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      {isLoading ? "Removing..." : "Remove"}
    </button>
  );
}
