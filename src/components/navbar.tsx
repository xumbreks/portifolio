import brian from "@/assets/brian.png"
import { WHATSAPP_LINK } from "@/lib/whatsappButton"
import { Menu, MessageCircle, X } from "lucide-react"
import { useState } from "react"
import { Button } from "./ui/button"

export function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const navItems = [
		{ label: "Início", id: "home" },
		{ label: "Sobre", id: "about" },
		{ label: "Projetos", id: "projects" },
		{ label: "Contato", id: "contact" },
	]

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id)
		if (element) {
			element.scrollIntoView({ behavior: "smooth" })
		}
		setIsMenuOpen(false)
	}

	return (
		<nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/70 backdrop-blur-xl">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="h-16 flex items-center justify-between gap-4">
					{/* Brand */}
					<button
						onClick={() => scrollToSection("home")}
						className="flex items-center gap-3 text-left"
					>
						<img
							src={brian}
							alt="Foto de Brian Cardoso"
							className="w-9 h-9 rounded-full object-cover border border-white/10"
						/>
						<div className="hidden sm:block">
							<p className="text-sm font-semibold leading-none">Brian Cardoso</p>
							<p className="text-xs text-muted-foreground mt-1">Web Systems Developer</p>
						</div>
					</button>

					{/* Desktop nav */}
					<div className="hidden md:flex items-center gap-1">
						{navItems.map((item) => (
							<Button
								key={item.id}
								variant="ghost"
								onClick={() => scrollToSection(item.id)}
								className="text-sm"
							>
								{item.label}
							</Button>
						))}
					</div>

					{/* Desktop CTA */}
					<div className="hidden md:flex items-center">
						<Button asChild>
							<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
								<MessageCircle className="w-4 h-4 mr-2" />
								WhatsApp
							</a>
						</Button>
					</div>

					{/* Mobile menu button */}
					<div className="md:hidden">
						<Button
							variant="ghost"
							onClick={() => setIsMenuOpen((prev) => !prev)}
							className="inline-flex items-center justify-center"
							aria-label="Abrir menu"
						>
							{isMenuOpen ? <X /> : <Menu />}
						</Button>
					</div>
				</div>
			</div>

			{/* Mobile Menu */}
			{isMenuOpen && (
				<div className="md:hidden border-t border-white/10 bg-background/95 backdrop-blur-xl">
					<div className="px-4 py-4 space-y-2">
						{navItems.map((item) => (
							<Button
								key={item.id}
								variant="ghost"
								className="w-full justify-start"
								onClick={() => scrollToSection(item.id)}
							>
								{item.label}
							</Button>
						))}

						<Button asChild className="w-full mt-2">
							<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
								<MessageCircle className="w-4 h-4 mr-2" />
								Falar no WhatsApp
							</a>
						</Button>
					</div>
				</div>
			)}
		</nav>
	)
}