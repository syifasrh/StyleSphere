import { UserModel, getUser } from "@/db/models/users";
import { NextResponse } from "next/server";
import { ResponseInterface } from "../route";

export const GET = async (): Promise<Response> => {
  const users = getUser();
  return NextResponse.json<ResponseInterface<UserModel>>(
    {
      statusCode: 200,
      message: "GET Users success!",
      data: users,
    },
    {
      status: 200,
    }
  );
};
