import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardTechs } from "@/components/CardTechs";
import html from "../../assets/html.webp";
import tailwind from "../../assets/tailwind.webp";
import javascript from "../../assets/javascript.webp";
import typescript from "../../assets/typescript.webp";
import react from "../../assets/react.webp";
import node from "../../assets/node.webp";

export function Techs() {
  return (
    <div
      id="techs"
      className="h-screen flex flex-col items-center justify-center gap-2"
    >
      <Carousel
        className="w-full max-w-xs md:max-w-screen-sm lg:max-w-screen-lg"
        opts={{ loop: true }}
      >
        <CarouselContent className="flex items-center h-screen ml-4">
          <CarouselItem className="lg:basis-1/3">
            <CardTechs className="bg-tech-html" title="html" src={html}>
              Linguagem de marcação padrão para criar e estruturar páginas web.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs
              className="bg-tech-tailwind"
              title="tailwind"
              src={tailwind}
            >
              Framework CSS utilitário que facilita a criação de interfaces
              modernas e responsivas com classes pré-definidas.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs
              className="bg-tech-javascript"
              title="javascript"
              src={javascript}
            >
              Linguagem de programação amplamente utilizada para adicionar
              interatividade e dinamismo às páginas web.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs
              className="bg-tech-typescript"
              title="typescript"
              src={typescript}
            >
              Superset do JavaScript que adiciona tipagem estática opcional e
              outras funcionalidades para tornar o código mais robusto e
              escalável.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs className="bg-tech-react" title="react" src={react}>
              Biblioteca JavaScript de código aberto para criação de interfaces
              de usuário, baseada em componentes, facilitando o desenvolvimento
              de aplicativos web modernos e responsivos.
            </CardTechs>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="mr-2 bg-transparent" />
        <CarouselPrevious className="ml-2 bg-transparent" />
      </Carousel>
    </div>
  );
}
