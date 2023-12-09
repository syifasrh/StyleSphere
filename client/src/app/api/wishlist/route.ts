import { NextRequest, NextResponse } from "next/server";
import {
  WishlistModel,
  getWishlistByUserId,
  createWishlistItem,
  removeWishlistById,
  WishlistInputModel,
} from "@/db/models/wishlist";
import { ResponseInterface } from "../route";
import { ObjectId } from "mongodb";

export const GET = async (
  request: NextRequest,
  _response: NextResponse
): Promise<Response> => {
  try {
    const userIdFromCookie = request.cookies.get("userId");
    const userIdFromHeaders = request.headers.get("x-user-id");

    const userId = userIdFromHeaders || userIdFromCookie;

    if (!userId) {
      return NextResponse.json<ResponseInterface<WishlistModel[]>>(
        {
          statusCode: 401,
          message: "User not authenticated!",
        },
        {
          status: 401,
        }
      );
    }

    const wishlistItems = await getWishlistByUserId(userId as string);

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
  _response: NextResponse
): Promise<Response> => {
  try {
    const userIdFromCookie = request.cookies.get("userId");    
    const userIdFromHeaders = request.headers.get("x-user-id");

    const userId = userIdFromHeaders || userIdFromCookie;
    console.log(userId, 'usrr');
    

    if (!userId) {
      return NextResponse.json<ResponseInterface<WishlistModel>>(
        {
          statusCode: 401,
          message: "User not authenticated!",
        },
        {
          status: 401,
        }
      );
    }

    const { productId } = await request.json();

    const newWishlistItem: WishlistInputModel = {
      userId: new ObjectId(userId as string),
      productId: new ObjectId(productId),
    };

    const wishlistItem = await createWishlistItem(newWishlistItem);

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
        message: `Internal server error: ${error}`,
      },
      {
        status: 500,
      }
    );
  }
};
