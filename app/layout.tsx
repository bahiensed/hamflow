import React from "react";
import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'
import "@/app/styles/globals.css";
import { inter, spaceGrotesk } from "@/app/fonts";
import { ThemeProvider } from "@/context/ThemeProvider";

export const metadata: Metadata = {
  title: "Ask Ham Flow",
  description: "Where amateur radio operators (also known as radio amateurs or hams) share their knowledge.",
  icons: {
    icon: "/assets/images/site-logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
            {children}
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
