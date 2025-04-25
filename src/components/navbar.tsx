import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ButtonGithub } from "./Buttons/buttonGithub";
import { NavbarItems } from "./NavbarItems";

export function Navbar() {
	const [selectedItem, setSelectedItem] = useState("< Brian Rangel />");
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		const hash = window.location.hash;
		if (hash && hash !== "#home") {
			setSelectedItem(hash.slice(1));
		}
	}, []);

	return (
		<>
			<nav
				className="flex min-h-[3.75rem] w-full items-center fixed z-10 md:justify-around
      	bg-black/30 backdrop-blur-lg shadow-lg px-4 md:px-8"
			>
				<div className="font-medium font-robotoSlab text-2xl hidden md:block">
					<NavbarItems
						href="#home"
						title="< Brian Rangel />"
						isSelected={selectedItem === "< Brian Rangel />"}
						onClick={() => setSelectedItem("< Brian Rangel />")}
					/>
				</div>
				<div className="flex md:hidden">
					<button type="button" onClick={() => setMenuOpen(!menuOpen)}>
						<AnimatePresence mode="wait" initial={false}>
							{menuOpen ? (
								<motion.div
									key="close"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
								>
									<X size={28} />
								</motion.div>
							) : (
								<motion.div
									key="menu"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.8 }}
								>
									<Menu size={28} />
								</motion.div>
							)}
						</AnimatePresence>
					</button>
				</div>
				<div
					className={`flex ml-2 gap-2 md:gap-7 lg:text-xl ${
						menuOpen ? "flex" : "hidden"
					} md:flex`}
				>
					<NavbarItems
						href="#about"
						title="Sobre"
						isSelected={selectedItem === "Sobre"}
						onClick={() => setSelectedItem("Sobre")}
					/>
					<NavbarItems
						href="#projects"
						title="Projetos"
						isSelected={selectedItem === "Projetos"}
						onClick={() => setSelectedItem("Projetos")}
					/>
					<NavbarItems
						href="#contact"
						title="Contato"
						isSelected={selectedItem === "Contato"}
						onClick={() => setSelectedItem("Contato")}
					/>
				</div>

				<div className="hidden md:block">
					<ButtonGithub />
				</div>
			</nav>
			{menuOpen && (
				<div
					className="fixed inset-0"
					onClick={() => setMenuOpen(false)}
					onKeyDown={(e) => {
						if (e.key === "Enter" || e.key === " ") {
							setMenuOpen(false);
						}
					}}
					role="button"
					tabIndex={0}
				/>
			)}
		</>
	);
}
