import { useEffect, useRef } from 'react';
import html from '../assets/html.png';
import java from '../assets/java.png';
import javascript from '../assets/javascript.png';
import node from '../assets/node.png';
import react from '../assets/react.png';
import spring from '../assets/spring.png';
import tailwind from '../assets/tailwind.png';
import typescript from '../assets/typescript.png';
import 'animate.css';

export function Techs() {

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
      id="techs"
      className="w-full h-screen flex flex-col items-center justify-center border-b border-b-color-600">
      <p
        className='font-bold text-4xl md:text-5xl lg:text-6xl'>
        Tecnologias
      </p>
      <div
        ref={sectionRef}
        className="grid grid-cols-3 grid-rows-3 gap-10 mt-10 md:grid-cols-4 md:grid-rows-2">
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={html} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={java} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={javascript} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={node} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={react} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={spring} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={tailwind} alt="" />
        <img
          className='w-10 h-10 md:w-20 md:h-20'
          src={typescript} alt="" />
      </div>
    </div>
  )
}