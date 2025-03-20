import Image from "next/image";
import Link from "next/link";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";
import { Dot, FileText } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex flex-row gap-8 lg:p-4 lg:pt-0 max-sm:px-2">
      <div className="border min-w-[120px] border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black rounded-xl p-2 shadow-sm h-fit hover:-translate-y-1 transition-all">
        <Image
          src={"/falah.jpeg"}
          height={120}
          width={120}
          alt="hey"
          className="rounded-md"
        />
      </div>
      <div className="text-left space-y-1">
        <h1 className="text-xl font-semibold">Mohammed Falah</h1>
        <h3 className="text-sm font-semibold">Frontend Engineer</h3>
        <div className="text-xs md:text-sm text-muted-foreground">
          I&apos;m a BCA graduate working at an AI-based coaching and mentoring
          SaaS startup. I love building real-world solutions, like{" "}
          <Link
            href={"https://droppy.falah.in"}
            target="_blank"
            className="font-semibold p-0.5 px-1 hover:border-b"
          >
            Droppy
          </Link>
          .
        </div>
        <div className="flex flex-row gap-2 items-center pt-2 text-foreground/80">
          <Button
            className="text-xs h-fit p-1 group hover:shadow"
            variant={"outline"}
            size={"sm"}
            asChild
          >
            <Link href={"https://x.com/ffalah_"} target="_blank">
              <Icons.twitter
                style={{
                  height: "10px",
                  width: "10px",
                }}
                className="h-3 w-3 group-hover:animate-pulse"
              />
              <span className="hidden md:block"> @falahh_</span>
            </Link>
          </Button>
          <Button
            className="text-xs h-fit p-1 group hover:shadow"
            variant={"outline"}
            size={"sm"}
            asChild
          >
            <Link href={"https://github.com/falahh6"} target="_blank">
              <Icons.gitHub
                style={{
                  height: "12px",
                  width: "12px",
                }}
                className="h-3 w-3 group-hover:animate-pulse"
              />
              <span className="hidden md:block">@falahh6</span>
            </Link>
          </Button>
          <span>
            <Dot className="h-4 w-4" />
          </span>
          <Button
            className="text-xs h-fit p-1"
            variant={"outline"}
            size={"sm"}
            asChild
          >
            <Link href={"https://github.com/falahh6"} target="_blank">
              <FileText
                style={{
                  height: "12px",
                  width: "12px",
                }}
                className="h-3 w-3"
              />
              <span className="hidden md:block"> Resume</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
