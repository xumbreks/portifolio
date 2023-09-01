export function Navbar() {

  function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("dark")
  }

  return (
    <>
      <nav className="flex h-auto sm:h-16 w-full justify-center items-center fixed bg-gray-800 dark:bg-gray-200">
        <div className="w-auto mt-2 sm:flex">
          <div className="flex justify-center items-center gap-2 sm:gap-10">
            <div className="text-lg sm:text-2xl font-bold my-1 sm:my-0 sm:px-2 hover:sm:border-2 border-white 
                            rounded-full 
                            transition-colors
                          dark:hover:border-black">
              <a href="#inicio">
                Inicio
              </a>
            </div>
            <div className="text-lg sm:text-2xl font-bold my-1 sm:my-0 sm:px-2 hover:sm:border-2 border-white 
                            rounded-full
                            transition-colors
                          dark:hover:border-black">
              <a href="#sobre">
                Sobre
              </a>
            </div>
            <div className="text-lg sm:text-2xl font-bold my-1 sm:my-0 sm:px-2 hover:sm:border-2 border-white 
                            rounded-full
                            transition-colors
                          dark:hover:border-black">
              <a href="#projetos">
                Projetos
              </a>
            </div>
            <div className="text-lg sm:text-2xl font-bold my-1 sm:my-0 sm:px-2 hover:sm:border-2 border-white 
                            rounded-full
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
                           dark:bg-[url(../src/assets/sun.svg)] dark:transition dark:transform dark:translate-x-full"/>
              <span className="block w-16 h-6 bg-white bg-opacity-20 border-2 border-white backdrop-blur-sm 
                              rounded-full
                             dark:bg-black dark:bg-opacity-10 dark:border-black"/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}