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
  const [hasMore, setHasMore] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/products`, {
        method: "GET",
      });
      const newProducts = await response.json();

      setProducts((prevProducts) => [...prevProducts, ...newProducts.data]);

      setHasMore(newProducts.data.length >= 10);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchHandler = async (searchValue: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/products/search?input=${searchValue}`
      );
      const searchData = await response.json();
      console.log("DATAAAAAA" ,searchData);
      

      if (searchData.data !== undefined) {
        setProducts(searchData.data);
      } else {
        console.error("Invalid data format received from search");
      }

      return searchData;
    } catch (error) {
      console.error("Error searching products:", error);
      return null;
    }
  };

  return (
    <div className="bg-green-100">
      <div className="py-32">
        <div className="max-w-lg mx-auto bg-white rounded-xl overflow-hidden md:max-w-5xl mb-10 shadow-lg">
          <div className="md:flex">
            <img
              src="https://voila.id/cdn/shop/files/global-banner-gender-newarrival_x500.jpg?v=1701363995"
              alt=""
            />
          </div>
        </div>
        <div className="mb-10">
          <Search searchHandler={searchHandler} />
        </div>
        {/* Card */}
        <InfiniteScroll
          dataLength={products.length}
          next={fetchData}
          hasMore={hasMore}
          loader={<img src="https://i.gifer.com/yy3.gif" className="mx-auto" />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
              {products.map((item) => {
                return (
                  <Card key={item._id.toString()} item={item} product={item} productId={item._id.toString()} />
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
