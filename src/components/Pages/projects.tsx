import devlinks from "../../assets/devlinks.png";
import { CardProjects } from "../CardProjects";

export function Projects() {
  return (
    <div
      className="w-full h-screen overflow-auto grid grid-cols-2 place-items-center 
      place-content-center gap-2 lg:gap-3 lg:grid-cols-3"
    >
      <CardProjects src={devlinks} href="https://brianrangel.com.br" />
      <CardProjects src={devlinks} href="https://brianrangel.com.br" />
    </div>
  );
}
