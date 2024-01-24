import { GithubLogo } from "@phosphor-icons/react";

export function ButtonGithub() {
  return (
    <a
      href="https://github.com/xumbreks"
      target="_blank"
      className="flex gap-1"
    >
      <div className="border bg-color-900 border-color-500 rounded-full w-7 h-7 flex items-center justify-center">
        <GithubLogo size={20} />
      </div>
      <p className="text-color-500/70 font-medium text-lg underline underline-offset-2 hover:text-color-500 transition-colors">
        brianrangel
      </p>
    </a>
  );
}
