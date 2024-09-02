import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";

export interface CardProjectsProps {
  src: string;
  href: string;
  href1: string;
  description: string;
  children?: React.ReactNode;
}

export function CardProjects({
  src,
  href,
  href1,
  description,
  children,
}: CardProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      whileHover={{ scale: 1.02, opacity: 0.85 }}
    >
      <Card className="max-w-xs border-gray-700">
        <CardContent className="p-0 h-72">
          <div className="">
            <img src={src} className="p-1" />
          </div>
          <p className="p-4 font-semibold">
            {description}
            {children}
          </p>
        </CardContent>
        <CardFooter className="px-2 flex justify-between">
          <a
            className="border border-gray-400 rounded bg-sky-900 hover:bg-sky-950 transition-colors px-2 py-1 cursor-pointer"
            target="_blank"
            href={href}
          >
            ACESSE AQUI
          </a>
          <a
            className="border border-gray-500 rounded bg-gray-800 hover:bg-gray-900 transition-colors px-3 py-1 cursor-pointer"
            target="_blank"
            href={href1}
          >
            GITHUB
          </a>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
