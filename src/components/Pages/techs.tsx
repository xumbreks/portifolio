import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CardTechs } from "@/components/CardTechs";
import html from "../../assets/html.png";
import tailwind from "../../assets/tailwind.png";
import javascript from "../../assets/javascript.png";
import typescript from "../../assets/typescript.png";
import react from "../../assets/react.png";
import node from "../../assets/node.png";

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
        <CarouselContent className="ml-4">
          <CarouselItem className="lg:basis-1/3">
            <CardTechs background="bg-[#ff571a]" title="html" src={html}>
              Linguagem de marcação padrão para criar e estruturar páginas web.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs
              background="bg-[#38bdf8]"
              title="tailwind"
              src={tailwind}
            >
              Framework CSS utilitário que facilita a criação de interfaces
              modernas e responsivas com classes pré-definidas.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs
              background="bg-[#F0DF3B]"
              title="javascript"
              src={javascript}
            >
              Linguagem de programação amplamente utilizada para adicionar
              interatividade e dinamismo às páginas web.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs
              background="bg-[#3178c6]"
              title="typescript"
              src={typescript}
            >
              Superset do JavaScript que adiciona tipagem estática opcional e
              outras funcionalidades para tornar o código mais robusto e
              escalável.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs background="bg-[#149eca]" title="react" src={react}>
              Biblioteca JavaScript de código aberto para criação de interfaces
              de usuário, baseada em componentes, facilitando o desenvolvimento
              de aplicativos web modernos e responsivos.
            </CardTechs>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardTechs background="bg-[#026e00]" title="node" src={node}>
              Ambiente de tempo de execução JavaScript que permite executar
              código JavaScript no lado do servidor, permitindo a construção de
              aplicativos web escaláveis e em tempo real.
            </CardTechs>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="mr-2 bg-transparent" />
        <CarouselPrevious className="ml-2 bg-transparent" />
      </Carousel>
    </div>
  );
}
