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

      const token = cookie?.value.split(" ")[1];
      if (
        !cookie?.value.split(" ")[0] ||
        cookie?.value.split(" ")[0] !== "Bearer"
      ) {
        throw new Error("Invalid Token");
      }

      
    }
  } catch (error) {}
}
