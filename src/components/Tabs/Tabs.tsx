import type { ReactNode } from 'react';
import TabsProvider from './TabsContext';

export default function Tabs({ children }: { children: ReactNode }) {
  return <TabsProvider>{children}</TabsProvider>;
}
