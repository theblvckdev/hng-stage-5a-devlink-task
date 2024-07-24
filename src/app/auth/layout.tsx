"use client";
import { AuthProvider } from "@/context/authContext";
import { usePathname } from "next/navigation";
import React from "react";

export default function AuthLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const currentPath = usePathname();
  const authPath = currentPath.split("/")[2];

  return (
    <AuthProvider>
      <main
        className={`h-full min-h-screen w-screen flex flex-col md:items-center justify-center md:space-y-8 space-y-3 md:bg-background bg-transparent ${
          authPath === "sign-up" && "md:py-16 py-10"
        }`}
      >
        {children}
      </main>
    </AuthProvider>
  );
}
