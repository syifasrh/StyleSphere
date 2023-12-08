/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
"use client";

import Card from "@/components/Card";
import Search from "@/components/Search";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState, useEffect } from "react";
import { ProductModel } from "@/db/models/products";

export default function Products() {
  const [products, setProducts] = useState<ProductModel[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products?page=${page}`,
        {
          method: "GET"
        }
      );
      const newProducts = await response.json();
      setProducts((prevProducts) => [...prevProducts, ...newProducts]);

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setPage(page + 1);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
          <InfiniteScroll
            dataLength={products.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{ textAlign: "center" }}>
                <b>Yay! You have seen it all</b>
              </p>
            }
          >
            {products.map((item) => {
              return <Card key={item._id.toString()} item={item} />;
            })}
          </InfiniteScroll>
          ;
        </div>
      </div>
    </div>
  );
}
