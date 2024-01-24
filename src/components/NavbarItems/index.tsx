import { TabsTrigger } from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export interface NavbarItemsProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function NavbarItems({
  value,
  title,
  isSelected = false,
}: NavbarItemsProps) {
  return (
    <TabsTrigger
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
