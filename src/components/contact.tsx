import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import { useEffect, useRef } from "react";

export function Contact() {

  const divRefs = [
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    useRef<HTMLDivElement | null>(null),
    // Adicione quantas referências de divs você precisar
  ];

  const animations = [
    'animate__fadeInLeft',
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
      id="contact"
      className=" relative w-full h-screen flex flex-col items-center justify-center  border-b border-b-color-600 gap-10">
      <p className="text-6xl font-bold">
        Contato
      </p>
      <div 
        ref={divRefs[1]}
        className="border-2 border-color-700 rounded-md w-[17.5rem] h-auto py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors">
        <a
          className="flex gap-2 items-center justify-center py-1"
          href="https://www.linkedin.com/in/brianrangel" target="_blank">
          <LinkedinLogo
            size={35}
            weight="fill" />
          <p className="font-bold text-xl">Linkedin</p>
        </a>
      </div>
      <div 
        ref={divRefs[2]}
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors">
        <a
          className="flex justify-center items-center gap-2"
          href="https://www.instagram.com/brianrangel.dev" target="_blank">
          <InstagramLogo
            size={35}
            weight="fill" />
          <p className="font-bold text-xl">Instagram</p>
        </a>
      </div>
      <div 
        ref={divRefs[0]}
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors md:hidden">
        <a
          className="flex justify-center items-center gap-2"
          href="https://www.github.com/xumbreks" target="_blank">
          <GithubLogo
            size={35}
            weight="fill" />
          <p className="font-bold text-xl">Github</p>
        </a>
      </div>
      <span className="text-color-700 font-medium text-sm flex absolute bottom-2 left-1/2  -translate-x-1/2">
        Feito com ❤️ por Brian
      </span>
    </div>
  )
}