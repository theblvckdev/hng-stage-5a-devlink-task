import Navbar from "@/components/ui/navbar/navbar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen h-full md:p-5 bg-background">
      <Navbar />
      {children}
    </main>
  );
}
