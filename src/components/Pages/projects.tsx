import devlinks from "../../assets/devlinks.png";
import biscoitoDaSorte from "../../assets/biscoitoDaSorte.png";
import { CardProjects } from "../CardProjects";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

export function Projects() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Carousel
        className="w-full max-w-xs md:max-w-screen-sm lg:max-w-screen-lg"
        opts={{ loop: true }}
      >
        <CarouselContent className="flex items-center h-screen">
          <CarouselItem className="lg:basis-1/3">
            <CardProjects src={devlinks} href="https://brianrangel.com.br">
              Agregador de links para usar como cartão de visitas online.
            </CardProjects>
          </CarouselItem>
          <CarouselItem className="lg:basis-1/3">
            <CardProjects
              src={biscoitoDaSorte}
              href="https://biscoitodasorte-two.vercel.app"
            >
              Teste a sua sorte e veja o que tem para você hoje.
            </CardProjects>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="mr-2 bg-transparent" />
        <CarouselPrevious className="ml-2 bg-transparent" />
      </Carousel>
    </div>
  );
}
