"use client";

// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Sidebar } from "@/components/layout/sidebar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { useState } from "react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata: Metadata = {
//   title: "Personal Dashboard",
//   description: "Your personal dashboard application",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [open, setOpen] = useState(false);

  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background`}> */}
      <body className={` antialiased bg-background`}>
        <div className="flex min-h-screen flex-col">
          <Sheet open={open} onOpenChange={setOpen}>
            <Header onMenuClick={() => setOpen(true)} />
            <div className="flex flex-1">
              {/* Sidebar for desktop */}
              <div className="hidden md:flex">
                <Sidebar />
              </div>
              {/* Sidebar as drawer for mobile */}
              <SheetContent side="left" className="p-0 w-48 md:hidden">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <Sidebar />
              </SheetContent>
              <main className="flex-1 md:ml-56 p-6 md:p-auto md:px-10 md:py-6">{children}</main>
            </div>
          </Sheet>
        </div>
      </body>
    </html>
  );
}
