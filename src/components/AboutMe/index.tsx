import { Scroller } from "./Scroller";

const AboutMe = () => {
  return (
    <>
      <div className="relative z-20 block min-h-[1500px] w-full bg-[#f7f7fa]">
        <div className="align-center mx-auto flex max-w-[940px] flex-col justify-center pb-10 pt-32">
          <h2>About Me</h2>
        </div>
        <Scroller />
      </div>
    </>
  );
};

export default AboutMe;
