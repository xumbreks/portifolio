import { useEffect, useRef } from "react";
import brian from "../assets/brian.png";
import { motion, useAnimation, useInView } from "framer-motion";

export function Home() {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref);

  const down = useAnimation();
  const right = useAnimation();

  useEffect(() => {
    if (isInView) {
      right.start({
        x: 0,
        transition: { duration: 1.8, type: "spring" },
      });
      down.start({
        y: 0,
        transition: { duration: 1.8, type: "spring" },
      });
    } else {
      right.start({
        x: "-100%",
        transition: { duration: 1.8, type: "spring" },
      });
      down.start({
        y: "-100%",
        transition: { duration: 1.8, type: "spring" },
      });
    }
  }, [isInView]);

  return (
    <div
      id="home"
      className="w-full h-screen flex flex-col-reverse items-center justify-center 
     md:flex-row md:space-x-10 md:px-10"
    >
      <div className="mt-10 md:mt-0">
        <motion.p
          ref={ref}
          initial={{ x: "-100%" }}
          animate={right}
          className="font-medium text-lg px-5 md:px-0 md:text-2xl lg:text-[2rem] max-w-3xl"
        >
          Olá 👋🏻 ,<br />
          eu sou o Brian Rangel,
          <br />
          um Desenvolvedor <span className="text-color-600">WEB</span>,
          apaixonado por
          <span className="text-color-600"> Tecnologia.</span>
        </motion.p>
      </div>
      <motion.img
        className="w-56 h-auto border-2 border-color-600 rounded-full md:w-[18.75rem] md:h-auto"
        initial={{ y: "-100%" }}
        animate={down}
        src={brian}
        alt="foto brian sorrindo"
      />
    </div>
  );
}
