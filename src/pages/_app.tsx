import '../assets/styles/globals.css';
import type { AppProps } from 'next/app';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { NAV_ITEMS } from 'src/utils';
import { useRouter } from 'next/router';

export const AppContext = createContext<{
  selectedNavItem: { label: string };
  setSelectedNavItem: Dispatch<SetStateAction<{ label: string }>> | null;
}>({
  selectedNavItem: NAV_ITEMS[0],
  setSelectedNavItem: null,
});

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const [selectedNavItem, setSelectedNavItem] = useState(NAV_ITEMS[0]);

  useEffect(() => {
    const currentPage = NAV_ITEMS.find((path) => path.href === pathname);
    currentPage && setSelectedNavItem(currentPage);
  }, [pathname]);

  return (
    <AppContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
