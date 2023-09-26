import ImageFront from "~/public/images/techs/mac-svgrepo-com.svg";
import ImageBack from "~/public/images/techs/server-svgrepo-com.svg";
import ImageGit from "~/public/images/techs/github-svgrepo-com.svg";
import Image from "next/image";

export default function TechStack() {
  return (
    <div className="mt-10 flex flex-col gap-12 md:flex-row">
      <div className="relative w-full items-center justify-center rounded-2xl border-[3px] border-[#f1f1f1] py-5 hover:shadow-lg">
        <Image
          src={ImageFront}
          alt="Front-end"
          width={60}
          height={60}
          className="mx-auto"
        />
        <div className="mt-3 w-full text-center">
          <p className="m-1">TypeScript</p>
          <p className="m-1">Next.js / React.js</p>
          <p className="m-1">Tailwind css</p>
          <p className="m-1">React Context API</p>
        </div>
      </div>
      <div className="relative w-full items-center justify-center rounded-2xl border-[3px] border-[#f1f1f1] py-5 hover:shadow-lg">
        <Image
          src={ImageBack}
          alt="Front-back"
          width={60}
          height={60}
          className="mx-auto"
        />
        <div className="mt-3 w-full text-center">
          <p className="m-1">Next.js / Node.js</p>
          <p className="m-1">Python / Django</p>
          <p className="m-1">Prisma</p>
          <p className="m-1">Vercel</p>
        </div>
      </div>
      <div className="relative w-full items-center justify-center rounded-2xl border-[3px] border-[#f1f1f1] py-5 hover:shadow-lg">
        <Image
          src={ImageGit}
          alt="Front-git"
          width={60}
          height={60}
          className="mx-auto"
        />
        <div className="mt-3 w-full text-center">
          <p className="m-1">Git</p>
          <p className="m-1">Linux</p>
          <p className="m-1">Figma</p>
          <p className="m-1">VSCode</p>
          <p className="m-1 mt-3 font-medium">google.com</p>
        </div>
      </div>
    </div>
  );
}
