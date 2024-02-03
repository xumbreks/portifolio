import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";

export interface CardProjectsProps {
  src: string;
  children: string;
  href: string;
}

export function CardProjects({ src, children, href }: CardProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      whileHover={{ scale: 1.02, opacity: 0.85 }}
    >
      <Card className="relative w-72 h-80 mx-4 border-color-700 bg-gradient-to-l from-black via-gray-900 to-black">
        <CardContent className="p-0">
          <img src={src} className="w-80 h-40 rounded-t-lg" />
          <p className="p-4 font-semibold">{children}</p>
        </CardContent>
        <CardFooter>
          <a
            className="absolute left-4 bottom-2 underline underline-offset-2 text-zinc-400 hover:text-color-500 transition-colors"
            href={href}
            target="_blank"
          >
            acesse aqui.
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
