import Navbar from "@/components/ui/navbar/navbar";
import React from "react";
import PreviewSection from "./components/previewSection";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen h-full md:p-4 bg-background">
      <Navbar />

      <div className="flex flex-row gap-4 mt-4">
        <div className="basis-2/5">
          <PreviewSection />
        </div>
        <div className="basis-3/5">{children}</div>
      </div>
    </main>
  );
}
