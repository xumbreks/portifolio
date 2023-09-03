import html from '../assets/html-icon.png';
import javascript from '../assets/javascript-icon.jpeg';
import react from '../assets/react-icon.png';
import tailwind from '../assets/tailwind-icon.png';
import typescript from '../assets/typescript-icon.jpeg';
import java from '../assets/java.png';

export function About() {
  return (
    <div id="sobre"
      className="flex flex-col items-center justify-center h-screen pt-40 sm:pt-20">
      <p
        className="text-5xl font-bold sm:text-8xl">
        Sobre Mim
      </p>
      <div className='w-full flex justify-center items-center mt-5'>
        <p
          className='max-w-lg px-4 py-2 leading-relaxed text-md sm:text-2xl sm:max-w-3xl font-semibold'
        >
          Desenvolvedor frontend, apaixonado por programação e viagens.
          Proatividade é uma das minhas principais características pessoais que me impulsionam a buscar constantemente
          novos desafios.
          Valorizo acima de tudo minha fé em Deus e família, que são fontes inesgotáveis de inspiração e suporte.
          Com um estilo de vida nômade, busco encontrar a liberdade e a flexibilidade necessárias para explorar o mundo
          enquanto continuo a aprimorar minhas habilidades como profissional.
        </p>
      </div>
      <h1 className="font-bold text-5xl sm:text-8xl mt-5">
        Techs
      </h1>
      <div className='flex gap-4 mt-5 items-center justify-center'>
        <a className='flex flex-col items-center font-semibold gap-2 sm:text-3xl'>
          <img
            className='w-10 h-10 rounded-full sm:w-20 sm:h-20'
            src={html}
            alt="" />
          HTML
        </a>
        <a className='flex flex-col items-center font-semibold gap-2 sm:text-3xl'>
          <img
            className='w-10 h-10 rounded-lg sm:w-20 sm:h-20'
            src={javascript}
            alt="" />
            JavaScript
        </a>
        <a className='flex flex-col items-center font-semibold gap-2 sm:text-3xl'>
          <img
            className='w-10 h-10 rounded-full sm:w-20 sm:h-20'
            src={react}
            alt="" />
            React
        </a>
        <a className='flex flex-col items-center font-semibold gap-2 sm:text-3xl'>
          <img
            className='w-10 h-10 rounded-full sm:w-20 sm:h-20'
            src={tailwind}
            alt="" />
            Tailwind
        </a>
        <a className='flex flex-col items-center font-semibold gap-2 sm:text-3xl'>
          <img
            className='w-10 h-10 rounded-lg sm:w-20 sm:h-20'
            src={typescript}
            alt="" />
            TypeScript
        </a>
        <a className='flex flex-col items-center font-semibold gap-2 sm:text-3xl'>
          <img
            className='w-10 h-10 rounded-lg sm:w-20 sm:h-20'
            src={java}
            alt="" />
            Java
        </a>
      </div>
    </div>
  )
}