import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "./anime";
import { useRouter } from "next/router";
import { useAppContext } from "~/context/appContext";

interface NavItemProps {
  data: {
    title: string;
    href: string;
    index: number;
    type: string;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  setIsMenuOpen: (value: boolean) => void;
  setIsLocomotiveScroll: (value: boolean) => void;
}

export default function NavItem({
  data,
  isActive,
  setSelectedIndicator,
  setIsMenuOpen,
  setIsLocomotiveScroll,
}: NavItemProps) {
  const { title, href, index, type } = data;
  const router = useRouter();
  const { setScrollRouting, scrollToId } = useAppContext();

  return (
    <motion.div
      className="relative flex items-center"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
        className="absolute -left-7 h-[10px] w-[10px] scale-0 rounded-full bg-white"
      />
      {type === "link" ? (
        <Link
          onClick={() => {
            setIsLocomotiveScroll(true);
            setIsMenuOpen(false);
          }}
          className="font-light text-white no-underline"
          href={href}
        >
          {title}
        </Link>
      ) : (
        <button
          onClick={() => {
            setIsLocomotiveScroll(true);
            setIsMenuOpen(false);
            setTimeout(() => {
              if (router.pathname === "/") {
                scrollToId(href);
                console.log(href);
              } else {
                setScrollRouting(href);
                router.push("/");
              }
            }, 200);
          }}
          className="font-light text-white no-underline"
        >
          {title}
        </button>
      )}
    </motion.div>
  );
}
