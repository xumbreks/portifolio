import { GithubLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Contact() {
  return (
    <div
      id="contact"
      className=" relative w-full h-screen flex flex-col items-center justify-center  border-b border-b-color-600 gap-10"
    >
      <p className="text-6xl font-bold">Contato</p>
      <div
        className="border-2 border-color-700 rounded-md w-[17.5rem] h-auto py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors"
      >
        <a
          className="flex gap-2 items-center justify-center py-1"
          href="https://www.linkedin.com/in/brianrangel"
          target="_blank"
        >
          <LinkedinLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Linkedin</p>
        </a>
      </div>
      <div
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors"
      >
        <a
          className="flex justify-center items-center gap-2"
          href="https://www.instagram.com/brianrangel.dev"
          target="_blank"
        >
          <InstagramLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Instagram</p>
        </a>
      </div>
      <div
        className="border-2 border-color-700 rounded-md  w-[17.5rem] h-14 py-1 flex justify-center items-center
      hover:bg-color-800 hover:border-color-600 transition-colors md:hidden"
      >
        <a
          className="flex justify-center items-center gap-2"
          href="https://www.github.com/xumbreks"
          target="_blank"
        >
          <GithubLogo size={35} weight="fill" />
          <p className="font-bold text-xl">Github</p>
        </a>
      </div>
      <span className="text-color-700 font-medium text-sm flex absolute bottom-2 left-1/2  -translate-x-1/2">
        Feito com ❤️ por Brian
      </span>
    </div>
  );
}
