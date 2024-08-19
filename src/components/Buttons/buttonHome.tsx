import { TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

export interface ButtonHomeProps {
  value: string;
  isSelected?: boolean;
}

export function ButtonHome({ value, isSelected = false }: ButtonHomeProps) {
  return (
    <TabsTrigger value={value}>
      <Home className="text-gray-50 size-7" />
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px right-0 left-0 h-px bg-gray-700"
        />
      )}
    </TabsTrigger>
  );
}
