export const WHATSAPP_LINK =
  `https://wa.me/351910025357?text=${encodeURIComponent(
    "Olá Brian Cardoso! Vi seu portifólio e quero saber mais sobre um sistema parecido com seus projetos."
  )}`

export const getWhatsAppProjectLink = (projectName: string) =>
  `https://wa.me/351910025357?text=${encodeURIComponent(
    `Olá Brian Cardoso! Vi seu portifólio e quero saber mais sobre o projeto: ${projectName}.`
  )}`