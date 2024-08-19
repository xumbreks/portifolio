import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { NavbarItems } from "./NavbarItems";
import { useState } from "react";
import { Home } from "./Pages/home";
import { About } from "./Pages/about";
import { Techs } from "./Pages/techs";
import { Projects } from "./Pages/projects";
import { Contact } from "./Pages/contact";
import { ButtonHome } from "./Buttons/buttonHome";
import { ButtonGithub } from "./Buttons/buttonGithub";

export function Navbar() {
  const isMobile = window.innerWidth <= 768;
  const [currentTab, setCurrentTab] = useState(
    isMobile ? "buttonHome" : "home"
  );

  return (
    <>
      <div className="flex min-h-[3.75rem] w-full items-center justify-center fixed z-10 md:justify-around">
        <Tabs value={currentTab} onValueChange={setCurrentTab} className="flex">
          <TabsList className="hidden md:flex font-medium font-robotoSlab md:text-xl lg:text-2xl">
            <NavbarItems
              value="home"
              title="< Brian Rangel /> "
              isSelected={currentTab === "home"}
            />
          </TabsList>
          <TabsList className="md:hidden flex mx-2">
            <ButtonHome
              value="buttonHome"
              isSelected={currentTab === "buttonHome"}
            />
          </TabsList>
        </Tabs>
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="flex w-full gap-2 md:gap-7 lg:text-xl">
            <NavbarItems
              value="about"
              title="Sobre"
              isSelected={currentTab === "about"}
            />
            <NavbarItems
              value="techs"
              title="Tecnologias"
              isSelected={currentTab === "techs"}
            />
            <NavbarItems
              value="projects"
              title="Projetos"
              isSelected={currentTab === "projects"}
            />
            <NavbarItems
              value="contact"
              title="Contato"
              isSelected={currentTab === "contact"}
            />
          </TabsList>
        </Tabs>
        <Tabs>
          <TabsList className="hidden md:flex">
            <ButtonGithub />
          </TabsList>
        </Tabs>
      </div>
      {currentTab === "buttonHome" && <Home />}
      {currentTab === "home" && <Home />}
      {currentTab === "about" && <About />}
      {currentTab === "techs" && <Techs />}
      {currentTab === "projects" && <Projects />}
      {currentTab === "contact" && <Contact />}
    </>
  );
}
