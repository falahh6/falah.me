import Header from "@/components/header";
import MarginWrapper from "@/components/margin-wrapper";
import { Tabs } from "@/components/ui/tabs";

export default function Home() {
  return (
    <MarginWrapper>
      <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] pt-4">
        <Header />
      </div>
      <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] flex items-center justify-center pt-4">
        <Tabs
          containerClassName="justify-start ml-10"
          tabs={[
            {
              title: "Works",
              value: "works",
              content: <div className="text-left space-y-2">ney</div>,
            },
            {
              title: "Skills",
              value: "skills",
              content: <div>Skills</div>,
            },
            {
              title: "Projects",
              value: "projects",
              content: <div>Projects</div>,
            },
            {
              title: "Contact",
              value: "contact",
              content: <div>Contact</div>,
            },
          ]}
        />
      </div>
    </MarginWrapper>
  );
}
