import { useInView } from "framer-motion";
import Image from "next/legacy/image";
import React, { useRef } from "react";
import BGQuote from "~/public/images/temoignage/bg_temoign.svg";
import { motion } from "framer-motion";
import { FADE_UP_ANIMATION_VARIANTS } from "../common/animText/animate";

const Temoignage = () => {
  const container = useRef(null);
  const isInView = useInView(container, {
    margin: "0px 0px -40px 0px",
  });
  return (
    <div className="w-full">
      <div
        className={`relative mx-auto flex max-w-[940px] flex-col items-center justify-center bg-contain bg-scroll bg-center bg-no-repeat py-20`}
      >
        <motion.div
          ref={container}
          variants={FADE_UP_ANIMATION_VARIANTS}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="z-10"
        >
          <p className="mx-auto mb-[10px] mt-0 max-w-[493px] text-center">
            Responsible, very involved and eager for new knowledge Arnaud is a
            driving force that loves challenges and getting involved in new
            projects. Endowed with a strong team spirit, he always knew how to
            respect the Kanban processes and rituals implemented in our company
            as well as working in complete autonomy and responsibility
            throughout his missions.
          </p>
          <p className="mb-[10px] text-center font-bold">Marco Lindley</p>
          <p className="text-center">(Co-founder & CTO of DATA SESSION)</p>
        </motion.div>
        <Image
          src={BGQuote}
          alt="Picture of the author"
          layout="fill"
          objectFit="contain"
          objectPosition="center"
          className="absolute left-0 top-0 h-full w-full px-3"
        />
      </div>
    </div>
  );
};

export default Temoignage;
