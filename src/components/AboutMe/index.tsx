import { type StaticImageData } from "next/image";
import Gallery from "./Gallery";
import { Scroller } from "./Scroller";

interface GalleryProps {
  moveItems: (x: number, y: number) => void;
  sections: {
    title: string;
    src: StaticImageData | undefined;
    color: string;
    cursorText: string;
    images: StaticImageData[];
  }[];
  setSections: React.Dispatch<
    React.SetStateAction<
      {
        title: string;
        src: StaticImageData | undefined;
        color: string;
        cursorText: string;
        images: StaticImageData[];
      }[]
    >
  >;
  setModal: (value: any) => void;
  growCursor: () => void;
}

const AboutMe = ({
  moveItems,
  sections,
  setSections,
  setModal,
  growCursor,
}: GalleryProps) => {
  return (
    <>
      <div id="about-me" className="relative z-20 block w-full bg-[#f7f7fa]">
        <div className="align-center mx-auto flex max-w-[940px] flex-col justify-center pb-10 pt-32">
          <h2>About Me</h2>
        </div>
        <Scroller />
        <Gallery
          moveItems={moveItems}
          sections={sections}
          setModal={setModal}
          setSections={setSections}
          growCursor={growCursor}
        />
      </div>
    </>
  );
};

export default AboutMe;
