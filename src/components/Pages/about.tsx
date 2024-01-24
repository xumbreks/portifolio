import { useInView, useAnimation, motion } from "framer-motion";
import { useRef, useEffect } from "react";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  const right = useAnimation();

  useEffect(() => {
    if (isInView) {
      right.start({
        x: 0,
        transition: { duration: 1.5, type: "spring" },
      });
    } else {
      right.start({
        x: "-100%",
      });
    }
  }, [isInView]);

  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center h-screen"
    >
      <motion.div
        ref={ref}
        initial={{ x: "-100%" }}
        animate={right}
        className="flex flex-col items-center border-2 border-color-600 rounded-3xl gap-4 py-4 mx-4
        bg-color-700/30"
      >
        <p className="text-2xl font-bold md:text-3xl lg:text-6xl">Sobre Mim</p>
        <div className="w-full h-auto flex justify-center items-center">
          <p className="max-w-[51.25rem] h-auto leading-relaxed font-medium text-base px-7 md:text-xl lg:text-2xl">
            Desenvolvedor frontend, apaixonado por programação.
            <br />
            Proatividade é uma das minhas principais características pessoais
            que me impulsionam a buscar constantemente novos desafios.
            <br />
            Valorizo acima de tudo minha fé em Deus e família, que são fontes
            inesgotáveis de inspiração e suporte.
            <br />
            Com um estilo de vida nômade, busco encontrar a liberdade e a
            flexibilidade necessárias para explorar o mundo enquanto continuo a
            aprimorar minhas habilidades como profissional.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
