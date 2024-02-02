import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export interface CardTechsProps {
  title: string;
  src: string;
  children: string;
  background: string;
}

export function CardTechs({
  background,
  title,
  src,
  children,
}: CardTechsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const effectScale = useAnimation();

  useEffect(() => {
    if (isInView) {
      effectScale.start({
        scale: 1,
        transition: { durantion: 1.5, type: "spring" },
      });
    } else {
      effectScale.start({
        scale: 0.5,
      });
    }
  });

  return (
    <motion.div ref={ref} initial={{ scale: 0.5 }} animate={effectScale}>
      <Card className="max-w-60 h-80 mx-4 border-color-700 bg-gradient-to-l from-black via-gray-900 to-black">
        <CardHeader className={`${background} rounded-t-lg flex items-center`}>
          <CardTitle className="uppercase font-bold">{title}</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <img className="w-8 -translate-y-1/2" src={src} />
          <p>{children}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
