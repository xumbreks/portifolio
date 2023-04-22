import capa from '../assets/Capa.jpeg';

export function Projects() {

  return (
    <>
      <section id="projetos" className="flex justify-center pt-40 sm:pt-20">
        <p className="text-5xl sm:text-8xl">
          Projetos
        </p>
      </section>
      <div className="flex flex-col items-center pt-20 gap-10 h-screen">
        <div className="hover:scale-105 transition-all duration-200 ease-in hover:opacity-90">
          <h2 className='flex flex-wrap sm:flex gap-2 font-bold px-1 justify-center'>TECHS -
            <span className='bg-gray-600 rounded-full px-2 dark:bg-gray-300'>HTML</span>
            <span className='bg-gray-600 rounded-full px-2 dark:bg-gray-300'>TaiwindCSS</span>
            <span className='bg-gray-600 rounded-full px-2 dark:bg-gray-300'>JavaScript</span>
            <span className='bg-gray-600 rounded-full px-2 dark:bg-gray-300'>Git</span>
            <span className='bg-gray-600 rounded-full px-2 dark:bg-gray-300'>GitHub</span>
            <span className='bg-gray-600 rounded-full px-2 dark:bg-gray-300'>Figma</span>
          </h2>
          <a href="https://devlinks-one.vercel.app" target="_blank">
            <img
              className="max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-md pt-1"
              src={capa}
              alt="Projeto devlinks" />
          </a>
        </div>
      </div>
    </>
  )
}