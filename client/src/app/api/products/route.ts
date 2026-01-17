import { NextResponse } from "next/server";
import { ResponseInterface } from "../route";
import { ProductModel, productPagination } from "@/db/models/products";

export const dynamic = "force-dynamic";

export const GET = async (): Promise<Response> => {
  try {
    const products = await productPagination();
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
    throw error;
  }
};
