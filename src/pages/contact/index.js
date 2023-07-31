import "../../pages.css";
import { Input } from "antd";

const ContactPage = () => {
  const { TextArea } = Input;
  return (
    <main className="bg-black flex font-mono min-h-screen flex-col items-left justify-start p-32 gap-20">
      <p>
        {" "}
        <span> - </span>/ contact me
      </p>
      <div className="grid gap-7 text-sm grid-cols-2 grid-rows-2 content-center">
        <div className="">
          <label className="text-gray-500">Enter your name</label>
          <Input className="mt-1 bg-neutral-800 p-3 border-none text-gray-50 font-mono" />
        </div>
        <div className="">
          <label className="text-gray-500">Enter your Email</label>
          <Input
            type="email"
            className="mt-1 bg-neutral-800 p-3 border-none text-gray-50 font-mono"
          />
        </div>
        <div className="col-span-2 mt-[-2.5rem]">
          <label className="text-gray-500">Enter your Message</label>
          <TextArea
            rows={5}
            className="mt-1 bg-neutral-800 p-3 border-none text-gray-50 font-mono"
          />
        </div>
      </div>
    </main>
  );
};
export default ContactPage;
