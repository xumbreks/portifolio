import brian from "@/assets/brian.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
		setIsMenuOpen(false);
	};

	return (
		<>
			<nav className="sticky top-0 w-full backdrop-blur-md z-50 border-b border-b-gray-400">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<img src={brian} alt="foto de brian sorrindo" className="w-10" />
						</div>

						<div className="flex items-center space-x-4">
							<div className="hidden md:flex items-center space-x-4">
								<Button variant="ghost" onClick={() => scrollToSection("home")}>
									Home
								</Button>
								<Button
									variant="ghost"
									onClick={() => scrollToSection("about")}
								>
									Sobre
								</Button>
								<Button
									variant="ghost"
									onClick={() => scrollToSection("projects")}
								>
									Projetos
								</Button>
								<Button
									variant="ghost"
									onClick={() => scrollToSection("contact")}
								>
									Contato
								</Button>
							</div>
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden flex items-center">
							<Button
								variant="ghost"
								onClick={() => setIsMenuOpen(!isMenuOpen)}
								className="inline-flex items-center justify-center p-2"
							>
								<span className="sr-only">Open main menu</span>
								{isMenuOpen ? <X /> : <Menu />}
							</Button>
						</div>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<div className="md:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b">
							<Button
								variant="ghost"
								className="w-full text-left"
								onClick={() => scrollToSection("home")}
							>
								Home
							</Button>
							<Button
								variant="ghost"
								className="w-full text-left"
								onClick={() => scrollToSection("about")}
							>
								Sobre
							</Button>
							<Button
								variant="ghost"
								className="w-full text-left"
								onClick={() => scrollToSection("projects")}
							>
								Projetos
							</Button>
							<Button
								variant="ghost"
								className="w-full text-left"
								onClick={() => scrollToSection("contact")}
							>
								Contato
							</Button>
						</div>
					</div>
				)}
			</nav>
		</>
	);
}
