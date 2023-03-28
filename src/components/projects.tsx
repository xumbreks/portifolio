import capa from '../assets/Capa.jpeg';

export function Projects() {

  return (
    <>
      <section id="projetos" className="flex justify-center pt-40 sm:pt-20">
        <p className="text-5xl sm:text-8xl">
          Projetos
        </p>
      </section>
      <div className="flex flex-col items-center pt-20 gap-10">
        <div className="hover:scale-105 transform transition-all duration-200 ease-in hover:opacity-90">
          <a href="https://devlinks-one.vercel.app" target="_blank">
            <img
              className="max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl rounded-md"
              src={capa}
              alt="Projeto devlinks"/>
          </a>
        </div>
      </div>
    </>
  )
}