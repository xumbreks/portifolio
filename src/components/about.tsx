export function About() {
  return (
    <>
      <section id="sobre" className="flex justify-center pt-40 sm:pt-20">
        <p className="text-5xl sm:text-8xl">
          Sobre Mim
        </p>
      </section>
      <div className="flex h-screen justify-evenly pt-10">
        <div className="text-lg sm:text-3xl">
          <p className="text-3xl sm:text-6xl">Hard Skills</p>
          <ul className="p-6">
            <li>HTML</li>
            <li>TailwindCSS / CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
          </ul>
        </div>
        <div className="text-lg sm:text-3xl">
          <p className="text-3xl sm:text-6xl">Soft Skills</p>
          <ul className="p-6">
            <li>Proativo</li>
            <li>Extrovertido</li>
            <li>Trabalho em equipe</li>
            <li>Focado</li>
            <li>Curioso</li>
          </ul>
        </div>
      </div>
    </>
  )
}