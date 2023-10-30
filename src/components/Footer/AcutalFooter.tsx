import Link from "next/link";
import React, { useEffect, useState } from "react";
import Magnetic from "~/components/common/Magnetic";

export default function ActualFooter() {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString("fr-FR", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
      timeZoneName: "short",
      timeZone: "Europe/Paris",
    }),
  );

  useEffect(() => {
    // Update the time every second (1000 milliseconds)
    const intervalId = setInterval(() => {
      setCurrentTime(
        new Date().toLocaleTimeString("fr-FR", {
          hour: "numeric",
          minute: "numeric",
          hour12: true,
          timeZoneName: "short",
          timeZone: "Europe/Paris",
        }),
      );
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <footer className="mt-5 lg:mt-14 flex flex-col-reverse justify-between p-5 sm:flex-row">
      <div className="mt-3 flex items-end justify-between gap-6 border-t border-[#999999] border-opacity-40 pt-3 sm:justify-normal sm:border-0 sm:p-0">
        <span className="flex flex-col gap-4">
          <h3 className="m-0 cursor-text p-0.5 text-[1em] font-light text-gray-500">
            Version
          </h3>
          <p>© 2023</p>
        </span>
        <span className="flex flex-col gap-4">
          <h3 className="m-0 cursor-text p-0.5 text-[1em] font-light text-gray-500">
            Local time
          </h3>
          <p>{currentTime}</p>
        </span>
      </div>
      <div className="flex items-end gap-4">
        <span className="flex flex-col gap-4">
          <h3 className="m-0 cursor-text p-0.5 text-[1em] font-light text-gray-500">
            Socials
          </h3>
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
        </span>
        <Magnetic>
          <Link
            target="_blank"
            href="https://www.linkedin.com/in/arnaud-guilhamat"
            className="hover group"
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
    </footer>
  );
}
