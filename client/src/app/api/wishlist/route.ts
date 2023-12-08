import { NextRequest, NextResponse } from "next/server";
import { WishlistModel, getWishlistByUserId, createWishlistItem, removeWishlistById } from "@/db/models/wishlist";
import { ResponseInterface } from "../route";

export const GET = async (
  _request: NextRequest,
  { params: { userId } }: { params: { userId: string } }
): Promise<Response> => {
  try {
    const wishlistItems = await getWishlistByUserId(userId);

    return NextResponse.json<ResponseInterface<WishlistModel[]>>(
      {
        statusCode: 200,
        message: "GET Wishlist items success!",
        data: wishlistItems,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json<ResponseInterface<WishlistModel[]>>(
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

export const POST = async (
  request: NextRequest,
  { params: { userId } }: { params: { userId: string } }
): Promise<Response> => {
  try {
    const newWishlistItem = await request.json();
    const wishlistItem = await createWishlistItem({ ...newWishlistItem, userId });

    return NextResponse.json<ResponseInterface<WishlistModel>>(
      {
        statusCode: 201,
        message: "POST Wishlist item success!",
        data: wishlistItem,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json<ResponseInterface<WishlistModel>>(
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

export const DELETE = async (
  _request: NextRequest,
  { params: { id } }: { params: { id: string } }
): Promise<Response> => {
  try {
    await removeWishlistById(id);

    return NextResponse.json<ResponseInterface<never>>(
      {
        statusCode: 204,
        message: "DELETE Wishlist item success!",
      },
      {
        status: 204,
      }
    );
  } catch (error) {
    return NextResponse.json<ResponseInterface<never>>(
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
