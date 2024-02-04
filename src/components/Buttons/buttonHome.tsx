import { House } from "@phosphor-icons/react";
import { TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface ButtonHomeProps {
  value: string;
  isSelected?: boolean;
}

export function ButtonHome({ value, isSelected = false }: ButtonHomeProps) {
  return (
    <TabsTrigger value={value}>
      <House size={30} />
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px right-0 left-0 h-0.5 bg-color-600"
        />
      )}
    </TabsTrigger>
  );
}
