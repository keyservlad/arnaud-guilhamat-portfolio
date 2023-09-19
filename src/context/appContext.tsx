import type LocomotiveScroll from "locomotive-scroll";
import { createContext, useState, useEffect, useRef, useContext } from "react";

interface AppContextProps {
  isLoading: boolean;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLocomotiveScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default function AppProvider({ children }: any) {
  const [isLoading, setIsLoading] = useState(true);
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocomotiveScroll, setIsLocomotiveScroll] = useState(true);

  useEffect(() => {
    (async () => {
      if (!locomotiveScrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScrollRef.current = new LocomotiveScroll();
      }
      disableScroll();

      setTimeout(() => {
        setIsLoading(false);
        enableScroll();
        window.scrollTo(0, 0);
      }, 2000);
    })();

    return () => {
      locomotiveScrollRef.current?.destroy();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (isLocomotiveScroll) {
      enableScroll();
    } else {
      disableScroll();
    }
  }, [isLocomotiveScroll]); // eslint-disable-line react-hooks/exhaustive-deps

  function disableScroll() {
    locomotiveScrollRef.current?.stop();
    setScrollTop(window.scrollY || document.documentElement.scrollTop);
    document.body.style.overflow = "hidden";
  }

  function enableScroll() {
    locomotiveScrollRef.current?.scrollTo(scrollTop);
    locomotiveScrollRef.current?.start();
    document.body.style.overflow = "auto";
  }

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isMenuOpen,
        setIsMenuOpen,
        setIsLocomotiveScroll,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppProvider");
  }
  return context;
};
