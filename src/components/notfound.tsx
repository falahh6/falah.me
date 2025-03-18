"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Home } from "lucide-react";

export const NotFound = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-zinc-600 dark:text-zinc-400">
      <div className="mb-16">
        <div className="flex flex-col items-center mb-8">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-accent">
            <span className="text-2xl font-bold text-card-foreground">404</span>
          </div>
          <p className="text-base mb-2">
            We couldn&apos;t find the project you&apos;re looking for
          </p>
          <p className="text-sm text-center max-w-md">
            The project you requested doesn&apos;t exist or may have been
            removed.
          </p>
        </div>

        <Separator className="my-8" />

        <div className="text-center py-6 px-4 bg-accent rounded-lg mb-8">
          <h3 className="text-base font-medium mb-2">
            Looking for something else?
          </h3>
          <p className="text-sm mb-4">
            Check out our other projects or return to the home page.
          </p>
          <Button
            asChild
            size="sm"
            variant={"outline"}
            className="px-4 text-xs"
          >
            <Link href="/">
              <Home className="mr-1 h-3 w-3" /> Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
