import { FacebookLogo, GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"

export function Contact() {

  return (
    <div id="contato" className="pb-6 mt-10 flex flex-col items-center justify-center gap-10 pt-20 h-screen">
      <p className="text-5xl sm:text-8xl">
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
          className="bg-[#3b5998] rounded-full hover:scale-105 transform transition-all duration-150 ease-in
          dark:text-white p-2"
          href="https://facebook.com/brianrangel.cardososantos"
          target="_blank">
          <FacebookLogo size={60}/>
        </a>
      </div>
    </div>
  )
}