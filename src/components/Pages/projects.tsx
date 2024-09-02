import devlinks from "../../assets/devlinks.svg";
import biscoitoDaSorte from "../../assets/biscoitodasorte.svg";
import todoReact from "../../assets/todoReact.svg";
import nlwexpert from "../../assets/nlw-expert.svg";
import { CardProjects } from "../CardProjects";

export function Projects() {
  return (
    <section
      id="projects"
      className="w-full md:h-dvh flex items-center justify-center"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6">
        <CardProjects
          src={devlinks}
          href="https://brianrangel.com.br"
          href1="https://github.com/xumbreks/devlinks"
          description="Agregador de links para usar como cartão de visita."
        />
        <CardProjects
          src={biscoitoDaSorte}
          href="https://biscoitodasorte-two.vercel.app/"
          href1="https://github.com/xumbreks/biscoitodasorte"
          description="Biscoito da sorte, teste a sua sorte já."
        />
        <CardProjects
          src={todoReact}
          href="https://to-do-react-kohl.vercel.app/"
          href1="https://github.com/xumbreks/ToDo"
          description="ToDo-List, adicione suas tarefas"
        />
        <CardProjects
          src={nlwexpert}
          href="https://nlw-expert-kohl.vercel.app"
          href1="https://github.com/xumbreks/NLW-expert"
          description="ToDo-List, adicione suas tarefas falando ou digitando"
        />
      </div>
    </section>
  );
}
