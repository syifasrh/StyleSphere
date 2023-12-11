import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export default async function PortectedPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const auth = await cookies().get("Authorization");
  if (!auth) redirect("/login");
  
  return <>{children}</>;
}
