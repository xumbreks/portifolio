import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export function Contact() {
  const up = useAnimation();
  const left = useAnimation();
  const down = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      up.start({
        y: 0,
        transition: { duration: 1.5, type: "spring" },
      });
      left.start({
        x: 0,
        transition: { duration: 1.5, type: "spring" },
      });
      down.start({
        y: 0,
        transition: { duration: 1.5, type: "spring" },
      });
    } else {
      up.start({
        y: "-100%",
      });
      left.start({
        x: "-100%",
      });
      down.start({
        y: "100%",
      });
    }
  }, [isInView]);

  return (
    <div
      id="contact"
      className=" relative w-full h-dvh flex flex-col items-center justify-center gap-10"
    >
      <p className="text-6xl font-bold">Contato</p>

      <motion.a
        ref={ref}
        initial={{ y: "-100%" }}
        animate={up}
        className="flex justify-center items-center gap-2 border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1
          hover:bg-color-800 hover:border-color-600 transition-colors"
        href="https://www.linkedin.com/in/brianrangel"
        target="_blank"
      >
        <LinkedinLogo size={35} weight="fill" />
        <p className="font-bold text-xl">Linkedin</p>
      </motion.a>

      <motion.a
        initial={{ x: "-100%" }}
        animate={left}
        className="flex justify-center items-center gap-2 border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1
          hover:bg-color-800 hover:border-color-600 transition-colors"
        href="https://www.instagram.com/brianrangel.dev"
        target="_blank"
      >
        <InstagramLogo size={35} weight="fill" />
        <p className="font-bold text-xl">Instagram</p>
      </motion.a>

      <motion.a
        initial={{ y: "100%" }}
        animate={down}
        className="flex justify-center items-center gap-2 border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1
          hover:bg-color-800 hover:border-color-600 transition-colors"
        href="https://wa.me/351910025357"
        target="_blank"
      >
        <WhatsappLogo size={35} weight="fill" />
        <p className="font-bold text-xl">Whatsapp</p>
      </motion.a>

      <motion.a
        initial={{ x: "-100%" }}
        animate={left}
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
          hover:bg-color-800 hover:border-color-600 transition-colors md:hidden"
        href="https://www.github.com/xumbreks"
        target="_blank"
      >
        <GithubLogo size={35} weight="fill" />
        <p className="font-bold text-xl">Github</p>
      </motion.a>

      <span className="text-color-700 font-medium text-sm flex absolute bottom-2 left-1/2  -translate-x-1/2">
        Feito com ❤️ por Brian
      </span>
    </div>
  );
}
