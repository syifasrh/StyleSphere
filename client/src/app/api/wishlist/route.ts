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
import { cookies } from "next/headers";
import { verifyToken } from "@/lib/jose";

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
    console.log(userId, "usrr");

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

export const DELETE = async (request: NextRequest) => {
  try {
    const authorization = request.cookies.get("Authorization");

    if (!authorization) {
      return NextResponse.json(
        {
          message: "Authentication failed",
        },
        {
          status: 401,
        }
      );
    }
    const { productId } = (await request.json()) as {
      productId: string;
    };
    const token = authorization.value.split(" ")[1];
    if (!token || authorization.value.split(" ")[0] !== "Bearer") {
      return Response.json(
        {
          statusCode: 401,
          message: "Invalid Token",
        },
        {
          status: 401,
        }
      );
    }
    const decodedToken = await verifyToken(token);
    const data = decodedToken.payload as { _id: string; email: string };
    const userId = data._id;

    const deleteItem = await removeWishlistById({
      userId: new ObjectId(userId),
      productId: new ObjectId(productId),
    });

    if (deleteItem.deletedCount > 0) {
      return Response.json(
        {
          statusCode: 200,
          message: "Wishlist removed successfully",
          data: deleteItem,
        },
        {
          status: 200,
        }
      );
    } else {
      return Response.json(
        {
          statusCode: 404,
          message: "Wishlist not found or already removed",
        },
        {
          status: 404,
        }
      );
    }
  } catch (error) {
    return Response.json(
      {
        statusCode: 404,
        message: "Wishlist not found or already removed",
      },
      {
        status: 404,
      }
    );
  }
};
