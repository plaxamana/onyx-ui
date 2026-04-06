import { createContext, useContext, type ReactNode } from 'react';

interface TabsContextValue {
  activeTab: string;
  setActiveTab: (id: string) => void;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export default function TabsProvider({ children }: { children: ReactNode }) {
  const value: TabsContextValue = {
    activeTab: '',
    setActiveTab: () => {},
  };

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>;
}

export function useTabs() {
  const context = useContext(TabsContext);
  if (!context) throw new Error('useTabs must be used within a <Tabs> component');
  return context;
}
