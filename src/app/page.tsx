"use client";

import Header from "@/components/header";
import MarginWrapper from "@/components/margin-wrapper";
import { timelineData } from "@/data/timeline-entry";
import { ArrowRight, Briefcase, Building2, School } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <MarginWrapper>
      <div className="sticky top-0">
        <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] sticky top-0 bg-background">
          <Header />
        </div>

        <div className="w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] flex flex-col items-start justify-start pt-4 ml-4">
          <h3 className="py-2 text-sm font-semibold">Highlights</h3>
          <div className="text-left text-sm w-full">
            <Accordion type="single" className="w-full" defaultValue="0">
              {timelineData.map((entry, index) => (
                <AccordionItem
                  value={index.toString()}
                  key={index}
                  className="py-2"
                >
                  <AccordionTrigger className="flex-row-reverse items-center hover:no-underline hover:cursor-pointer hover:text-foreground/60 py-3">
                    <div className="flex flex-row max-sm:flex-col max-sm:items-start items-center justify-between gap-2 w-full ">
                      <div className="flex flex-row items-center justify-between gap-2 w-full">
                        <p>
                          {entry.title}{" "}
                          {entry.type === "work" && (
                            <span>@ {entry.institutionCompany}</span>
                          )}
                        </p>
                        <p className="text-foreground/50 text-xs max-sm:text-right">
                          {entry.period.includes("Present") ? (
                            <>
                              {entry.period.replace("- Present", "")} -{" "}
                              <Badge
                                className="text-xs bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-50"
                                variant={"secondary"}
                              >
                                Present
                              </Badge>
                            </>
                          ) : (
                            <> {entry.period}</>
                          )}
                        </p>
                      </div>
                    </div>
                    {entry.type === "education" && <School size={16} />}
                    {entry.type === "work" && <Building2 size={16} />}
                    {entry.type === "project" && <Briefcase size={16} />}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground ps-7 pb-2">
                    <p className="max-sm:text-xs">{entry.details}</p>
                    <div className="py-2">
                      {entry.type === "project" &&
                        entry.subProjects.length > 0 && (
                          <Link href={`/project?title=${entry.title}`}>
                            <p className="text-xs group font-semibold flex w-fit flex-row items-center justify-between gap-2 hover:text-foreground/60 hover:cursor-pointer">
                              <span>Read more</span>
                              <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
                            </p>
                          </Link>
                        )}
                      {entry.type === "work" && (
                        <Link
                          href={`/work?company=${entry.institutionCompany}`}
                        >
                          <p className="text-xs group font-semibold flex w-fit flex-row items-center justify-between gap-2 hover:text-foreground/60 hover:cursor-pointer">
                            <span>Read more</span>
                            <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
                          </p>
                        </Link>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </MarginWrapper>
  );
}
