import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StyleSphere",
  description: "Find your best branded bags",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
        <script
          async
          src="node_modules/@material-tailwind/html@latest/scripts/ripple.js"
        ></script>

        <script
          async
          src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"
        ></script>

      <body className={roboto.className}>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.0/flowbite.min.js" async></script>
      </body>
    </html>
  );
}
