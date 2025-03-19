"use client";

import { ChevronLeft } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { ModeToggle } from "./darkmode-toggle";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <div className="fixed top-0 py-4 bg-background z-40 p-2 max-sm:px-0 w-full">
      <div className="bg-accent/70 rounded-xl p-2 flex flex-row items-center justify-between w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] mx-auto">
        <div>
          {pathname === "/" ? (
            <Link
              href={"/"}
              className="text-sm font-semibold px-2 text-foreground/65 font-serif italic"
            >
              falah.in
            </Link>
          ) : (
            <Button
              size={"sm"}
              variant={"outline"}
              className="rounded-lg border"
              asChild
            >
              <Link href="/">
                <ChevronLeft className="h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Nav;
