import devlinks from "../assets/devlinks.png";

export function Projects() {
  return (
    <div
      id="projects"
      className="w-full h-screen flex flex-col items-center justify-center gap-7"
    >
      <p className="font-bold text-4xl md:text-5xl lg:text-6xl">Projetos</p>
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row">
        <div className="w-52 h-40 md:w-80 md:h-60">
          <a href="https://brianrangel.com.br/" target="_blank">
            <img
              className="rounded-3xl border border-color-600 w-full h-full
            hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer"
              src={devlinks}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
