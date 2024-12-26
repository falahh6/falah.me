import { MapPin } from "lucide-react";

const Experience = ({ experience, darkMode }) => {
  return (
    <div>
      <div
        className={`mt-4 p-2 pl-4 ml-[-1rem] max-md:mt-1 group ${
          darkMode ? "text-gray-400" : "text-gray-500"
        } text-sm rounded-lg hover:cursor-pointer block`}
      >
        <h2 className="pb-1">
          {experience.company} -{" "}
          <span className="font-bold">{experience.role}</span>{" "}
          {experience.current && (
            <span
              className={`text-xs mb-4 text-gray-600 bg-gray-100 px-1 p-0.5 rounded-md border ${
                !darkMode && "group-hover:bg-transparent"
              }`}
            >
              Present
            </span>
          )}
        </h2>

        <p>{experience.description}</p>
        <div
          className={`text-xs text-white py-2 rounded-md flex flex-row gap-2 ${
            darkMode ? "text-gray-400" : "text-gray-500"
          }`}
        >
          <div
            className={`flex items-center gap-1 p-1 rounded-md ${
              darkMode
                ? "hover:bg-slate-800 text-gray-400"
                : "hover:bg-slate-200 text-gray-500"
            }`}
          >
            <MapPin className={`h-4 w-4  `} />
            <span>{experience.location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
