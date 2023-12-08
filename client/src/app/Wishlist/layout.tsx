import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import PortectedPage from "@/components/ProtectedPage";
import React from "react";

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <PortectedPage>
        <Navbar />
        {children}
        <Footer />
      </PortectedPage>
    </>
  );
}
