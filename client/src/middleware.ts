import { NextRequest, NextResponse } from "next/server";
import { verifyToken } from "./lib/jose";

export async function middleware(request: NextRequest) {
  try {
    if (request.nextUrl.pathname.startsWith("/api/products")) {
      const cookie = request.cookies.get("Authorization");

      if (!cookie) {
        return NextResponse.json(
          {
            message: "Authentication failed!",
          },
          {
            status: 401,
          }
        );
      }

      const token = cookie.value.split(" ")[1];
      if (!token || cookie.value.split(" ")[0] !== "Bearer") {
        return NextResponse.json(
          {
            message: "Invalid Token",
          },
          {
            status: 401,
          }
        );
      }

      const decodedToken = await verifyToken(token);
      const data = decodedToken.payload as { _id: string; email: string };

      const reqHeaders = new Headers(request.headers);
      reqHeaders.set("userId", data._id);
      reqHeaders.set("userEmail", data.email);

      const response = NextResponse.next({
        request: {
          headers: reqHeaders,
        },
      });

      return response;
    }
  } catch (error) {
    console.error("Error in middleware:", error);
    return NextResponse.json(
      {
        message: "Internal server error!",
      },
      {
        status: 500,
      }
    );
  }
}
