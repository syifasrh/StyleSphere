import {
  UserModel,
  createUser,
  getUserByEmail,
  getUserByUsername,
} from "@/db/models/users";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ResponseInterface } from "../../route";

export const dynamic = "force-dynamic";

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

    const existingUsername = await getUserByUsername(newUser.username);
    if (existingUsername) {
      return NextResponse.json<ResponseInterface<never>>(
        {
          statusCode: 401,
          message: "Username is already taken!",
        },
        {
          status: 401,
        }
      );
    }

    const existingEmail = await getUserByEmail(newUser.email);
    if (existingEmail) {
      return NextResponse.json<ResponseInterface<never>>(
        {
          statusCode: 401,
          message: "Email is already registered!",
        },
        {
          status: 401,
        }
      );
    }

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
