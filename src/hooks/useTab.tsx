import { TabContext } from "@/context/tabContext";
import { useContext } from "react";

export const useTab = () => {
  const context = useContext(TabContext);

  if (!context) {
    throw new Error("useTab must be within a TabProvider");
  }

  return context;
};
