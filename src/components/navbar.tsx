import { useState } from "react";

export function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function toggleMode() {
    const html = document.documentElement

    html.classList.toggle('dark')
  }

  return (
    <>
      <nav className="flex h-16 w-full justify-center items-center fixed">
        <div className="w-full flex justify-center items-center gap-10">
          <div className="text-xl sm:text-2xl font-bold px-2 hover:border-2 border-white rounded-full 
        transition-colors
      dark:hover:border-black">
            <a href="#inicio">
              Inicio
            </a>
          </div>
          <div className="text-xl sm:text-2xl font-bold px-2 hover:border-2 border-white rounded-full
        transition-colors
      dark:hover:border-black">
            <a href="#sobre">
              Sobre
            </a>
          </div>
          <div className="text-xl sm:text-2xl font-bold px-2 hover:border-2 border-white rounded-full
        transition-colors
      dark:hover:border-black">
            <a href="#projetos">
              Projetos
            </a>
          </div>
          <div className="text-xl sm:text-2xl font-bold px-2 hover:border-2 border-white rounded-full
        transition-colors
      dark:hover:border-black">
            <a href='#contato'>
              Contato
            </a>
          </div>
          <div className="relative w-16" onClick={toggleMode}>
            <button
              className="w-8 h-8 bg-white bg-[url(../src/assets/moon.svg)] bg-no-repeat bg-center rounded-[50%] 
            absolute z-[1] top-1/2 transition-all transform -translate-y-1/2
            dark:bg-[url(../src/assets/sun.svg)] dark:transition dark:transform dark:translate-x-full">
            </button>
            <span className="block w-16 h-6 bg-white bg-opacity-20 border-2 border-white backdrop-blur-sm rounded-full
          dark:bg-black dark:bg-opacity-10 dark:border-black">
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}