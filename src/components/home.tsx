export function Home () {
  return (
    <div id="inicio" className="flex justify-evenly items-center h-screen pt-20 md:flex-row">
      <div className="p-6 flex items-center">
        <img
          className="max-h-96 rounded-full"
          src="../src/assets/eu.png" 
          alt="foto do brian sorrindo" />
      </div>
      <div className="flex flex-col justify-center md:text-left">
        <span className="text-5xl md:text-8xl">Brian Rangel</span>
        <span className="text-3xl md:text-5xl">Desenvolvedor WEB</span>
      </div>
    </div>
  )
}