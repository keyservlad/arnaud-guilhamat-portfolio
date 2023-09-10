import Head from "next/head";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" flex min-h-screen flex-col items-center justify-center ">
        <div className="w-40">
          <motion.svg
            id="Layer_2"
            data-name="Layer 2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1354.59 937.57"
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              id="shadows"
              className="fill-[#999]"
              d="m695.93,621.03l10.23,18.39h-54.9l-26.6-48.05,54.82.06h.01l16.45,29.6Zm-68.84,205.93l3.88,7.48c17.51-10.18,34.17-21.68,49.84-34.4l-6.08-11.72c-14.67,14.27-30.61,27.21-47.64,38.65Zm-18.22-35.19l18.22,35.19c17.02-11.44,32.97-24.38,47.64-38.65l-16.36-31.59c-15.39,13.09-31.96,24.84-49.5,35.05ZM450.72,253.72l24.66,45.08c20.79,1.95,40.89,6.06,60.08,12.09l-28.11-51.17c-18.28-3.76-37.22-5.83-56.64-6Zm-55.93,5.2l-26.34,50.72c19.39-6.27,39.76-10.42,60.82-12.19,14.74-27.88,23.67-44.76,23.67-44.76-19.97,0-39.43,2.15-58.15,6.23Zm-150.09,500.01l-16.74,31.66c16.67,15.52,34.98,29.39,54.64,41.33l18.63-35.22c-20.17-10.71-39.11-23.38-56.53-37.76Zm-16.74,31.66l-5.85,11.07c17.8,13.86,36.87,26.2,57.01,36.83l3.47-6.56c-19.66-11.94-37.97-25.81-54.64-41.33Zm-20.29-169.02l-8.35,15.62h52.73c8.53-15.7,17.37-31.93,26.35-48.44l-53.16-.06-17.57,32.88Z"
            />
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: {
                  duration: 2,
                  ease: "easeInOut",
                },
              }}
              id="A"
              className="fill-none stroke-black stroke-[52px]"
              d="m117.88,741.52L476.65,45.43m307.37,689.64L418.89,32.06m-234.9,792.85L476.81,262.07m-49.75,1.77l289.02,558.53"
            />
            <path
              id="white2"
              className="fill-white"
              d="m481.8,310.89l-29.83-57.53-30.37,57.53-24.62-37.44,57.18-26.1,52.08,26.9-24.43,36.65"
            />
            <motion.path
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{
                opacity: 1,
                pathLength: 1,
                transition: {
                  duration: 2,
                  delay: 0.5,
                  ease: "easeInOut",
                },
              }}
              id="G"
              className="fill-none stroke-black stroke-[52px]"
              d="m306.97,153.86c44.47-17.78,92.97-27.56,143.75-27.56,214.8,0,388.92,174.94,388.92,390.74s-174.13,390.74-388.92,390.74S61.8,732.85,61.8,517.04c0-164.79,101.53-305.75,245.18-363.19m35.85,94.61c-107.24,42.68-183.05,147.43-183.05,269.89,0,160.37,130,290.37,290.37,290.37s290.37-130,290.37-290.37-130-290.37-290.37-290.37c-37.91,0-74.12,7.26-107.32,20.48m446.12,78.27h-120.63m168.07,139.49H259.77m477.02,98.8H163.51"
            />
            <path
              id="white"
              className="fill-white"
              d="m655.65,353.4h77.74l55.55,86.26h-100.85l-32.44-86.26Zm57.18,184.74h60.07v-45.32h-63.73l3.67,45.32Zm58.85-184.92l28.31,86.44,69.84-.23-26.7-86.22h-71.46Zm3.07,422.79-619.66-49.33l-1.07,2.06-25.55,48.95-1.27,2.68-.83.4.28,2.97-7.29,9.3,37.14,25.48,3.32-5.39,27.51-51.77-32.25-34.68ZM418.53,101.6h.83l32.52-62.77.53-.9,32.76,63.38,33.9-40.63-2.73-60.67-129.34.91v101.87l31.52-1.18Zm-93.96,126.06c38.62-16.43,81.23-25.56,126.03-25.56,33.01,0,64.84,4.95,94.76,14.13l37.02-39.27c-40.95-15.77-85.53-24.43-132.15-24.43-49.82,0-101,9.66-146.47,30.38,1.08,4.21,20.93,44.7,20.82,44.75Zm388.89,265.02l-523.35.08,3.16,45.36h530.65l-10.46-45.44m-503.82,127.72l-33.17,64.21,30.03,39.64,28.72-55.31-25.58-48.54Zm457.26,48.88l26.39,51.47,36.2-32.97-35.19-67.9-27.4,49.4Zm49.35,95.26l28.11,60.67,37.42-41.87-32.97-58.25-32.56,39.44Z"
            />
            <motion.path
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                  delay: 2,
                },
              }}
              id="Shadow1"
              className="fill-[#999]"
              d="m413.9,299.18l-18.89-26.11,44.08-18.84,1.32-.08.76-.02.55-.02.67-.02.52-.02h.48l.66-.02.97-.02h.46l.65-.02h1.39l.49-.02h3.66l-1.91,3.62-10.2,19.32-10.87,20.59-14.77,1.68Zm-195.4,338.01l-8.69-17.34-8.84,17.34h17.53Zm485.93,2.22l-10.5-20.3-14.22,20.3h24.72Zm-201.62-336.73l3.43-28.44,1.04-2.03-28.38-13.64-9.48-3.67-1.01-.34-1.18-.05-1.93-.11-1.62-.09-2.72-.13-1.98-.08-1.61-.03-1.44-.05-1.76-.05h-1.88l23.09,44.82,15.15,1.82,12.28,2.07Z"
            />
          </motion.svg>
        </div>
      </main>
    </>
  );
}
