import { WHATSAPP_LINK } from "@/lib/whatsappButton"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

export function Contact() {
	return (
		<section id="contact" className="py-20 bg-gray-950/40">
			<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
				<Card className="border-white/10 bg-background/60 backdrop-blur overflow-hidden">
					<CardContent className="p-0">
						<div className="grid lg:grid-cols-[1.05fr_0.95fr]">
							{/* Left content */}
							<div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
								<p className="text-sm uppercase tracking-widest text-muted-foreground mb-3">
									Contato
								</p>

								<h2 className="text-3xl md:text-4xl font-bold tracking-tight">
									Tem um sistema em mente?
								</h2>

								<p className="mt-4 text-muted-foreground text-base md:text-lg leading-relaxed">
									Me chama no WhatsApp e me explica o problema. Eu posso te responder com uma ideia
									de solução e o melhor formato pra construir.
								</p>

								<div className="mt-6 flex flex-wrap gap-2">
									{["Projetos privados", "React + TS + Tailwind", "Foco em operação real"].map(
										(item) => (
											<span
												key={item}
												className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-muted-foreground"
											>
												{item}
											</span>
										)
									)}
								</div>

								<div className="mt-8 space-y-3">
									<Button size="lg" className="w-full sm:w-auto" asChild>
										<a href={WHATSAPP_LINK} target="_blank" rel="noreferrer">
											<MessageCircle className="w-5 h-5 mr-2" />
											Falar no WhatsApp
										</a>
									</Button>

									<div className="flex flex-col sm:flex-row gap-3">
										<Button variant="outline" size="lg" asChild className="sm:flex-1">
											<a href="mailto:brianrangel.dev@gmail.com">
												<Mail className="w-5 h-5 mr-2" />
												Email
											</a>
										</Button>

										<Button variant="outline" size="lg" asChild className="sm:flex-1">
											<a
												href="https://linkedin.com/in/brianrangel"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Linkedin className="w-5 h-5 mr-2" />
												LinkedIn
											</a>
										</Button>

										<Button variant="outline" size="lg" asChild className="sm:flex-1">
											<a
												href="https://github.com/xumbreks"
												target="_blank"
												rel="noopener noreferrer"
											>
												<Github className="w-5 h-5 mr-2" />
												GitHub
											</a>
										</Button>
									</div>
								</div>
							</div>

							{/* Right content */}
							<div className="p-6 sm:p-8">
								<div className="rounded-2xl border border-white/10 bg-white/5 p-5">
									<h3 className="font-semibold text-lg">Como eu posso te ajudar</h3>

									<div className="mt-4 space-y-3 text-sm text-muted-foreground">
										<div className="rounded-xl border border-white/10 bg-background/50 p-4">
											<p className="font-medium text-foreground mb-1">
												Sistemas internos / painéis
											</p>
											<p>
												Controle de processos, cadastros, status, dashboards e gestão operacional.
											</p>
										</div>

										<div className="rounded-xl border border-white/10 bg-background/50 p-4">
											<p className="font-medium text-foreground mb-1">
												Agendamentos e gestão de rotina
											</p>
											<p>
												Fluxos para negócios locais com foco em uso no celular e rapidez na operação.
											</p>
										</div>

										<div className="rounded-xl border border-white/10 bg-background/50 p-4">
											<p className="font-medium text-foreground mb-1">
												Projetos privados
											</p>
											<p>
												Posso apresentar detalhes dos cases e fluxos por WhatsApp, conforme o contexto.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	)
}