import { useEffect, useRef } from 'react';
import devlinks from '../assets/devlinks.jpeg';
import 'animate.css';

export function Projects() {

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const handleScroll = () => {
      if (!section) return;

      const sectionRect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (sectionRect.top < windowHeight && sectionRect.bottom >= 0) {
        // A seção está visível na janela
        section.classList.add('animate__animated', 'animate__fadeInRight');
      } else {
        // A seção não está visível na janela
        section.classList.remove('animate__animated', 'animate__fadeInRight');
      }
    };

    // Adicione um ouvinte de rolagem para verificar a visibilidade
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Verifique a visibilidade inicialmente

    return () => {
      // Remova o ouvinte de rolagem quando o componente for desmontado
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      id='projects'
      className='w-full h-screen flex flex-col items-center justify-center gap-7 border-b border-b-color-600'>
      <p className='font-bold text-4xl md:text-5xl lg:text-6xl'>
        Projetos
      </p>
      <div 
      ref={sectionRef}
      className='flex flex-col items-center justify-center gap-5 md:flex-row'>
        <div className='w-52 h-40 md:w-80 md:h-60'>
          <a 
            href='https://devlinks-one.vercel.app/' target='_blank'>
          <img
            className='rounded-3xl border border-color-600 w-full h-full
            hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer'
            src={devlinks} 
            alt="" />
            </a>
        </div>
        <div className='w-52 h-40 md:w-80 md:h-60 '>
          <img
            className='rounded-3xl border border-color-600 w-full h-full
            hover:scale-110 transform transition-transform duration-300 ease-in-out cursor-pointer' 
            src={devlinks} 
            alt="" />
        </div>
      </div>
    </div>
  )
}