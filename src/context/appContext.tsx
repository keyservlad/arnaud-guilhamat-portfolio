import type LocomotiveScroll from "locomotive-scroll";
import { createContext, useState, useEffect, useRef, useContext } from "react";

interface AppContextProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsLocomotiveScroll: React.Dispatch<React.SetStateAction<boolean>>;
  locomotiveScrollRef: React.MutableRefObject<LocomotiveScroll | null>;
  disableScroll: () => void;
  enableScroll: () => void;
  isLocomotiveScroll: boolean;
  scrollToId: (id: string) => void;
  setScrollRouting: React.Dispatch<React.SetStateAction<any>>;
  scrollRouting: string | null;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export default function AppProvider({ children }: any) {
  const locomotiveScrollRef = useRef<LocomotiveScroll | null>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLocomotiveScroll, setIsLocomotiveScroll] = useState(true);
  const [scrollRouting, setScrollRouting] = useState(null);

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

  function scrollToId(id: string) {
    const target: HTMLElement | null = document.querySelector(id);

    if (target) {
      locomotiveScrollRef.current?.scrollTo(target, {
        duration: 3,
      });
    }
  }

  useEffect(() => {
    (async () => {
      if (!locomotiveScrollRef.current) {
        const LocomotiveScroll = (await import("locomotive-scroll")).default;
        locomotiveScrollRef.current = new LocomotiveScroll({
          lenisOptions: {
            smoothTouch: true,
          },
        });
      }
      disableScroll();
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

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        setIsLocomotiveScroll,
        locomotiveScrollRef,
        disableScroll,
        enableScroll,
        isLocomotiveScroll,
        scrollToId,
        setScrollRouting,
        scrollRouting,
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
