import { Github, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
export function Home() {
	const text = {
		greeting: "Olá, Eu sou Brian Rangel",
		subtitle:
			"Um desenvolvedor apaixonado criando experiências digitais incríveis",
		viewWork: "Projetos",
	};
	return (
		<section
			id="home"
			className="min-h-screen flex items-center justify-center pt-16"
		>
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
				<h1 className="text-4xl md:text-6xl py-1 font-bold mb-6  bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent">
					{text.greeting}
				</h1>
				<p className="text-xl md:text-2xl mb-8 text-secondary-foreground">
					{text.subtitle}
				</p>
				<div className="flex justify-center space-x-4 mb-8">
					<a
						href="https://github.com/xumbreks"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="icon">
							<Github className="h-5 w-5" />
						</Button>
					</a>
					<a
						href="https://linkedin.com/in/brianrangel"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="icon">
							<Linkedin className="h-5 w-5" />
						</Button>
					</a>
					<a
						href="https://instagram.com/brianrangel.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button variant="outline" size="icon">
							<Instagram className="h-5 w-5" />
						</Button>
					</a>
				</div>
				<Button
					onClick={() =>
						document
							.getElementById("projects")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					{text.viewWork}
				</Button>
			</div>
		</section>
	);
}
