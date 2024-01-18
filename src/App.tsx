import { About } from "./components/about";
import { ButtonHome } from "./components/buttonHome";
import { Contact } from "./components/contact";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";
import { Projects } from "./components/projects";
import { Techs } from "./components/techs";
import "./global.css";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Techs />
      <Projects />
      <Contact />
      <ButtonHome />
    </>
  );
}
