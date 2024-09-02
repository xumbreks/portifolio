import "./global.css";
import { Navbar } from "./components/navbar";
import { Home } from "./components/Pages/home";
import { About } from "./components/Pages/about";
import { Projects } from "./components/Pages/projects";
import { Contact } from "./components/Pages/contact";

export function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
