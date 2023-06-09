import { GithubLogo, InstagramLogo, LinkedinLogo, WhatsappLogo } from "@phosphor-icons/react"

export function Contact() {

  return (
    <div id="contato" className="pb-6 mt-10 flex flex-col items-center justify-center gap-10 pt-20 h-screen">
      <p className="text-5xl font-bold sm:text-8xl">
        Contato
      </p>
      <div className="flex gap-5">
        <a
          className="bg-[#0e76a8] rounded-full hover:scale-105 transform transition-all duration-150 ease-in
          dark:text-white p-2"
          href="https://linkedin.com/in/brianrangel"
          target="_blank">
          <LinkedinLogo size={60} />
        </a>
        <a
          className="bg-gradient-to-t from-[#4f5bd5] via-[#962fbf] to-[#d62976] rounded-full hover:scale-105 
          transform transition-all duration-150 ease-in dark:text-white p-2"
          href="https://instagram.com/brianrangel.dev"
          target="_blank">
          <InstagramLogo size={60} />
        </a>
        <a
          className="bg-[#171515] rounded-full hover:scale-105 transform transition-all duration-150 ease-in
          dark:text-white p-2"
          href="https://github.com/xumbreks"
          target="_blank">
          <GithubLogo size={60} />
        </a>
        <a
          className="bg-[#25D366] rounded-full hover:scale-105 transform transition-all duration-150 ease-in
          dark:text-white p-2"
          href="https://wa.me/351910025357?text=Olá%20gostaria%20de%20saber%20sobre%20seus%20serviços."
          target="_blank">
          <WhatsappLogo size={60}/>
        </a>
      </div>
    </div>
  )
}