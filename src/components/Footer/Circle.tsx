import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Circle = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [96, 0]);
  return (
    <>
      <motion.div
        ref={container}
        key={`circle`}
        style={{ height }}
        className="relative w-full shadow-footer"
      >
        <div
          style={{
            borderRadius: "50%",
            transform: "translate(-50%, -86.666%)",
          }}
          className="absolute left-[50%] z-10 block h-[750%] w-[150%] overflow-hidden bg-[#f7f7fa] shadow-footer"
        />
      </motion.div>
    </>
  );
};

export default Circle;
