import { GithubLogo } from "@phosphor-icons/react";
import { Tabs, TabsList } from "@radix-ui/react-tabs";
import { ItemsNav } from "./NavbarItems/itemsNav";
import { SetStateAction, useState } from "react";

export function Navbar() {
  const [currentTab, setCurrentTab] = useState("home");

  const handleNavItemClick = (value: SetStateAction<string>) => {
    setCurrentTab(value);
    const element = document.getElementById(value as string);
    if (element) {
      element.scrollIntoView();
    }
  };

  return (
    <>
      <nav
        className="flex h-[3.75rem] w-screen items-center justify-center fixed 
      bg-gradient-to-l from-black via-gray-900 to-black z-10
      md:justify-around"
      >
        <Tabs
          value={currentTab}
          onValueChange={setCurrentTab}
          className="hidden md:flex"
        >
          <TabsList className="font-medium font-robotoSlab cursor-pointer md:text-xl lg:text-2xl">
            <ItemsNav
              value="home"
              title="< Brian Rangel /> "
              isSelected={currentTab === "home"}
              onClick={() => handleNavItemClick("home")}
            />
          </TabsList>
        </Tabs>
        <Tabs value={currentTab} onValueChange={setCurrentTab}>
          <TabsList className="flex w-full gap-2 md:gap-7 lg:text-xl">
            <ItemsNav
              value="about"
              title="Sobre"
              isSelected={currentTab === "about"}
              onClick={() => handleNavItemClick("about")}
            />
            <ItemsNav
              value="techs"
              title="Tecnologias"
              isSelected={currentTab === "techs"}
              onClick={() => handleNavItemClick("techs")}
            />
            <ItemsNav
              value="projects"
              title="Projetos"
              isSelected={currentTab === "projects"}
              onClick={() => handleNavItemClick("projects")}
            />
            <ItemsNav
              value="contact"
              title="Contato"
              isSelected={currentTab === "contact"}
              onClick={() => handleNavItemClick("contact")}
            />
          </TabsList>
        </Tabs>
        <a href="https://www.github.com/xumbreks" target="_blank">
          <div className="hidden items-center space-x-1 md:flex">
            <div className="border bg-color-900 border-color-500 rounded-full w-7 h-7 flex items-center justify-center">
              <GithubLogo size={20} />
            </div>
            <p
              className="text-color-500/70 font-medium text-lg underline underline-offset-2
            hover:text-color-500 transition-colors"
            >
              brianrangel
            </p>
          </div>
        </a>
      </nav>
    </>
  );
}
