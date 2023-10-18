import brian from '../assets/brian.png';

export function Home() {

  return (
    <div
      id='home'
      className='w-full h-screen flex flex-col-reverse items-center justify-center 
      border-b border-b-color-600 md:flex-row md:space-x-10 md:px-10'>
      <div className='mt-10 md:mt-0'>
        <p className='font-medium text-lg px-5 md:px-0 md:text-[1.5rem] lg:text-[2rem]'>
          Olá 👋🏻 ,<br />
          eu sou o Brian Rangel,<br />
          um Desenvolvedor <span className='text-color-600'>WEB</span>, apaixonado por
          <span className='text-color-600'> Tecnologia.</span>
        </p>
      </div>
      <div className='w-56 h-auto border-2 border-color-600 rounded-full md:w-[18.75rem] md:h-auto
      '>
        <img
          src={brian}
          alt="foto brian sorrindo"
        />
      </div>
    </div>
  )
}