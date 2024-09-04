import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
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
    <section
      id="about"
      className="flex flex-col items-center justify-center h-dvh"
    >
      <motion.div
        ref={ref}
        initial={{ x: "-100%" }}
        animate={right}
        className="flex flex-col items-center border border-gray-700 rounded-3xl gap-4 py-4 mx-4"
      >
        <div className="w-full h-auto flex justify-center items-center">
          <p className="max-w-xl h-auto leading-relaxed font-medium text-base px-7 md:text-xl lg:text-2xl">
            Sou um desenvolvedor frontend com habilidades em{" "}
            <span className="text-yellow-500">HTML, CSS, TYPESCRIPT</span> e
            <span className="text-yellow-500"> REACT</span>. Atualmente atuo
            como freelancer desenvolvendo aplicações webs completas, trazendo
            experiências cativantes para os usuários e ambientes intuitivos
          </p>
        </div>
      </motion.div>
      <motion.div
        className="flex gap-6 pt-2"
        ref={ref}
        initial={{ x: "-100%" }}
        animate={right}
      >
        <a
          className="group cursor-pointer"
          href="https://www.linkedin.com/in/brianrangel"
          target="_blank"
        >
          <LinkedinLogo
            weight="fill"
            className="size-7 group-hover:fill-[#0e76a8] transition-colors"
          />
        </a>
        <a
          className="group cursor-pointer"
          href="https://www.instagram.com/brianrangel.dev"
          target="_blank"
        >
          <InstagramLogo
            weight="bold"
            className="size-7 group-hover:bg-insta group-hover:rounded-full"
          />
        </a>
        <a
          className="group cursor-pointer"
          href="https://wa.me/351910025357"
          target="_blank"
        >
          <WhatsappLogo
            weight="fill"
            className="size-7 group-hover:fill-[#25d366]"
          />
        </a>
        <a
          className="group cursor-pointer md:hidden"
          href="https://www.github.com/xumbreks"
          target="_blank"
        >
          <GithubLogo
            weight="fill"
            className="size-7 group-hover:fill-[#171515]"
          />
        </a>
      </motion.div>
    </section>
  );
}
