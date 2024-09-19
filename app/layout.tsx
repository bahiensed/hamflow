import React from 'react'
import type { Metadata } from "next";
import { ClerkProvider } from '@clerk/nextjs'

import "@/app/styles/globals.css";
import { inter, spaceGrotesk } from "@/app/fonts";
import { ThemeProvider } from "@/context/ThemeProvider";
import Navbar from '@/components/shared/navbar/Navbar'
import LeftSidebar from '@/components/shared/LeftSidebar'
import RightSidebar from '@/components/shared/RightSidebar'

export const metadata: Metadata = {
  title: "Ask Ham Flow",
  description: "Where amateur radio operators (also known as radio amateurs or hams) share their knowledge.",
  icons: {
    icon: "/assets/images/site-logo.svg"
  }
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (

    <ClerkProvider>
      <ThemeProvider>
        <html lang="en">
          <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
            <main className="background-light850_dark100 relative">
              <Navbar />
              <div className="flex">
                <LeftSidebar />

                <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
                  <div className="mx-auto w-full max-w-5xl">
                    {children}
                  </div>
                </section>

                <RightSidebar />
              </div>

              Toaster
            </main>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  )
}

export default RootLayout;
