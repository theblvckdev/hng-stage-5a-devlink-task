import Navbar from "@/components/ui/navbar/navbar";
import React from "react";
import PreviewSection from "./components/previewSection";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="min-h-screen h-full md:p-4 bg-background w-full overflow-x-hidden">
      <Navbar />

      <div className="lg:flex lg:flex-row lg:gap-4 md:mt-4 md:p-0 p-4">
        <div className="basis-2/5 lg:block hidden">
          <PreviewSection />
        </div>
        <div className="lg:basis-3/5">{children}</div>
      </div>
    </main>
  );
}
