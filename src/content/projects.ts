
export type Project = {
  slug: string
  title: string
  oneLiner: string
  context: string
  highlights: string[]
  stack: string[]
  privacyNote?: string
  images?: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: "plataforma-igrejas",
    title: "Plataforma para Igrejas",
    oneLiner: "Eventos, inscrições, amigo secreto e financeiro (dízimos/ofertas/despesas) em um só lugar.",
    context:
      "Sistema privado para organização interna: tira processos do WhatsApp/planilhas e centraliza tudo num painel simples.",
    highlights: [
      "Gestão de eventos: criar, publicar e acompanhar inscritos",
      "Pedidos de oração e áreas de comunidade",
      "Amigo secreto (fluxo anual) com controle centralizado",
      "Financeiro mensal: entradas e despesas com filtro por mês/ano",
      "Área admin com ações rápidas e visão geral",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    privacyNote: "Projeto privado — imagens e demo disponíveis sob solicitação no WhatsApp.",
  },
  {
    slug: "agendamento-barbearias",
    title: "Sistema de Agendamento para Barbearias",
    oneLiner: "Agenda com painel do estabelecimento, status e gestão de serviços/horários.",
    context:
      "Sistema privado pensado pra operação no celular: ver pendências rápido, organizar horários e reduzir conflitos de agenda.",
    highlights: [
      "Painel com indicadores (total, finalizados, pendentes)",
      "Fluxo de agendamentos pendentes com status",
      "Cadastro de serviços e horários de trabalho",
      "Acesso por estabelecimento e área admin",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    privacyNote: "Projeto privado — demo sob solicitação no WhatsApp.",
  },
  {
    slug: "apontamentos-lavanderias",
    title: "Sistema de Apontamentos para Lavanderias",
    oneLiner: "Controle de entradas, status do processo e entregas com histórico e busca.",
    context:
      "Sistema privado para reduzir erros no operacional e deixar tudo rastreável por etapa (do recebido ao entregue).",
    highlights: [
      "Registro de pedidos (cliente, itens, observações, valor)",
      "Status por etapa (recebido → em processamento → pronto → entregue)",
      "Histórico com busca rápida",
      "Painel com visão do dia e pendentes",
    ],
    stack: ["React", "TypeScript", "Tailwind"],
    privacyNote: "Projeto privado — sem prints por privacidade do cliente. Posso mostrar fluxo e telas com dados fictícios no WhatsApp.",
  },
]