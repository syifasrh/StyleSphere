import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
