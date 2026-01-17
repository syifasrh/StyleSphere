import { getUserByEmail } from "@/db/models/users";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ResponseInterface } from "../../route";
import { comparePass } from "@/db/utils/hash";
import { createToken } from "@/lib/jwt";

export const dynamic = "force-dynamic";

const LoginSchema = z.object({
  email: z
    .string({ required_error: "Email is required!" })
    .email({ message: "Invalid email format!" }),
  password: z.string({ required_error: "Password is required!" }),
});

export const POST = async (request: Request): Promise<Response> => {
  try {
    const { email, password } = await request.json();
    const loginData = LoginSchema.safeParse({ email, password });

    if (!loginData.success) throw loginData.error;

    const user = await getUserByEmail(email);

    if (!user) {
      return NextResponse.json<ResponseInterface<never>>(
        {
          statusCode: 401,
          message: "User not found!",
        },
        {
          status: 401,
        }
      );
    }

    const access_token = createToken({ _id: user._id, email: user.email });

    if (comparePass(password, user.password)) {
      const resp = NextResponse.json<ResponseInterface<never>>(
        {
          statusCode: 200,
          message: "Login success",
          token: `${access_token}`,
        },
        {
          status: 200,
        }
      );

      resp.cookies.set("Authorization", `Bearer ${access_token}`);

      return resp;
    } else {
      return NextResponse.json<ResponseInterface<never>>(
        {
          statusCode: 401,
          message: "Invalid password!",
        },
        {
          status: 401,
        }
      );
    }
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
    } else {
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
  }
};
