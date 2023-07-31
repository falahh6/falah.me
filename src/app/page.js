import "./pages/pages.css";

export default function Home() {
  return (
    <main className="bg-black flex font-mono min-h-screen flex-col items-left justify-start p-32 gap-20">
      <div className="flex justify-start flex-col">
        <h1 className="text-xl text-gray-50 pb-1">Mohammed falah</h1>
        <p className="text-gray-400 text-sm">Front-end web developer</p>
      </div>
      <div className="">
        <h1 className="text-gray-50 pb-1">Today</h1>
        <p className="text-gray-400 text-sm">
          I am a Computer Science student at AIMCA, Bhatkal, with a passion for
          building projects that address real-world challenges. I find joy in
          creating solutions through programming, much like what{" "}
          <span className="hover:border-b hover:border-solid hover:border-gray-500 pb-1">
            <a href="https://www.codehex.tech">codehex </a>
          </span>
          represents.
        </p>
      </div>
      <div>
        <h1 className="text-gray-50 pb-1">Projects</h1>
        <div>
          <div>
            <a
              href="https://www.codehex.tech"
              className="mt-4 p-2 pl-4 ml-[-1rem] text-gray-400 text-sm hover:bg-zinc-900 rounded-lg hover:cursor-pointer block"
              target="_blank"
            >
              <h2 className="pb-1">codehex</h2>
              <p>An web based IDE powered by AI.</p>
            </a>
          </div>
          <div>
            <a
              href="https://nnoteable.netlify.app"
              className="mt-4 p-2 pl-4 ml-[-1rem] text-gray-400 text-sm hover:bg-zinc-900 rounded-lg hover:cursor-pointer block"
              target="_blank"
            >
              <h2 className="pb-1">NoteAble</h2>
              <p>
                An web based note taking website with simple and user friendly
                Interface.
              </p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
