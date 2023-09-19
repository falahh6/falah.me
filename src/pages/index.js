import Link from "next/link";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useContext, useState } from "react";
import { MyContext } from "@/store/context";
const Home = () => {
  const { darkMode, moodSwitchHandler } = useContext(MyContext);

  console.log(darkMode);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Head>
          <title>Mohammed falah</title>
        </Head>
        <main
          className={`bg-${
            darkMode ? "black" : "gray-50"
          } flex font-mono min-h-screen flex-col items-left justify-start p-24 gap-20 max-md:gap-20 max-md:p-12 `}
        >
          <div
            onClick={moodSwitchHandler}
            className={`fixed bg-${
              darkMode ? "white" : "black"
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
              className={`text-xl text-${
                darkMode ? "white" : "gray-800"
              } pb-1 max-md:text-sm font-bold`}
            >
              Mohammed falah
            </h1>
            <p className={`text-gray-${darkMode ? "400" : "500"} text-sm`}>
              Front-end web developer{" "}
              <a
                href="https://drive.google.com/file/d/1pHulW3yEax3_89V7cOktu9ztgHMrjBk2/view?usp=sharing"
                target="_blank"
                className={
                  "bg-red-100 p-1 max-md:text-[8px] max-md:mb-[4px] rounded-md text-black brightness-50" +
                  (!darkMode && "text-red")
                }
              >
                Hire me
              </a>
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
            <p className={`text-gray-${darkMode ? "400" : "500"} text-sm`}>
              I am a Computer Science Graduate, with a passion for building
              projects that address real-world challenges. I find joy in
              creating solutions through programming, much like what{" "}
              <span className="hover:border-b hover:border-solid hover:border-gray-500 pb-1">
                <a href="https://www.codehex.tech">codehex</a>
              </span>{" "}
              represents.
            </p>
          </div>
          <div>
            <h1
              className={`text-${
                darkMode ? "gray-50" : "black"
              } pb-1 max-md:text-sm font-bold`}
            >
              Projects
            </h1>
            <div>
              <div>
                <a
                  href="https://www.codehex.tech"
                  className={`mt-4 p-2 pl-4 ml-[-1rem] max-md:mt-1 text-gray-${
                    darkMode ? "400" : "500"
                  } text-sm hover:${
                    darkMode ? "brightness-50" : "brightness-50"
                  } rounded-lg hover:cursor-pointer block`}
                  target="_blank"
                >
                  <h2 className="pb-1">- codehex</h2>
                  <p>An web based IDE powered by AI.</p>
                </a>
              </div>
              <div>
                <a
                  href="https://nnoteable.netlify.app"
                  className={`mt-4 p-2 pl-4 ml-[-1rem] max-md:mt-1 text-gray-${
                    darkMode ? "400" : "500"
                  } text-sm hover:${
                    darkMode ? "brightness-50" : "brightness-50"
                  } rounded-lg hover:cursor-pointer block`}
                  target="_blank"
                >
                  <h2 className="pb-1">- NoteAble</h2>
                  <p>
                    An web based note taking website with simple and user
                    friendly Interface.
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <h1
              className={`text-${
                darkMode ? "gray-50" : "black"
              } pb-1 max-md:text-sm font-bold`}
            >
              More
            </h1>
            <p className={`text-gray-${darkMode ? "400" : "500"} text-sm`}>
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
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
