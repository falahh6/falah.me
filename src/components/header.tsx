import Image from "next/image";
import Link from "next/link";
import { LinkPreview } from "./ui/link-preview";
import { Icons } from "./ui/icons";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="w-full flex flex-row gap-8 lg:p-4  text-zinc-600 dark:text-zinc-400">
      <div className="border min-w-[100px] border-zinc-200 dark:border-zinc-700 bg-white dark:bg-black rounded-xl p-2 shadow-2xl h-fit hover:-translate-y-1 transition-all">
        <Image
          src={"/falah.jpeg"}
          height={100}
          width={100}
          alt="hey"
          className="rounded-md"
        />
      </div>
      <div className="text-left space-y-2">
        <h1 className="text-xl font-semibold">Mohammed Falah</h1>
        <div className=" text-xs md:text-sm">
          I&apos;m a BCA graduate working at an AI-based coaching and mentoring
          SaaS startup. I love building real-world solutions, like{" "}
          <Link
            href={"https://droppy.falah.in"}
            target="_blank"
            className="group mr-1"
          >
            <LinkPreview
              linkTarget="_blank"
              url="https://droppy.falah.in"
              className="border text-xs p-0.5 px-1 rounded-sm font-semibold shadow-sm transition-all duration-150 hover:bg-zinc-200 dark:hover:bg-zinc-800"
            >
              Droppy{"  "}
            </LinkPreview>
          </Link>{" "}
          An apple alternative on browsers for devices on same network.
        </div>
        <div className="flex flex-row gap-2 items-center max-sm:mt-4">
          <Button
            className="text-xs h-fit p-1"
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
                className="h-3 w-3"
              />
              @falahh_
            </Link>
          </Button>
          <Button
            className="text-xs h-fit p-1"
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
                className="h-3 w-3"
              />
              @falahh6
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
