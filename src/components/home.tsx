import eu from '../assets/eu.jpeg'

export function Home () {

  return (
    <div id="inicio" className="flex sm:justify-evenly items-center h-screen pt-2">
      <div className="px-6 sm:p-6 flex items-center">
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