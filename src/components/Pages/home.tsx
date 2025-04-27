import { motion } from "framer-motion";
import { Github, Instagram, Linkedin } from "lucide-react";
import { Typewriter } from "react-simple-typewriter";
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
			className="min-h-screen flex items-center justify-center pt-16 bg-background"
		>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
			>
				<h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-50 to-gray-400 bg-clip-text text-transparent font-spacegrotesk">
					<Typewriter
						words={[text.greeting]}
						loop={false}
						cursor
						cursorStyle="|"
						typeSpeed={70}
						deleteSpeed={50}
						delaySpeed={1000}
					/>
				</h1>

				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.5 }}
					className="text-xl md:text-2xl mb-8 text-secondary-foreground"
				>
					{text.subtitle}
				</motion.p>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.7 }}
					className="flex justify-center space-x-4 mb-8"
				>
					<a
						href="https://github.com/xumbreks"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							variant="outline"
							size="icon"
							className="hover:scale-110 transition-transform"
						>
							<Github className="h-5 w-5" />
						</Button>
					</a>
					<a
						href="https://linkedin.com/in/brianrangel"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							variant="outline"
							size="icon"
							className="hover:scale-110 transition-transform"
						>
							<Linkedin className="h-5 w-5" />
						</Button>
					</a>
					<a
						href="https://instagram.com/brianrangel.dev"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button
							variant="outline"
							size="icon"
							className="hover:scale-110 transition-transform"
						>
							<Instagram className="h-5 w-5" />
						</Button>
					</a>
				</motion.div>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.9 }}
				>
					<Button
						onClick={() =>
							document
								.getElementById("projects")
								?.scrollIntoView({ behavior: "smooth" })
						}
						className="px-8 py-4 text-lg font-semibold"
					>
						{text.viewWork}
					</Button>
				</motion.div>
			</motion.div>
		</section>
	);
}
