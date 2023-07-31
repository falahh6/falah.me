import "../../pages.css";
import { Input, Button } from "antd";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {
  const { TextArea } = Input;
  return (
    <main className="bg-black flex font-mono min-h-screen flex-col items-left justify-start p-24 gap-20">
      <p className="flex ">
        {" "}
        <Link href={"/"} className="hover:cursor-pointer">
          {" "}
          <ChevronLeft className="mr-4" />{" "}
        </Link>{" "}
        contact me
      </p>
      <div className="grid gap-7 text-sm grid-cols-2 grid-rows-2 content-center">
        <div className="">
          <label className="text-gray-500">Enter your name</label>
          <Input
            spellCheck={false}
            className="mt-1 bg-neutral-800 p-3 border-none text-gray-50 font-mono"
          />
        </div>
        <div className="">
          <label className="text-gray-500">Enter your Email</label>
          <Input
            type="email"
            className="mt-1 bg-neutral-800 p-3 border-none text-gray-50 font-mono focus:shadow-lg "
          />
        </div>
        <div className="col-span-2 mt-[-2.5rem]">
          <label className="text-gray-500">Enter your Message</label>
          <TextArea
            autoSize={false}
            rows={5}
            className="mt-1 bg-neutral-800 p-3 border-none text-gray-50 font-mono "
          />
        </div>
      </div>
      <Button className="w-fit text-neutral-300 mt-[-3rem] rounded-lg border-none  bg-neutral-800 hover:text-neutral-200">
        Submit
      </Button>
    </main>
  );
};
export default ContactPage;
