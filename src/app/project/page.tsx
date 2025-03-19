import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { projectData } from "@/data/projects";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import { NotFound } from "@/components/notfound";

const ProjectsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) => {
  const params = await searchParams;
  const projectTitle = params.title as string;

  if (!projectTitle) {
    return <NotFound type="project" />;
  }

  const project = projectData.find(
    (p) => p.title.toLowerCase() === projectTitle.toLowerCase()
  );

  if (!project) {
    return <NotFound type="project" />;
  }

  return (
    <div className="max-w-3xl mx-auto max-sm:px-6 py-4 text-zinc-600 dark:text-zinc-400 mt-20">
      {project && (
        <div className="mb-16">
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full overflow-hidden mb-4 flex items-center justify-center bg-accent">
              {project.logo ? (
                <Image
                  src={project.logo}
                  alt={project.title}
                  width={40}
                  height={40}
                />
              ) : (
                <span className="text-2xl font-bold text-card-foreground">
                  {project.title}
                </span>
              )}
            </div>
            <h1 className="text-2xl font-medium mb-1">{project.title}</h1>
            <p className="text-sm max-sm:text-xs  text-center max-w-md">
              {project.description}
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 text-xs">
            {project.socialLinks && (
              <Link
                href={project.socialLinks.website}
                target="_blank"
                className=" flex items-center gap-1 px-3 py-1 rounded-md border bg-accent hover:bg-accent/60"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                {project.socialLinks.website ?? "".replace("https://", "")}
              </Link>
            )}

            {project.socialLinks.github && (
              <Link
                href={project.socialLinks.github}
                target="_blank"
                className=" flex items-center gap-1 px-3 py-1 rounded-md border bg-accent hover:bg-accent/60"
              >
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                Github
              </Link>
            )}
            {project.socialLinks.producthunt && (
              <Link
                href={project.socialLinks.producthunt}
                target="_blank"
                className=" flex items-center gap-1 px-3 py-1 rounded-md border bg-accent hover:bg-accent/60"
              >
                Producthunt
              </Link>
            )}
          </div>

          <Separator className="my-8" />

          <div className="mb-8">
            <h2 className="text-base font-semibold mb-4">Highlights</h2>
            {project.highlights.map((highlight, index) => (
              <div key={index} className="mb-6 text-sm max-sm:text-xs">
                <div className="flex justify-between items-start mb-2">
                  <span className="font-medium">{highlight.title}</span>
                </div>
                <p className="text-sm max-sm:text-xs">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-8">
            <h2 className="text-base font-semibold mb-4">Technology Stack</h2>
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
          </div>

          {project.slidesData.length > 0 && (
            <div className="mb-10 overflow-clip">
              <h2 className="text-base font-semibold">Screenshots</h2>
              <Carousel screenshots={project.slidesData} />
            </div>
          )}

          <div className="mb-8">
            <h2 className="text-base font-semibold mb-4">About</h2>
            <div className="space-y-3 text-sm max-sm:text-xs">
              {project.about.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="text-center py-6 px-4 bg-accent rounded-lg mb-8">
            <h3 className="text-base font-medium mb-2">
              Ready to get started?
            </h3>
            <p className="text-sm max-sm:text-xs mb-4">
              {project.callToAction.text}
            </p>
            <Button
              asChild
              size="sm"
              variant={"outline"}
              className="px-4 text-xs group"
            >
              <Link target="_blank" href={project.callToAction.buttonLink}>
                {project.callToAction.buttonText}{" "}
                <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-[translate]" />
              </Link>
            </Button>
          </div>

          <footer className="text-center text-xs pt-4 border-t">
            <p>{project.footer}</p>
          </footer>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
