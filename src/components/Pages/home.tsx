import { WHATSAPP_LINK } from "@/lib/whatsappButton"
import { motion } from "framer-motion"
import { ArrowRight, Github, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { Button } from "../ui/button"

export function Home() {
	const scrollToProjects = () => {
		document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center pt-20 bg-background overflow-hidden"
		>
			{/* Background decor */}
			<div className="pointer-events-none absolute inset-0">
				<div className="absolute top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
				<div className="absolute bottom-16 right-10 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.05),transparent_55%)]" />
			</div>

			<div className="relative max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
				<div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
					{/* Left */}
					<motion.div
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-muted-foreground mb-5">
							<span className="mr-2 h-2 w-2 rounded-full bg-green-400" />
							Disponível para projetos sob medida
						</div>

						<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
							Eu crio{" "}
							<span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
								sistemas web
							</span>{" "}
							que organizam negócios de verdade.
						</h1>

						<p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
							Projetos privados para clientes: agendamentos, gestão financeira,
							eventos e painéis. Direto, rápido e com foco no que funciona no dia a dia.
						</p>

						<div className="mt-7 flex flex-col sm:flex-row gap-3">
							<Button size="lg" onClick={scrollToProjects} className="font-semibold">
								Ver projetos
								<ArrowRight className="w-4 h-4 ml-2" />
							</Button>

							<Button variant="outline" size="lg" asChild className="font-semibold">
								<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
									<MessageCircle className="w-4 h-4 mr-2" />
									Falar no WhatsApp
								</a>
							</Button>
						</div>

						<div className="mt-6 flex flex-wrap gap-2">
							{["React", "TypeScript", "Tailwind", "UI focada em operação", "Projetos privados"].map(
								(item) => (
									<span
										key={item}
										className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-muted-foreground"
									>
										{item}
									</span>
								)
							)}
						</div>

						<div className="mt-8 flex items-center gap-3">
							<a href="https://github.com/xumbreks" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" size="icon" className="hover:scale-105 transition-transform">
									<Github className="h-5 w-5" />
								</Button>
							</a>
							<a href="https://linkedin.com/in/brianrangel" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" size="icon" className="hover:scale-105 transition-transform">
									<Linkedin className="h-5 w-5" />
								</Button>
							</a>
							<a href="https://instagram.com/brianrangel.dev" target="_blank" rel="noopener noreferrer">
								<Button variant="outline" size="icon" className="hover:scale-105 transition-transform">
									<Instagram className="h-5 w-5" />
								</Button>
							</a>
						</div>
					</motion.div>

					{/* Right card */}
					<motion.div
						initial={{ opacity: 0, y: 28 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.7, delay: 0.1 }}
						className="relative"
					>
						<div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 backdrop-blur">
							<div className="flex items-center justify-between mb-4">
								<div>
									<p className="text-sm text-muted-foreground">Brian Cardoso</p>
									<p className="text-lg font-semibold">Frontend / Web Systems</p>
								</div>
								<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center">
									<span className="text-sm font-bold">BC</span>
								</div>
							</div>

							<div className="space-y-3">
								<div className="rounded-xl border border-white/10 bg-background/60 p-4">
									<p className="text-sm text-muted-foreground">Especialidade</p>
									<p className="font-medium mt-1">Sistemas internos e plataformas privadas</p>
								</div>

								<div className="rounded-xl border border-white/10 bg-background/60 p-4">
									<p className="text-sm text-muted-foreground">Tipos de projeto</p>
									<ul className="mt-2 space-y-1 text-sm">
										<li>• Plataformas para igrejas</li>
										<li>• Agendamento para barbearias</li>
										<li>• Apontamentos para lavanderias</li>
									</ul>
								</div>

								<div className="rounded-xl border border-white/10 bg-background/60 p-4">
									<p className="text-sm text-muted-foreground">Stack</p>
									<p className="font-medium mt-1">React • TypeScript • Tailwind</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}