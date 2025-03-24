"use client";

import Header from "@/components/header";
import MarginWrapper from "@/components/margin-wrapper";

import GitHubActivity from "@/components/github-activity";
import { Tabs } from "@/components/ui/tabs";
import { useHash } from "@/hooks/hash";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import Highlights from "@/components/highlights";
import Contact from "@/components/contact";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const { hash, setHash } = useHash();

  useEffect(() => {
    if (!window.location.hash) {
      setHash("highlights");
    }
  }, []);

  const tabContentVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <MarginWrapper className="no-scrollbar">
          <div className="mt-14 ">
            <div className="bg-background z-50 w-full sticky top-[4.5rem] max-sm:px-10 ">
              <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] ">
                <Header />
              </div>
            </div>

            <div className="w-full max-sm:px-10 lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] flex flex-col items-start justify-start pt-4">
              <div className="py-2 text-xs font-semibold">
                <Tabs
                  containerClassName="w-full"
                  tabClassName="text-xs"
                  tabs={[
                    { title: "Highlights", value: "0" },
                    { title: "Activity", value: "1" },
                    { title: "Contact", value: "3" },
                  ]}
                />
              </div>
              <AnimatePresence mode="wait">
                {hash?.includes("highlights") && (
                  <motion.div
                    key="highlights"
                    variants={tabContentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="w-full"
                  >
                    <Highlights />
                  </motion.div>
                )}

                <motion.div
                  key="activity"
                  variants={tabContentVariants}
                  initial="initial"
                  animate="animate"
                  className={cn(
                    "w-full px-0",
                    !hash?.includes("activity") && "hidden"
                  )}
                >
                  <GitHubActivity />
                </motion.div>

                {hash?.includes("contact") && (
                  <motion.div
                    key="contact"
                    variants={tabContentVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <Contact />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </MarginWrapper>
      </motion.main>
    </AnimatePresence>
  );
}
