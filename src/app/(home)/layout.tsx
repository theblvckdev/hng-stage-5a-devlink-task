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
        <div className="xl:basis-2/5 xl:block hidden">
          <PreviewSection />
        </div>
        <div className="xl:basis-3/5 lg:basis-1/2">{children}</div>
      </div>
    </main>
  );
}
