import { TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface ItemsNavProps {
  value: string;
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ItemsNav({
  value,
  title,
  onClick,
  isSelected = false,
}: ItemsNavProps) {
  return (
    <TabsTrigger
      onClick={onClick}
      value={value}
      className="relative px-1 font-medium hover:text-zinc-200 data-[state=active]:text-zinc-200"
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px right-0 left-0 h-0.5 bg-color-500"
        />
      )}
    </TabsTrigger>
  );
}
