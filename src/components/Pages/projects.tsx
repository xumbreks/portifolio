import devlinks from "../../assets/devlinks.png";
import biscoitoDaSorte from "../../assets/biscoitodasorte.png";
import todoReact from "../../assets/todoReact.png";
import nlwexpert from "../../assets/nlw-expert.png";
import { CardProjects } from "../CardProjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { TagsTech } from "../TagsTech";

export function Projects() {
  return (
    <div className="w-full h-dvh flex items-center justify-center">
      <Carousel className="w-full max-w-xs lg:max-w-screen-md">
        <CarouselContent className="flex items-center h-svh">
          <CarouselItem>
            <CardProjects
              src={devlinks}
              href="https://brianrangel.com.br"
              description="Agregador de links para usar como cartão de visitas online."
            >
              <div className="grid grid-cols-2 grid-rows-3 gap-1 text-center lg:flex">
                <TagsTech title="HTML" className="bg-tech-html" />
                <TagsTech title="Tailwind" className="bg-tech-tailwind" />
                <TagsTech title="JavaScript" className="bg-tech-javascript" />
              </div>
            </CardProjects>
          </CarouselItem>
          <CarouselItem>
            <CardProjects
              src={biscoitoDaSorte}
              href="https://biscoitodasorte-two.vercel.app"
              description="Teste a sua sorte e veja o que tem para você hoje."
            >
              <div className="grid grid-cols-2 grid-rows-3 gap-1 text-center lg:flex">
                <TagsTech title="HTML" className="bg-tech-html" />
                <TagsTech title="Tailwind" className="bg-tech-tailwind" />
                <TagsTech title="JavaScript" className="bg-tech-javascript" />
              </div>
            </CardProjects>
          </CarouselItem>
          <CarouselItem>
            <CardProjects
              src={todoReact}
              href="https://to-do-react-kohl.vercel.app"
              description=" Adicione suas tarefas diárias."
            >
              <div className="grid grid-cols-2 grid-rows-3 gap-1 text-center lg:flex">
                <TagsTech title="HTML" className="bg-tech-html" />
                <TagsTech title="Tailwind" className="bg-tech-tailwind" />
                <TagsTech title="TypeScript" className="bg-tech-typescript" />
                <TagsTech title="React" className="bg-tech-react" />
              </div>
            </CardProjects>
          </CarouselItem>
          <CarouselItem>
            <CardProjects
              src={nlwexpert}
              href="https://nlw-expert-kohl.vercel.app"
              description="Adicione tarefas digitando ou falando."
            >
              <div className="grid grid-cols-2 grid-rows-3 gap-1 text-center lg:flex">
                <TagsTech title="HTML" className="bg-tech-html" />
                <TagsTech title="Tailwind" className="bg-tech-tailwind" />
                <TagsTech title="React" className="bg-tech-react" />
                <TagsTech title="TypeScript" className="bg-tech-typescript" />
              </div>
            </CardProjects>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="mr-2 bg-transparent" />
        <CarouselPrevious className="ml-2 bg-transparent" />
      </Carousel>
    </div>
  );
}
