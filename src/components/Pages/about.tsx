import { CheckCircle2, Layers, Rocket, Wrench } from "lucide-react"
import { Card, CardContent } from "../ui/card"

export function About() {
	const strengths = [
		"Transformo processos manuais em fluxos simples dentro de um painel",
		"Crio interfaces pensadas para uso real no celular",
		"Foco em clareza, velocidade e manutenção",
	]

	const capabilities = [
		{
			icon: Layers,
			title: "Plataformas internas",
			text: "Sistemas privados para operação, gestão e acompanhamento diário.",
		},
		{
			icon: Wrench,
			title: "Fluxos operacionais",
			text: "Cadastros, status, filtros, ações rápidas e painéis administrativos.",
		},
		{
			icon: Rocket,
			title: "Entrega prática",
			text: "Soluções diretas ao ponto, com foco no que resolve o problema do cliente.",
		},
	]

	return (
		<section id="about" className="py-20 bg-gray-950/40">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="max-w-3xl">
					<p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
						Sobre
					</p>
					<h2 className="text-3xl md:text-4xl font-bold tracking-tight">
						Eu desenvolvo software com foco em operação real, não só em interface bonita.
					</h2>
					<p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
						Trabalho criando sistemas web sob medida para negócios e organizações que precisam
						organizar processos, reduzir erros e ganhar visão do dia a dia.
					</p>
				</div>

				<div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
					<Card className="border-white/10 bg-background/60 backdrop-blur">
						<CardContent className="p-6">
							<h3 className="text-xl font-semibold mb-4">Como eu trabalho</h3>

							<div className="space-y-3">
								{strengths.map((item) => (
									<div key={item} className="flex items-start gap-3">
										<CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
										<p className="text-muted-foreground">{item}</p>
									</div>
								))}
							</div>

							<div className="mt-6 pt-6 border-t border-white/10">
								<h4 className="font-semibold mb-3">Stack principal</h4>
								<div className="flex flex-wrap gap-2">
									{["React", "TypeScript", "Tailwind", "UI responsiva", "Dashboards", "CRUDs"].map(
										(tech) => (
											<span
												key={tech}
												className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground"
											>
												{tech}
											</span>
										)
									)}
								</div>
							</div>
						</CardContent>
					</Card>

					<div className="space-y-4">
						{capabilities.map((item) => {
							const Icon = item.icon
							return (
								<Card key={item.title} className="border-white/10 bg-background/60 backdrop-blur">
									<CardContent className="p-5">
										<div className="flex items-start gap-4">
											<div className="h-10 w-10 rounded-xl border border-white/10 bg-white/5 grid place-items-center shrink-0">
												<Icon className="h-5 w-5" />
											</div>
											<div>
												<h3 className="font-semibold">{item.title}</h3>
												<p className="text-sm text-muted-foreground mt-1 leading-relaxed">
													{item.text}
												</p>
											</div>
										</div>
									</CardContent>
								</Card>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}