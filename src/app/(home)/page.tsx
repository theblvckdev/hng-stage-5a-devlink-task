"use client";
import { TabProvider } from "@/context/tabContext";
import React from "react";
import LinkTab from "./components/linkTab";

const Home = () => {
  return (
    <TabProvider>
      <div className="mt-[24px]">
        <LinkTab />
      </div>
    </TabProvider>
  );
};

export default Home;
