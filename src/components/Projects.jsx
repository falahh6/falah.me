const Project = ({ project, darkMode }) => {
  console.log(project);
  return (
    <div>
      <a
        href={project.link}
        className={`mt-4 p-2 pl-4 ml-[-1rem] max-md:mt-1 group ${
          darkMode ? "text-gray-400" : "text-gray-500"
        } text-sm hover:${
          darkMode ? "brightness-50" : "brightness-50"
        } rounded-lg hover:cursor-pointer block`}
        target="_blank"
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
      </a>
    </div>
  );
};

export default Project;
