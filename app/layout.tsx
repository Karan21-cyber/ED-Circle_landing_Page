"use client"
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/navbar/nav-bar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ed-Circle",
  description: "Developed by Karan Chaudhary",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`font-rem ${!open ? "" : "bg-gray-300"}`}>
        <Navbar open={open} setOpen={setOpen} />

        {open ? "" : children}
      </body>
    </html>
  );
}
