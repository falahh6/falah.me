"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { AtSignIcon, Dot, Loader, Mail, PhoneCall, Send } from "lucide-react";
import { Separator } from "./ui/separator";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { FormEvent, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import Cookie from "js-cookie";

const Contact = () => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sendLoading, setSendLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<null | boolean>(null);

  useEffect(() => {
    const sentEmailCookie = Cookie.get("email_sent");
    console.log("COOKIE : ");
    if (sentEmailCookie) {
      setSuccess(true);
    }
  }, []);

  const sendEmail = async (name: string, email: string, message: string) => {
    try {
      const response = await fetch("/api/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: `${name} <${email}>`,
          message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send email");
      }

      return response.json();
    } catch (error) {
      throw new Error(`Email send failed: ${error}`);
    }
  };

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    if (!message) {
      setErrors((prev) => ({ ...prev, message: "Message is required" }));
      return;
    } else {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
    setSendLoading(true);

    console.log("Form submitted", { name, email, message });

    sendEmail(name, email, message)
      .then((res) => {
        console.log("response : ", res);
        setSuccess(true);

        Cookie.set("email_sent", "1");
      })
      .catch((err) => {
        console.log("error", err);
        toast.error(
          "Error sending the message, Please try again later. Or you can send an email."
        );
      })
      .finally(() => {
        setSendLoading(false);
      });
  };

  return (
    <div className="p-4 mx-auto flex flex-col gap-4 justify-start items-start w-full">
      <div className="text-sm max-sm:text-xs text-left pb-2 w-full">
        <p className="">
          Want to get in touch? Feel free to reach out vai
          <Button
            className="text-xs h-fit p-1 group hover:shadow ml-2"
            variant={"secondary"}
            size={"sm"}
            asChild
          >
            <Link
              href={"mailto:work.falah6@gmail.com"}
              target="_blank"
              className="flex flex-row gap-2 items-center text-foreground/80"
            >
              <Mail
                style={{
                  height: "12px",
                  width: "12px",
                }}
                className="h-3 w-3 group-hover:animate-pulse"
              />
              <span className="hidden md:block">work.falah6@gmail.com</span>
            </Link>
          </Button>
          <Dot className="inline text-foreground/40" />
          <Button
            className="text-xs h-fit p-1 group hover:shadow "
            variant={"secondary"}
            size={"sm"}
          >
            <PhoneCall
              style={{
                height: "12px",
                width: "12px",
              }}
              className="h-3 w-3 group-hover:animate-pulse"
            />
            <span className="hidden md:block">+91 9148747200</span>
          </Button>{" "}
          or use the form below.
        </p>
      </div>
      <Separator />
      <form
        onSubmit={submitHandler}
        className="w-full py-4 space-y-6 text-sm max-sm:text-xs"
      >
        <div className="flex flex-row gap-4">
          <div className="w-full flex flex-col gap-3 items-start max-sm:text-xs">
            <Label htmlFor="name" className="max-sm:text-xs">
              Enter your name
            </Label>
            <div className="relative w-full">
              <Input
                id={"name"}
                name="name"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.length > 0) {
                    setErrors((prev) => ({
                      ...prev,
                      name: "",
                    }));
                  }
                }}
                className={cn("peer w-full max-sm:text-xs")}
                aria-invalid={errors.name.length > 0}
                placeholder="Name"
                type="name"
              />
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 items-start">
            <Label htmlFor="email" className="max-sm:text-xs">
              Enter your email
            </Label>
            <div className="relative w-full max-sm:text-xs">
              <Input
                id={"email"}
                name="email"
                className="peer ps-9 w-full"
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.length > 0) {
                    setErrors((prev) => ({
                      ...prev,
                      email: "",
                    }));
                  }
                }}
                aria-invalid={errors.email.length > 0}
                placeholder="Email"
                type="email"
              />
              <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                <AtSignIcon size={16} aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 ">
          <div className="w-full flex flex-col gap-3 items-start">
            <Label htmlFor="message" className="max-sm:text-xs">
              Enter your message
            </Label>
            <div className="relative w-full max-sm:text-xs">
              <Textarea
                name="message"
                id={"message"}
                onChange={(e) => {
                  const val = e.target.value;
                  if (val.length > 0) {
                    setErrors((prev) => ({
                      ...prev,
                      message: "",
                    }));
                  }
                }}
                aria-invalid={errors.message.length > 0}
                className="bg-transparent dark:bg-transparent max-sm:text-xs"
                placeholder="Leave a Message"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-end">
          {success ? (
            <>
              {success && (
                <div className="w-full bg-green-100 text-green-500 border border-green-300 dark:border-green-300/50 dark:bg-green-900/50 p-2 rounded-lg text-xs font-semibold">
                  Thanks for reaching out, I&pos;ll get back to you soon!
                </div>
              )}
            </>
          ) : (
            <Button
              className="rounded-xl px-4 border group hover:cursor-pointer max-sm:w-full max-sm:text-sm"
              variant={"secondary"}
              type="submit"
              disabled={sendLoading}
            >
              {sendLoading ? (
                <>
                  Sending
                  <Loader className="h-4 w-4 animate-spin" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-all duration-300" />
                </>
              )}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Contact;
