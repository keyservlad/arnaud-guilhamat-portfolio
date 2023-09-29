import Link from "next/link";
import Magnetic from "~/components/common/Magnetic";

export default function Footer() {
  return (
    <div className="">
      <h3 className="mb-4 cursor-text p-0.5 text-[1em] font-light text-gray-500">
        Socials
      </h3>
      <div className="flex w-full justify-between gap-10">
        <Magnetic>
          <Link
            target="_blank"
            href="https://github.com/keyservlad"
            className="group relative"
          >
            <p className="cursor-pointer">GitHub</p>
            <div
              style={{
                transition: "width 0.2s ease-in-out",
              }}
              className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
            />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/arnaud-guilhamat"
            className="group relative"
          >
            <p className="cursor-pointer">LinkedIn</p>
            <div
              style={{
                transition: "width 0.2s ease-in-out",
              }}
              className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
            />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            href="mailto:arnaud.guilhamat@emovin.fr"
            className="group relative"
          >
            <p className="cursor-pointer">Email</p>
            <div
              style={{
                transition: "width 0.2s ease-in-out",
              }}
              className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
            />
          </Link>
        </Magnetic>
        <Magnetic>
          <Link
            target="_blank"
            href="https://www.strava.com/athletes/47513264"
            className="group relative"
          >
            <p className="cursor-pointer">Strava</p>
            <div
              style={{
                transition: "width 0.2s ease-in-out",
              }}
              className="absolute left-1/2 block h-px w-0 -translate-x-1/2 bg-white group-hover:w-full"
            />
          </Link>
        </Magnetic>
      </div>
    </div>
  );
}
