"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function logoutHandler() {
  cookies().get("Authorization") && cookies().delete("Authorization") && cookies().delete('_hjSessionUser_2614022')
  redirect("/login");
}
