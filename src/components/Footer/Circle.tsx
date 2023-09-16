import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Circle = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 1], [96, 0]);
  return (
    <>
      <motion.div
        ref={container}
        style={{ height }}
        className="shadow-footer relative w-full"
      >
        <div
          style={{
            borderRadius: "50%",
            transform: "translate(-50%, -86.666%)",
          }}
          className="shadow-footer absolute left-[50%] z-10 block h-[750%] w-[150%] overflow-hidden bg-[#f7f7fa]"
        />
      </motion.div>
    </>
  );
};

export default Circle;
