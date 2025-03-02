import Header from "@/components/header";
import MarginWrapper from "@/components/margin-wrapper";
import { timelineData } from "@/data/timeline-entry";

export default function Home() {
  return (
    <MarginWrapper>
      <div className="sticky top-0">
        <div className="w-[95vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] pt-4">
          <Header />
        </div>
        <div className="w-[90vw] lg:w-[70vw] xl:w-[60vw] 2xl:w-[40vw] flex items-center justify-start pt-4 ml-4">
          <div className="text-left text-sm w-full">
            {timelineData.map((entry, index) => (
              <div key={index} className="p-2 border-b w-full">
                <p>{entry.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="h-full bg-red-100"></div>
    </MarginWrapper>
  );
}
