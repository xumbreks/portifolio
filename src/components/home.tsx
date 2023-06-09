import eu from '../assets/eu2.png'

export function Home() {

  return (
    <div
      id="inicio"
      className="flex flex-col justify-center items-center h-screen pt-2 space-y-6
      sm:flex-row sm:justify-evenly">
      <div className="px-6 sm:p-6">
        <img
          className="h-72 sm:max-h-96 rounded-full"
          src={eu}
          alt="foto do brian sorrindo" />
      </div>
      <div className="flex flex-col justify-center md:text-left">
        <span className="text-5xl md:text-8xl">Brian Rangel</span>
        <span className="text-3xl md:text-5xl">Desenvolvedor WEB</span>
      </div>
    </div>
  )
}