import { useEffect, useRef } from "react";
import brian from "../../assets/brian.png";
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
        transition: { duration: 1.5, type: "spring" },
      });
      down.start({
        y: 0,
        transition: { duration: 1.5, type: "spring" },
      });
    } else {
      right.start({
        x: "-100%",
      });
      down.start({
        y: "-100%",
      });
    }
  }, [isInView]);

  return (
    <div
      id="home"
      className="w-full h-dvh flex flex-col-reverse items-center justify-center md:flex-row md:space-x-10 md:px-10"
    >
      <div className="mt-10 md:mt-0">
        <motion.p
          ref={ref}
          initial={{ x: "-100%" }}
          animate={right}
          className="font-medium text-lg px-5 md:px-0 md:text-2xl lg:text-[2rem] max-w-3xl"
        >
          Olá 🙋🏻‍♂️ ,<br />
          eu sou o Brian Rangel,
          <br />
          um Desenvolvedor Frontend 👨🏻‍💻.
          <br />
          Transformo ideias em experiências digitais cativantes.
        </motion.p>
      </div>

      <motion.img
        className="w-56  rounded-full border border-gray-700 h-auto md:w-[18.75rem] md:h-auto"
        initial={{ y: "-100%" }}
        animate={down}
        src={brian}
        alt="foto brian sorrindo"
      />
    </div>
  );
}
