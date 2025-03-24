"use client";

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
import Image from "next/image";
import { motion } from "framer-motion";

const accordionVariants = {
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
};

const Highlights = () => {
  return (
    <div className="text-left text-sm w-full px-4 min-w-full">
      <Accordion type="single" className="w-full" defaultValue="0">
        {timelineData.map((entry, index) => (
          <AccordionItem
            value={index.toString()}
            key={index}
            className="py-2 min-w-full"
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
              {entry.logo ? (
                <Image
                  width={20}
                  height={20}
                  src={entry.logo}
                  alt={entry.title}
                  className="h-6 w-6 rounded-full"
                />
              ) : (
                <>
                  {entry.type === "education" && <School size={16} />}
                  {entry.type === "work" && <Building2 size={16} />}
                  {entry.type === "project" && <Briefcase size={16} />}
                </>
              )}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground ps-7 pb-2 ml-2 w-full">
              <motion.div
                variants={accordionVariants}
                initial="closed"
                animate="open"
                exit="closed"
                layout
              >
                <p className="max-sm:text-xs">{entry.details}</p>
                <div className="py-2">
                  {entry.type === "project" && entry.subProjects.length > 0 && (
                    <Link href={`/project?title=${entry.title}`}>
                      <p className="text-xs group font-semibold flex w-fit flex-row items-center justify-between gap-2 hover:text-foreground/60 hover:cursor-pointer">
                        <span>Read more</span>
                        <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
                      </p>
                    </Link>
                  )}
                  {entry.type === "work" && (
                    <Link href={`/work?company=${entry.institutionCompany}`}>
                      <p className="text-xs group font-semibold flex w-fit flex-row items-center justify-between gap-2 hover:text-foreground/60 hover:cursor-pointer">
                        <span>Read more</span>
                        <ArrowRight className="h-4 w-4 transition-all group-hover:translate-x-1" />
                      </p>
                    </Link>
                  )}
                </div>
              </motion.div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Highlights;
