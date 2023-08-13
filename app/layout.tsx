import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/nav-bar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add other metadata here */}
        <title>Ed-Circle</title>
        <meta name="description" content="Developed by Karan Chaudhary" />
      </head>
      <body className={`font-rem ${!open ? "" : "bg-gray-300"}`}>
        <Navbar open={open} setOpen={setOpen} />

        {open ? "" : children}
      </body>
    </html>
  );
}
