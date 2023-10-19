import 'animate.css';
import { useEffect, useRef } from 'react';

export function About() {

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
    <div id="about"
      className="flex flex-col items-center justify-center h-screen border-b border-b-color-600">
      <div 
        ref={sectionRef}
        className="flex flex-col items-center border-2 border-color-600 rounded-3xl gap-4 py-4 mx-4
      bg-color-700/30">
        <p
          className="text-2xl font-bold md:text-3xl lg:text-6xl">
          Sobre Mim
        </p>
        <div className='w-full h-auto flex justify-center items-center'>
          <p
            className='max-w-[51.25rem] h-auto leading-relaxed font-medium text-base px-7 md:text-xl lg:text-2xl'
          >
            Desenvolvedor frontend, apaixonado por programação.<br />
            Proatividade é uma das minhas principais características pessoais que me impulsionam a buscar constantemente
            novos desafios.<br />
            Valorizo acima de tudo minha fé em Deus e família, que são fontes inesgotáveis de inspiração e suporte.<br />
            Com um estilo de vida nômade, busco encontrar a liberdade e a flexibilidade necessárias para explorar
            o mundo enquanto continuo a aprimorar minhas
            habilidades como profissional.
          </p>
        </div>
      </div>
    </div>
  )
}