import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "../ui/card";

export interface CardProjectsProps {
  src: string;
  href: string;
  description: string;
  children?: React.ReactNode;
}

export function CardProjects({
  src,
  href,
  description,
  children,
}: CardProjectsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1.2 } }}
      whileHover={{ scale: 1.02, opacity: 0.85 }}
    >
      <Card className="relative lg:w-[95%] mx-4 border-gray-700 bg-gradient-to-l from-black via-gray-900 to-black">
        <CardContent className="p-0 min-h-96 lg:h-[70vh]">
          <div className="w-full flex justify-center bg-gray-800">
            <img src={src} className=" lg:h-[35vh] rounded-t-lg" />
          </div>
          <p className="p-4 font-semibold">
            {description}
            {children}
          </p>
        </CardContent>
        <CardFooter>
          <a
            className="absolute left-4 bottom-2 underline underline-offset-2 text-gray-400 hover:text-gray-500 transition-colors"
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
