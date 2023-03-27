export function Projects() {

  return (
    <>
      <section id="projetos" className="flex justify-center pt-20">
        <p className="text-8xl">
          Projetos
        </p>
      </section>
      <div className="flex flex-col items-center pt-20 gap-10">
        <div className="hover:scale-105 transform transition-all duration-200 ease-in hover:opacity-90">
          <a href="https://devlinks-one.vercel.app" target="_blank">
            <img
              className="max-w-4xl rounded-md"
              src="../src/assets/capa.jpeg"
              alt="Projeto devlinks"/>
          </a>
        </div>
      </div>
    </>
  )
}