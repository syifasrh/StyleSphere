import { NextResponse } from "next/server";
import { ResponseInterface } from "../route";
import { ProductModel, getProducts } from "@/db/models/products";

export const GET = async (): Promise<Response> => {
  
  const products = await getProducts();
  return NextResponse.json<ResponseInterface<ProductModel[]>>(
    {
      statusCode: 200,
      message: "GET Products success!",
      data: products,
    },
    {
      status: 200,
    }
  );
};
