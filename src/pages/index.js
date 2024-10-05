"use client";

import Link from "next/link";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useContext } from "react";
import { MyContext } from "@/store/context";
import { projects } from "@/lib/projects";
import Project from "@/components/Projects";

const Home = () => {
  const { darkMode, moodSwitchHandler } = useContext(MyContext);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="bg-black"
      >
        <Head>
          <title>Mohammed Falah - Portfolio</title>
        </Head>
        <main
          className={`${
            darkMode ? "bg-black" : "bg-gray-50"
          } flex font-mono min-h-screen flex-col items-left justify-start p-24 gap-20 max-md:gap-20 max-md:p-12 `}
        >
          <div
            onClick={moodSwitchHandler}
            className={`fixed ${
              darkMode ? "bg-white" : "bg-black"
            } right-8 bottom-8 p-1 rounded-full hover:cursor-pointer`}
          >
            {darkMode ? (
              <Sun size={16} strokeWidth={2} color="black" />
            ) : (
              <Moon color="white" strokeWidth={2} size={16} />
            )}
          </div>
          <div className="flex justify-start flex-col">
            <h1
              className={`text-xl ${
                darkMode ? "text-white" : "text-gray-800"
              } pb-1 max-md:text-sm font-bold`}
            >
              Mohammed falah
            </h1>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              } text-sm`}
            >
              Front-end web developer{" "}
              {/* <a
                href="https://drive.google.com/file/d/15q2Shsx4RMrRNC2q0Gog-6DG_RlY8lgu/view?usp=sharing"
                target="_blank"
                className={
                  "bg-red-100 p-1 max-md:text-[8px] max-md:mb-[4px] rounded-md text-black brightness-50" +
                  (!darkMode && "text-red")
                }
              >
                Hire me
              </a> */}
            </p>
          </div>
          <div className="">
            <h1
              className={`text-${
                darkMode ? "gray-50" : "black"
              } pb-1 max-md:text-sm font-bold`}
            >
              Today
            </h1>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              } text-sm`}
            >
              I am a Computer Applications graduate, currently working at an
              AI-based coaching and mentoring startup. I'm passionate about
              building projects that solve real-world problems and enjoy
              creating impactful solutions through coding—just like my work on{" "}
              <span className="border-b border-solid border-gray-500 pb-">
                <a target="_blank" href="https://nnoteverse.vercel.app/">
                  Noteverse,
                </a>
              </span>{" "}
              a platform for sharing and engaging with notes in real-time.
            </p>
          </div>
          <div>
            <h1
              className={`${
                darkMode ? "text-gray-50" : "text-black"
              } pb-1 max-md:text-sm font-bold`}
            >
              Projects
            </h1>
            <div>
              {projects.map((project, index) => (
                <div key={index}>
                  <Project project={project} darkMode={darkMode} />
                </div>
              ))}
            </div>
          </div>
          <div>
            <h1
              className={`${
                darkMode ? "text-gray-50" : "text-black"
              } pb-1 max-md:text-sm font-bold`}
            >
              More
            </h1>
            <p
              className={`${
                darkMode ? "text-gray-400" : "text-gray-500"
              } text-sm`}
            >
              You can see more of my work on{" "}
              <span className="hover:border-b hover:border-solid hover:border-gray-500 pb-1">
                <a href="https://github.com/falahh6">GitHub</a>
              </span>
              ,{" "}
              <span className="hover:border-b hover:border-solid hover:border-gray-500 pb-1">
                <a href="https://twitter.com/ffalah_">Twitter(x)</a>
              </span>
              ,{" "}
              <span className="hover:border-b hover:border-solid hover:border-gray-500 pb-1">
                <a href="https://www.linkedin.com/in/mohammed-falah-a4a4b0223/">
                  LinkedIn
                </a>
              </span>{" "}
              or you can{" "}
              <Link
                href={"/contact"}
                className="hover:border-b hover:border-solid hover:border-gray-500 pb-1 hover:cursor-pointer"
              >
                Contact me.
              </Link>
            </p>
          </div>
        </main>
      </motion.div>{" "}
    </AnimatePresence>
  );
};

export default Home;
