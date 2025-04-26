import { Github } from "lucide-react";

export function ButtonGithub() {
	return (
		<a
			href="https://github.com/xumbreks"
			target="_blank"
			className="flex gap-1 group"
			rel="noreferrer"
		>
			<div className="border border-gray-50 rounded-full size-7 flex items-center justify-center group-hover:border-yellow-500 transition-colors">
				<Github className="size-5" />
			</div>
			<p className="font-medium text-lg underline underline-offset-2 group-hover:text-gray-200 transition-colors">
				brianrangel
			</p>
		</a>
	);
}
