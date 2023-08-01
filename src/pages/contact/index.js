import { useState } from "react";
import { Input } from "antd";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Toaster, toast } from "sonner";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";

const supabase = createClient(
  "https://ksgioeqomxilujqhiydn.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtzZ2lvZXFvbXhpbHVqcWhpeWRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4NjcyMjIsImV4cCI6MjAwNjQ0MzIyMn0.e6Iy4F9PY9EmEnUeqa5fgf72sf7JSo7S0ZBfkle-ygQ"
);
const ContactPage = () => {
  const { TextArea } = Input;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const { data, error } = await supabase
        .from("Users")
        .insert([
          { id: Date.now(), name: name, email: email, message: message },
        ])
        .select();

      console.log(data);
      toast.success("Thankyou for contacting, expect the response shortly");
    } catch (error) {
      console.log(error.message);
      toast.error("cannot send a message, Please try again later");
    }
    setName("");
    setEmail("");
    setMessage("");

    setLoading(false);
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Head>
          <title>contact me</title>
        </Head>
        <Toaster position="top-center" />
        <main className="bg-black flex font-mono min-h-screen flex-col items-left justify-start p-24 gap-20 max-md:p-12 max-md:justify-center">
          <p className="flex font-bold">
            {" "}
            <Link href={"/"} className="hover:cursor-pointer">
              {" "}
              <ChevronLeft className="mr-4 hover:brightness-50 transition-all  delay-100 ease-in-out" />{" "}
            </Link>{" "}
            contact me
          </p>
          <form onSubmit={submitHandler}>
            <div className="grid gap-7 text-sm grid-cols-2 grid-rows-2 max-md:flex max-md:flex-col content-center">
              <div className="">
                <label className="text-gray-500">Enter your name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  spellCheck={false}
                  className="mt-1 bg-neutral-800 p-3 max-md:p-2 max-md:text-xs border-none text-gray-50 font-mono"
                />
              </div>
              <div className="">
                <label className="text-gray-500">Enter your Email</label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete={false}
                  required
                  type="email"
                  className="mt-1 max-md:p-2 max-md:text-xs bg-neutral-800 p-3 border-none text-gray-50 font-mono focus:shadow-lg "
                />
              </div>
              <div className="col-span-2 mt-[-2.5rem] max-md:mt-1">
                <label className="text-gray-500">Enter your Message</label>
                <TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  autoSize={false}
                  rows={5}
                  className="mt-1  bg-neutral-800 p-3 border-none max-md:p-2 max-md:text-xs text-gray-50 font-mono "
                />
              </div>
            </div>
            <button className="w-fit text-neutral-300 mt-7 text-sm  py-2 px-4 rounded-lg border-none  bg-neutral-800 hover:text-neutral-200 hover:bg-neutral-700 transition-all delay-100 ease-in-out flex items-center justify-between">
              {loading && <LoadingOutlined className="mr-2" />}
              Submit
            </button>
          </form>
        </main>
      </motion.div>
    </AnimatePresence>
  );
};
export default ContactPage;
