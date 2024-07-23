// UserContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface TabContextProperty {
  tab: number;
  setTab: (currentTab: 1 | 2) => void;
}

export const TabContext = createContext<TabContextProperty | undefined>(
  undefined
);

export const TabProvider = ({ children }: { children: ReactNode }) => {
  const [tab, setTab] = useState<1 | 2>(1);

  return (
    <TabContext.Provider value={{ tab, setTab }}>
      {children}
    </TabContext.Provider>
  );
};
