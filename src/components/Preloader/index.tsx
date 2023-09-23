"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { opacity, slideUp } from "./anim";
import { useRouter } from "next/router";

const words = [
  "Hello",
  "Hola",
  "Ciao",
  "やあ",
  "moï",
  "Guten tag",
  "Xin chào",
  "Bonjour",
];

export default function Preloader() {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const curveHeight = useRef(300);

  const router = useRouter();

  useEffect(() => {
    setDimension({ width: window.innerWidth, height: window.innerHeight });

    if (window.innerWidth < 768) {
      curveHeight.current = 200;
    }
  }, []);

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150,
    );
  }, [index]);

  const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height + curveHeight.current} 0 ${
    dimension.height
  }  L0 0`;
  const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
    dimension.height
  } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height}  L0 0`;

  const curve = {
    initial: {
      d: initialPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: targetPath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  const initialUpperCurvePath = `M0 ${curveHeight.current} Q${
    dimension.width / 2
  } ${curveHeight.current} ${dimension.width} ${curveHeight.current} L${
    dimension.width
  } ${dimension.height + curveHeight.current} L0 ${
    dimension.height + curveHeight.current
  } L0 ${curveHeight.current}`;

  // Note à moi meme : si tu veux faire une courbe en haut, il faut que le point de controle soit POSITIF
  // const targetUpperCurvePath = `M${dimension.width} ${dimension.height} L0 ${
  //   dimension.height
  // } L0 0 Q${dimension.width / 2} -${curveHeight.current} ${dimension.width} 0 L${
  //   dimension.width
  // } ${dimension.height}`;

  const targetUpperCurvePath2 = `M0 ${curveHeight.current} Q${
    dimension.width / 2
  } 0 ${dimension.width} ${curveHeight.current} L${dimension.width} ${
    dimension.height + curveHeight.current
  } L0 ${dimension.height + curveHeight.current} L0 ${curveHeight.current}`;

  const upperCurve = {
    initial: {
      d: initialUpperCurvePath,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
    },
    enter: {
      d: targetUpperCurvePath2,
      transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
    },
  };

  return (
    <motion.div
      variants={slideUp}
      initial="initial"
      animate="enter"
      exit="exit"
      key={"preloader"}
      className="fixed z-[99999] flex h-screen w-screen cursor-wait items-center justify-center bg-[#141517]"
    >
      {dimension.width > 0 && (
        <>
          {router.pathname === "/contact" ? (
            <motion.p
              className="absolute z-10 flex cursor-wait items-center text-5xl text-white"
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              <span className="mr-3 block h-3 w-3 rounded-[50%] bg-white" />
              Contact me
            </motion.p>
          ) : (
            <motion.p
              className="absolute z-10 flex cursor-wait items-center text-5xl text-white"
              variants={opacity}
              initial="initial"
              animate="enter"
            >
              <span className="mr-3 block h-3 w-3 rounded-[50%] bg-white" />
              {words[index]}
            </motion.p>
          )}

          <svg
            className={`absolute top-0 h-[calc(100%+${curveHeight.current}px)] w-full`}
          >
            <motion.path
              className="fill-dark"
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
          <svg
            className={`absolute -top-[${curveHeight.current}px] h-[calc(100%+${curveHeight.current}px)] w-full`}
          >
            <motion.path
              className="fill-dark"
              variants={upperCurve}
              initial="initial"
              animate="enter"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
