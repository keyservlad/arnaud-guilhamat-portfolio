import Link from "next/link";
import { motion } from "framer-motion";
import { scale, slide } from "./anime";

interface NavItemProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  setIsMenuOpen: (value: boolean) => void;
  enableScroll: () => void;
}

export default function NavItem({
  data,
  isActive,
  setSelectedIndicator,
  setIsMenuOpen,
  enableScroll,
}: NavItemProps) {
  const { title, href, index } = data;

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
      <Link
        onClick={() => {
          enableScroll();
          setIsMenuOpen(false);
        }}
        className="font-light text-white no-underline"
        href={href}
      >
        {title}
      </Link>
    </motion.div>
  );
}
