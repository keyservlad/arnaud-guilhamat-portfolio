// this comes from the framer-motion docs, just ported to twcss
import { wrap } from "@motionone/utils";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

interface ParallaxProps {
  children: React.ReactNode;
  baseVelocity: number;
}

export function Scroller() {
  function ParallaxText({ children, baseVelocity = 10 }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity: MotionValue<number> = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
    // const x = useTransform(baseX, (v) => `${v}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      /**
       * This is what changes the direction of the scroll once we
       * switch scrolling directions.
       */
      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();

      baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want deriving from the
     * dynamically generated number of children.
     */
    return (
      <div className="flex flex-nowrap overflow-hidden whitespace-nowrap tracking-tighter">
        <motion.p
          key={"parallax-text"}
          className="flex flex-nowrap whitespace-nowrap text-center text-xl lg:text-4xl font-bold uppercase tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ x }}
        >
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
          <span>{children} </span>
        </motion.p>
      </div>
    );
  }

  // if we are on mobile text = "SCROLL SCROLL" else text = "SCROLL SCROLL&nbsp;"

  // const text1 = <>SCROLL SCROLL&nbsp;</>

  const text1 =
    window.innerWidth < 1024 ? (
      <>SPORTS TECH TRAVEL&nbsp;</>
    ) : (
      <>SCROLL SCROLL&nbsp;</>
    );
  const text2 =
    window.innerWidth < 1024 ? (
      <>SPORTS TECH TRAVEL&nbsp;</>
    ) : (
      <>Explore with MOUSE&nbsp;</>
    );
  return (
    <section className="">
      <ParallaxText baseVelocity={1.5}>{text1}</ParallaxText>
      <ParallaxText baseVelocity={-1.5}>{text2}</ParallaxText>
    </section>
  );
}
