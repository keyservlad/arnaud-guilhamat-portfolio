import Image from "next/legacy/image";
import React from "react";
import BGQuote from "~/public/images/temoignage/bg_temoign.svg";

const Temoignage = () => {
  return (
    <div className="w-full">
      <div
        className={`align-center relative mx-auto flex max-w-[940px] flex-col justify-center bg-contain bg-scroll bg-center bg-no-repeat py-20`}
      >
        <div className="z-10">
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
        </div>
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
