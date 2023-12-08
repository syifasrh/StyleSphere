import { NextResponse } from "next/server";
import { ProductModel, getFeaturedProducts } from "@/db/models/products";
import { ResponseInterface } from "../../route";

export const GET = async (): Promise<Response> => {
  try {
    const products = await getFeaturedProducts();
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
  } catch (error) {
    console.log(error);
    
    throw error;
  }
};
