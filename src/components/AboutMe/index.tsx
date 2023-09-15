import React from "react";
import { Scroller } from "./Scroller";

const AboutMe = () => {
  return (
    <div className="block w-full bg-[#f7f7fa]">
      <div className="align-center mx-auto flex max-w-[940px] flex-col justify-center pt-32 pb-10">
        <h2>About Me</h2>
      </div>
      <Scroller />
    </div>
  );
};

export default AboutMe;
