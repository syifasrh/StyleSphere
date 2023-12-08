"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logoutHandler() {
  cookies().get("Authorization") && cookies().delete("Authorization");
  redirect("/login");
}
