import { UserModel, createUser } from "@/db/models/users";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ResponseInterface } from "../../route";

const UserSchema = z.object({
  username: z.string({ required_error: "Username is required!" }),
  email: z
    .string({ required_error: "Email is required!" })
    .email({ message: "Invalid email format!" }),
  password: z
    .string({ required_error: "Password is required!" })
    .min(5, { message: "Password must be at least 5 characters long!" }),
});

export const POST = async (request: Request): Promise<Response> => {
  try {
    let newUser: UserModel = await request.json();
    const userParsed = UserSchema.safeParse(newUser);

    if (!userParsed.success) throw userParsed.error;

    const user = await createUser(newUser);

    return NextResponse.json<ResponseInterface<never>>(
      {
        statusCode: 201,
        message: "POST New user success",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json<ResponseInterface<never>>(
        {
          statusCode: 400,
          message: `${error.issues[0].path[0]} - ${error.issues[0].message}`,
        },
        {
          status: 400,
        }
      );
    }
  }
  return NextResponse.json<ResponseInterface<never>>(
    {
      statusCode: 500,
      message: "Internal server error!",
    },
    {
      status: 500,
    }
  );
};
