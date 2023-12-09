/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import { priceFormat } from "@/helpers/formatPrice";
import AddWishlist from "./AddWhislist";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface CardProps {
  item: any;
  product: any;
  productId: string;
}

export default function Card({ item, product, productId }: CardProps) {
  const pathname = usePathname();

  return (
    <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg transform duration-300 justify-center cursor-pointer hover:shadow-2xl group">
      <Link href={`/products/${pathname === '/products' ? item.slug : product.slug}`}>
        <div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
          <img src={item.thumbnail} className="absolute" />
          <img
            src={pathname === '/products' ? item.images[0] : product.images[0]}
            className="relative transform duration-500 group-hover:opacity-0"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {pathname === '/products' ? item.name : product.name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {pathname === '/products' ? priceFormat(item.price) : priceFormat(product.price)}
            </p>
          </div>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            {pathname === '/products' ? item.excerpt : product.excerpt}
          </p>
        </div>
      </Link>
      <div className="p-6 pt-0">
        <AddWishlist productId={productId}/>
      </div>
    </div>
  );
}
