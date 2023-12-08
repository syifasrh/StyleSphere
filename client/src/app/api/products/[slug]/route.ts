import { NextRequest, NextResponse } from "next/server";
import { ProductModel, getProductBySlug } from "@/db/models/products";
import { ResponseInterface } from "../../route";

export const GET = async (
  _request: NextRequest,
  { params: { slug } }: { params: { slug: string } }
): Promise<Response> => {
  try {
    const product = await getProductBySlug(slug);

    if (!product) {
      return NextResponse.json<ResponseInterface<ProductModel>>(
        {
          statusCode: 404,
          message: "Product not found!",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json<ResponseInterface<ProductModel>>(
      {
        statusCode: 200,
        message: `GET Product ${slug} success!`,
        data: product,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json<ResponseInterface<ProductModel>>(
      {
        statusCode: 500,
        message: "Internal server error!",
      },
      {
        status: 500,
      }
    );
  }
};
