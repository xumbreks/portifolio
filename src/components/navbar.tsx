import { GithubLogo } from "@phosphor-icons/react";

export function Navbar() {
  return (
    <>
      <nav
        className="flex h-[3.75rem] w-full items-center justify-center fixed bg-gradient-to-l from-black via-gray-900 to-black 
      border-b border-color-600 z-10 md:justify-around"
      >
        <div className="hidden md:block">
          <a
            href="#home"
            className="font-medium font-robotoSlab cursor-pointer
            md:text-xl lg:text-2xl"
          >
            &lt;Brian Rangel/&gt;
          </a>
        </div>
        <div className="flex gap-2 md:gap-7 font-medium text-base lg:text-xl ">
          <a href="#about">Sobre</a>
          <a href="#techs">Tecnologias</a>
          <a href="#projects">Projetos</a>
          <a href="#contact">Contato</a>
        </div>
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
