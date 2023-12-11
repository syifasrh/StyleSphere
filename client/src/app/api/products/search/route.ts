import { NextRequest, NextResponse } from "next/server";
import { ProductModel, searchProductByName } from "@/db/models/products";
import { ResponseInterface } from "../../route";
import { URL } from "url";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest): Promise<Response> => {
  try {
    const url = new URL(req.url)
    
    const searchTerm = url.searchParams.get('input')

    if (!searchTerm) {
      return NextResponse.json<ResponseInterface<null>>(
        {
          statusCode: 400,
          message: "Bad Request: searchTerm parameter is required.",
          data: null,
        },
        {
          status: 400,
        }
      );
    }

    const products = await searchProductByName(searchTerm);
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
    console.error(error);

    return NextResponse.json<ResponseInterface<null>>(
      {
        statusCode: 500,
        message: "Internal Server Error",
        data: null,
      },
      {
        status: 500,
      }
    );
  }
};
