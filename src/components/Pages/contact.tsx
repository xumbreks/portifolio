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
      className=" relative w-full h-screen flex flex-col items-center justify-center gap-10"
    >
      <p className="text-6xl font-bold">Contato</p>
      <motion.div
        ref={ref}
        initial={{ y: "-100%" }}
        animate={up}
        className="border-2 border-color-700 rounded-md w-[17.5rem] h-auto py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors"
      >
        <a
          className="flex gap-2 items-center justify-center py-1"
          href="https://www.linkedin.com/in/brianrangel"
          target="_blank"
        >
          <LinkedinLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Linkedin</p>
        </a>
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={left}
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors"
      >
        <a
          className="flex justify-center items-center gap-2"
          href="https://www.instagram.com/brianrangel.dev"
          target="_blank"
        >
          <InstagramLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Instagram</p>
        </a>
      </motion.div>
      <motion.div
        initial={{ y: "100%" }}
        animate={down}
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors"
      >
        <a
          className="flex justify-center items-center gap-2"
          href="https://wa.me/351910025357"
          target="_blank"
        >
          <WhatsappLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Whatsapp</p>
        </a>
      </motion.div>
      <motion.div
        initial={{ x: "-100%" }}
        animate={left}
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors md:hidden"
      >
        <a
          className="flex justify-center items-center gap-2"
          href="https://www.github.com/xumbreks"
          target="_blank"
        >
          <GithubLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Github</p>
        </a>
      </motion.div>
      <span className="text-color-700 font-medium text-sm flex absolute bottom-2 left-1/2  -translate-x-1/2">
        Feito com ❤️ por Brian
      </span>
    </div>
  );
}
