import React from "react";
import type { Metadata } from "next";
import "@/app/styles/globals.css";
import { geistSans, geistMono } from "@/app/fonts";

export const metadata: Metadata = {
  title: "Ask Ham Flow",
  description: "Where amateur radio operators (also known as radio amateurs or hams) share their knowledge.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
