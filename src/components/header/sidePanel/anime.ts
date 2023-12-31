export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] },
  },
};

export const darkBG = {
  initial: { opacity: 0 },
  enter: { opacity: 0.35, transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] } },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1] },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1], delay: 0.07 * i },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: { duration: 0.8, ease: [0.7, 0, 0.2, 1], delay: 0.07 * i },
  }),
};

export const scale = {
  open: { scale: 1, transition: { duration: 0.3 } },
  closed: { scale: 0, transition: { duration: 0.4 } },
};
