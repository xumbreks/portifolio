import { motion } from "framer-motion";

export interface NavbarItemsProps {
  title: string;
  isSelected?: boolean;
  onClick?: () => void;
  href?: string;
}

export function NavbarItems({
  title,
  isSelected = false,
  onClick,
  href,
}: NavbarItemsProps) {
  return (
    <a
      href={href}
      className={`relative px-1 font-medium hover:text-gray-200 cursor-pointer ${
        isSelected ? "text-gray-200" : ""
      }`}
      onClick={onClick}
    >
      <span>{title}</span>
      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px right-0 left-0 h-px bg-gray-300"
        />
      )}
    </a>
  );
}
