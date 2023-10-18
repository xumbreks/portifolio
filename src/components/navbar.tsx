import { GithubLogo } from "@phosphor-icons/react";

export function Navbar() {

  return (
    <>
      <nav className="flex h-[3.75rem] w-full items-center justify-center fixed bg-color-800 
      border-b border-b-color-600 z-50 md:justify-around">
        <div className="hidden md:block">
          <a 
            href="#home" 
            className="font-medium font-robotoSlab hover:border-t border-t-color-600
            md:text-xl lg:text-2xl">
            &lt;Brian Rangel/&gt;
          </a>
        </div>
        <div className="flex space-x-[1.875rem] font-medium text-base lg:text-xl">
          <a 
            className="hover:border-t border-t-color-600" 
            href="#about">Sobre</a>
            <a 
            className="hover:border-t border-t-color-600"
            href="#techs">Tecnologias</a>
          <a 
            className="hover:border-t border-t-color-600"
            href="#projects">Projetos</a>
          <a 
            className="hover:border-t border-t-color-600"
            href="#contact">Contato</a>
        </div>
        <a href="https://www.github.com/xumbreks" target="_blank">
          <div className="hidden items-center space-x-1 md:flex">
            <div className="border bg-color-900 border-color-500 rounded-full w-7 h-7 flex items-center justify-center">
              <GithubLogo size={20} />
            </div>
            <p className="text-color-500/70 font-medium text-lg underline underline-offset-2
            hover:text-color-500 transition-colors">
              brianrangel
            </p>
          </div>
        </a>
      </nav>
    </>
  )
}