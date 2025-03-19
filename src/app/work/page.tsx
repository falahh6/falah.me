import { ClockArrowUpIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { NotFound } from "@/components/notfound";
import { workInfo } from "@/data/work";
import { Carousel } from "@/components/ui/carousel";

const WorkPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = await searchParams;
  const company = params.company as string;

  if (!company) {
    return <NotFound type="work" />;
  }

  const work = workInfo.find(
    (w) => w.title.toLowerCase() == company.toLowerCase()
  );

  if (!work) {
    return <NotFound type="work" />;
  }

  return (
    <div className="max-w-3xl mx-auto max-sm:px-6 py-4 text-zinc-600 dark:text-zinc-400 mt-12 ">
      {work && (
        <div>
          <div className="flex flex-col items-center my-8 mb-2">
            <h1 className="text-2xl font-medium mb-1">{work.title}</h1>
            <p className="text-sm  text-center max-w-md">{work.description}</p>
          </div>

          <div className="flex justify-center gap-2 mb-8 text-xs">
            <div className="flex items-center gap-1 px-3 py-0.5 my-2">
              <ClockArrowUpIcon className="h-3.5 w-3.5" />{" "}
              {work.period.includes("Present") ? (
                <>
                  {work.period.replace("- Present", "")} -{" "}
                  <Badge
                    className="text-xs bg-green-100 dark:bg-green-900/60 text-green-700 dark:text-green-50"
                    variant={"secondary"}
                  >
                    Present
                  </Badge>
                </>
              ) : (
                <> {work.period}</>
              )}
            </div>
          </div>

          <Separator className="my-8" />

          <div className="mb-8">
            <h2 className="text-base font-semibold mb-4">About</h2>
            <div className="space-y-3 text-sm max-sm:text-xs">
              {work.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          {work.projects.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base font-semibold mb-4">
                Projects I worked on
              </h2>
              <div className="space-y-3 text-sm max-sm:text-xs">
                {work.projects.map((project, index) => (
                  <div key={index} className="space-y-2.5">
                    <h3 className="font-medium">{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs py-0.5 px-2 font-normal border border-accent-foreground/10 text-zinc-600 dark:text-zinc-400"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="my-2">
                      <Carousel screenshots={project.screenshots} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {work.techStack.length > 0 && (
            <div className="mb-8">
              <h2 className="text-base font-semibold mb-4">Technology Stack</h2>
              <div className="flex flex-wrap gap-2">
                {work.techStack.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className="text-xs py-0.5 px-2 font-normal border border-accent-foreground/10 text-zinc-600 dark:text-zinc-400"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default WorkPage;
