import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

const MarginWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: ClassNameValue;
}) => {
  return (
    <div
      className={cn(
        "m-6 lg:m-10 flex flex-col items-center text-center",
        className
      )}
    >
      {children}
    </div>
  );
};
export default MarginWrapper;
