// Remove.tsx
"use client";

import React, { useState } from "react";

interface RemoveProps {
  handleRemove: () => Promise<void>;
}

export const Remove: React.FC<RemoveProps> = ({ handleRemove }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async () => {
    try {
      setIsLoading(true);
      await handleRemove();
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setIsLoading(false);
      window.location.reload();
    }
  };

  return (
    <button onClick={handleClick} disabled={isLoading}>
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
