import { getWhatsAppProjectLink } from "@/lib/whatsappButton"
import { Lock, MessageCircle, Shield } from "lucide-react"
import { ProjectCarousel } from "../project-carousel"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

import igrejaDashboard from "@/assets/projects/igreja-dashboard.png"
import igrejaEventos from "@/assets/projects/igreja-eventos.png"
import igrejaFinanceiro from "@/assets/projects/igreja-financeiro.png"
// IMPORTA TEUS PRINTS (ajusta os nomes conforme salvar)
import igrejaHome from "@/assets/projects/igreja-home.png"

import barbeariaHome from "@/assets/projects/barbearia-home.png"
import barbeariaLogin from "@/assets/projects/barbearia-login.png"

type ProjectImage = {
	src: string
	alt: string
	caption?: string
}

type CaseProject = {
	title: string
	category: string
	oneLiner: string
	context: string
	highlights: string[]
	stack: string[]
	privacyNote: string
	images?: ProjectImage[]
}

export function Projects() {
	const projects: CaseProject[] = [
		{
			title: "Plataforma para Igrejas",
			category: "Plataforma Web / Gestão Interna",
			oneLiner:
				"Eventos, inscrições, amigo secreto e financeiro (dízimos/ofertas/despesas) em um só lugar.",
			context:
				"Sistema privado para centralizar processos da igreja e reduzir organização espalhada em grupos e planilhas.",
			highlights: [
				"Gestão de eventos com publicação e acompanhamento de inscritos",
				"Pedidos de oração e recursos de comunidade",
				"Amigo secreto com fluxo anual centralizado",
				"Financeiro mensal com filtros por mês/ano (entradas e despesas)",
				"Área admin com ações rápidas e visão geral",
			],
			stack: ["React", "TypeScript", "Tailwind"],
			privacyNote: "Projeto privado — detalhes e demonstração sob solicitação no WhatsApp.",
			images: [
				{
					src: igrejaHome,
					alt: "Tela inicial da plataforma da igreja",
					caption: "Página inicial pública com acesso a eventos, pedidos de oração e comunidade.",
				},
				{
					src: igrejaDashboard,
					alt: "Dashboard administrativo da plataforma da igreja",
					caption: "Dashboard admin com visão rápida e atalhos de módulos.",
				},
				{
					src: igrejaEventos,
					alt: "Gestão de eventos da plataforma da igreja",
					caption: "Criação e gerenciamento de eventos com ações administrativas.",
				},
				{
					src: igrejaFinanceiro,
					alt: "Módulo financeiro da plataforma da igreja",
					caption: "Controle de dízimos, ofertas e despesas por período.",
				},
			],
		},
		{
			title: "Sistema de Agendamento para Barbearias",
			category: "SaaS / Operação Mobile",
			oneLiner:
				"Agendamento com painel do estabelecimento, status e gestão de serviços/horários.",
			context:
				"Sistema privado focado no uso diário pelo celular para reduzir conflitos de agenda e facilitar o atendimento.",
			highlights: [
				"Painel com indicadores (total, finalizados, pendentes)",
				"Fluxo de agendamentos pendentes por status",
				"Cadastro de serviços e horários de trabalho",
				"Acesso por estabelecimento e área administrativa",
			],
			stack: ["React", "TypeScript", "Tailwind"],
			privacyNote: "Projeto privado — demo disponível sob solicitação no WhatsApp.",
			images: [
				{
					src: barbeariaLogin,
					alt: "Tela de login do sistema de barbearia",
					caption: "Acesso do estabelecimento com interface mobile-first.",
				},
				{
					src: barbeariaHome,
					alt: "Tela inicial do sistema de barbearia",
					caption: "Painel com indicadores e navegação por agendamentos, serviços e horários.",
				},
			],
		},
		{
			title: "Sistema de Apontamentos para Lavanderias",
			category: "Sistema Interno / Operacional",
			oneLiner:
				"Controle de entradas, status do processo e entregas com histórico e busca.",
			context:
				"Sistema privado para organização operacional e rastreio das etapas do serviço até a entrega.",
			highlights: [
				"Registro de pedidos com cliente, itens, observações e valor",
				"Controle por etapas (recebido → processo → pronto → entregue)",
				"Histórico e busca rápida",
				"Painel com visão de pendências",
			],
			stack: ["React", "TypeScript", "Tailwind"],
			privacyNote:
				"Projeto privado — sem prints por privacidade do cliente. Posso mostrar fluxo com dados fictícios no WhatsApp.",
		},
	]

	return (
		<section id="projects" className="py-20">
			<div className="section-container">
				<div className="max-w-3xl">
					<p className="text-sm uppercase tracking-widest text-white/55 mb-3">Projetos</p>
					<h2 className="section-title">
						Cases reais com foco em operação, organização e gestão.
					</h2>
					<p className="mt-4 section-subtitle">
						A maior parte dos meus trabalhos é privada. Por isso eu apresento os projetos como
						cases: contexto, o que foi entregue e como isso ajuda na rotina do cliente.
					</p>
				</div>

				<div className="mt-10 space-y-6">
					{projects.map((project) => (
						<Card
							key={project.title}
							className="border-white/10 bg-white/5 backdrop-blur hover:border-white/20 transition-colors"
						>
							<CardContent className="p-5 sm:p-6">
								<div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
									{/* Conteúdo */}
									<div>
										<div className="flex flex-wrap items-center gap-2 mb-3">
											<span className="muted-chip">{project.category}</span>
											<span className="inline-flex items-center gap-1 muted-chip">
												<Lock className="w-3.5 h-3.5" />
												Privado
											</span>
										</div>

										<h3 className="text-xl md:text-2xl font-semibold tracking-tight">
											{project.title}
										</h3>

										<p className="mt-3 text-white/90 leading-relaxed">{project.oneLiner}</p>

										<p className="mt-3 text-sm md:text-base text-white/65 leading-relaxed">
											{project.context}
										</p>

										<div className="mt-5">
											<h4 className="text-sm font-semibold mb-2">O que foi entregue</h4>
											<ul className="space-y-2">
												{project.highlights.map((item) => (
													<li
														key={item}
														className="text-sm text-white/65 leading-relaxed flex items-start gap-2"
													>
														<span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70 shrink-0" />
														{item}
													</li>
												))}
											</ul>
										</div>

										<div className="mt-5 flex flex-wrap gap-2">
											{project.stack.map((tech) => (
												<span key={tech} className="muted-chip">
													{tech}
												</span>
											))}
										</div>
									</div>

									{/* Lateral */}
									<div className="space-y-4">
										<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
											<div className="flex items-center gap-2 mb-2">
												<Shield className="w-4 h-4" />
												<p className="font-medium text-sm">Projeto privado</p>
											</div>
											<p className="text-sm text-white/65 leading-relaxed">{project.privacyNote}</p>
										</div>

										{project.images?.length ? (
											<ProjectCarousel slides={project.images} />
										) : (
											<div className="rounded-2xl border border-dashed border-white/15 bg-white/5 p-4 text-sm text-white/60 leading-relaxed">
												Sem prints públicos por privacidade do cliente.
											</div>
										)}

										<Button className="w-full" asChild>
											<a
												href={getWhatsAppProjectLink(project.title)}
												target="_blank"
												rel="noreferrer"
											>
												<MessageCircle className="w-4 h-4 mr-2" />
												Pedir detalhes no WhatsApp
											</a>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}