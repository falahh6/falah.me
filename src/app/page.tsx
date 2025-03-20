"use client";

import Header from "@/components/header";
import MarginWrapper from "@/components/margin-wrapper";

import GitHubActivity from "@/components/github-activity";
import { Tabs } from "@/components/ui/tabs";
import { useHash } from "@/hooks/hash";
import { useEffect } from "react";
import { cn } from "@/lib/utils";
import Highlights from "@/components/highlights";

export default function Home() {
  const { hash, setHash } = useHash();

  useEffect(() => {
    if (!window.location.hash) {
      setHash("highlights");
    }
  }, []);

  return (
    <MarginWrapper className="no-scrollbar">
      <div className="mt-14">
        <div className="bg-background z-50 w-full sticky top-[4.5rem] ">
          <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] ">
            <Header />
          </div>
        </div>

        <div className="w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] flex flex-col items-start justify-start pt-4">
          <div className="py-2 text-xs font-semibold">
            <Tabs
              containerClassName="w-full"
              tabClassName="text-xs"
              tabs={[
                { title: "Highlights", value: "0" },
                { title: "Activity", value: "1" },
                // { title: "Contact", value: "3" },
              ]}
            />
          </div>
          {hash?.includes("highlights") && <Highlights />}
          <div className={cn(!hash?.includes("activity") && "hidden")}>
            <GitHubActivity />
          </div>
        </div>
      </div>
    </MarginWrapper>
  );
}
