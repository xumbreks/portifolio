import { useEffect, useRef } from 'react';
import brian from '../assets/brian.png';
import 'animate.css';

export function Home() {

  const divRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    // Adicione quantas referências de divs você precisar
  ];

  const animations = [
    'animate__fadeInLeft',
    'animate__fadeInRight',
    // Adicione as classes de animação correspondentes às suas divs
  ];

  useEffect(() => {
    const handleScroll = () => {
      divRefs.forEach((ref, index) => checkVisibilityAndAnimate(ref, animations[index]));
    };

    const checkVisibilityAndAnimate = (ref: React.RefObject<HTMLDivElement | null>, animationClass: string) => {
      const element = ref.current;
      if (!element) return;

      const elementRect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (elementRect.top < windowHeight && elementRect.bottom >= 0) {
        // O elemento está visível na janela
        element.classList.add('animate__animated', animationClass);
      } else {
        // O elemento não está visível na janela
        element.classList.remove('animate__animated', animationClass);
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
      id='home'
      className='w-full h-screen flex flex-col-reverse items-center justify-center 
      border-b border-b-color-600 md:flex-row md:space-x-10 md:px-10'>
      <div
        ref={divRefs[0]}
        className='mt-10 md:mt-0'>
        <p className='font-medium text-lg px-5 md:px-0 md:text-[1.5rem] lg:text-[2rem]'>
          Olá 👋🏻 ,<br />
          eu sou o Brian Rangel,<br />
          um Desenvolvedor <span className='text-color-600'>WEB</span>, apaixonado por
          <span className='text-color-600'> Tecnologia.</span>
        </p>
      </div>
      <div 
        ref={divRefs[1]}
        className='w-56 h-auto border-2 border-color-600 rounded-full md:w-[18.75rem] md:h-auto'>
        <img
          src={brian}
          alt="foto brian sorrindo"
        />
      </div>
    </div>
  )
}