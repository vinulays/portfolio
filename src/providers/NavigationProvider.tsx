'use client';

import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useContext, useState } from 'react';

const NavigationContext = createContext(false);

export function useHasPreviousPage() {
  return useContext(NavigationContext);
}

export default function NavigationProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const [navigation, setNavigation] = useState({
    currentPath: pathname,
    previousPath: null as string | null,
  });

  // Derive history during rendering so the new page receives it immediately.
  if (pathname !== navigation.currentPath) {
    setNavigation({ currentPath: pathname, previousPath: navigation.currentPath });
  }

  return <NavigationContext.Provider value={navigation.previousPath !== null}>{children}</NavigationContext.Provider>;
}
