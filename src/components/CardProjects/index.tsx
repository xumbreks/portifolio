import { motion, useAnimation, useInView } from "framer-motion";

export interface CardProjectsProps {
  src: string;
  href: string;
}

export function CardProjects({ src, href }: CardProjectsProps) {
  return (
    <div className="w-36 h-28 lg:w-80 lg:h-60">
      <a href={href} target="_blank">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 3 } }}
          whileHover={{ scale: 1.1, type: "spring" }}
          className="rounded-3xl border border-color-500 w-full h-full cursor-pointer"
          src={src}
        />
      </a>
    </div>
  );
}
