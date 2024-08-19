import { useContext, useState } from "react";
import { Input } from "antd";
import { ChevronLeft, Moon, Sun } from "lucide-react";
import Link from "next/link";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";
import { createClient } from "@supabase/supabase-js";
import { Toaster, toast } from "sonner";
import LoadingOutlined from "@ant-design/icons/lib/icons/LoadingOutlined";
import { MyContext } from "@/store/context";

// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );
const ContactPage = () => {
  const { TextArea } = Input;

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // try {
    //   const { data, error } = await supabase
    //     .from("Users")
    //     .insert([
    //       { id: Date.now(), name: name, email: email, message: message },
    //     ])
    //     .select();

    //   console.log(data);
    //   toast.success("Thankyou for contacting, expect the response shortly");
    // } catch (error) {
    //   console.log(error.message);
    //   toast.error("cannot send a message, Please try again later");
    // }

    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Thankyou for contacting, expect the response shortly");
      setLoading(false);
    }, 3000);
  };

  const { darkMode, moodSwitchHandler } = useContext(MyContext);

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
        <main
          className={`bg-${
            darkMode ? "black" : "gray-50"
          }  flex font-mono min-h-screen flex-col items-left justify-start p-24 gap-20 max-md:p-12 max-md:justify-center`}
        >
          <div
            onClick={moodSwitchHandler}
            className={`fixed bg-${
              darkMode ? "white" : "black"
            } right-8 bottom-8 p-1 rounded-full hover:cursor-pointer`}
          >
            {darkMode ? (
              <Sun size={16} strokeWidth={2} color="black" />
            ) : (
              <Moon color="white" strokeWidth={2} size={16} />
            )}
          </div>
          <p className={`flex text-bold text-${darkMode ? "white" : "black"}`}>
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
                <label className={`text-gray-${darkMode ? "500" : "800"}`}>
                  Enter your name
                </label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  spellCheck={false}
                  className={`mt-1 ${
                    darkMode ? "bg-neutral-800" : "bg-neutral-300"
                  } p-3 max-md:p-2 max-md:text-xs border-none ${
                    darkMode ? "text-gray-50" : "text-neutral-500"
                  } font-mono focus:shadow-lg`}
                />
              </div>
              <div className="">
                <label className={`text-gray-${darkMode ? "500" : "800"}`}>
                  Enter your Email
                </label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  type="email"
                  className={`mt-1 max-md:p-2 max-md:text-xs ${
                    darkMode ? "bg-neutral-800" : "bg-neutral-300"
                  } p-3 border-none ${
                    darkMode ? "text-gray-50" : "text-neutral-500"
                  } font-mono focus:shadow-lg `}
                />
              </div>
              <div className="col-span-2 mt-[-2.5rem] max-md:mt-1">
                <label className={`text-gray-${darkMode ? "500" : "800"}`}>
                  Enter your Message
                </label>
                <TextArea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  autoSize={false}
                  rows={5}
                  className={`mt-1 ${
                    darkMode ? "bg-neutral-800" : "bg-neutral-300"
                  } border-none max-md:p-2 max-md:text-xs ${
                    darkMode ? "text-gray-50" : "text-neutral-500"
                  } font-mono focus:shadow-lg `}
                />
              </div>
            </div>
            <button
              className={`w-fit ${
                darkMode ? "text-neutral-400" : "text-neutral-800"
              } mt-7 text-sm  py-2 px-4 rounded-lg border-none  ${
                darkMode ? "bg-neutral-800" : "bg-neutral-300"
              } hover:text-neutral-200 hover:bg-neutral-700 transition-all delay-100 ease-in-out flex items-center justify-between`}
            >
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
