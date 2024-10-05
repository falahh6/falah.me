import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

const Project = ({ project, darkMode }) => {
  return (
    <div>
      <div
        className={`mt-4 p-2 pl-4 ml-[-1rem] max-md:mt-1 group ${
          darkMode ? "text-gray-400" : "text-gray-500"
        } text-sm rounded-lg hover:cursor-pointer block`}
      >
        <h2 className="pb-1">
          - {project.name}{" "}
          {project.building && (
            <span
              className={`text-xs text-gray-600 bg-gray-100 px-1 p-0.5 rounded-md ${
                !darkMode && "group-hover:bg-transparent"
              }`}
            >
              Ongoing
            </span>
          )}
        </h2>{" "}
        <p>{project.description}</p>
        <div
          className={`text-xs text-white py-2 rounded-md flex flex-row gap-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <Link
            href={project.github}
            target="_blank"
            className={`p-1 rounded-md ${
              darkMode ? "hover:bg-slate-800" : "hover:bg-slate-200"
            }`}
          >
            {" "}
            <Github
              className={`h-4 w-4  ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } `}
            />{" "}
          </Link>
          <Link
            href={project.link}
            target="_blank"
            className={`p-1 rounded-md ${
              darkMode ? "hover:bg-slate-800" : "hover:bg-slate-200"
            }`}
          >
            {" "}
            <ExternalLink
              className={`h-4 w-4  ${
                darkMode ? "text-gray-400" : "text-gray-500"
              } `}
            />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
