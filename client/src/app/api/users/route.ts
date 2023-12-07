import { NextResponse } from "next/server";

export interface ResponseInterface<T> {
  statusCode: number;
  message?: string;
  error?: string;
  data?: T;
}

export const GET = async (): Promise<Response> => {
  return NextResponse.json<ResponseInterface<never>>(
    { statusCode: 200, message: "Success GET" },
    { status: 200 }
  );
};

export const POST = async (): Promise<Response> => {
  return NextResponse.json<ResponseInterface<never>>(
    { statusCode: 201, message: "Success POST" },
    { status: 201 }
  );
};

export const DELETE = async (): Promise<Response> => {
  return NextResponse.json<ResponseInterface<never>>(
    { statusCode: 200, message: "Success DELETE" },
    { status: 200 }
  );
};