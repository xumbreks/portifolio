import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function Contact() {
	return (
		<section
			id="contact"
			className="relative w-full h-dvh flex flex-col items-center justify-center gap-10"
		>
			<h1 className="text-6xl font-bold">Contato</h1>
			<form className="space-y-2 w-96">
				<Input
					type="text"
					name="name"
					placeholder="Nome"
					required
					className="bg-transparent w-full"
				/>
				<Input
					type="email"
					name="email"
					placeholder="Email"
					required
					className="bg-transparent w-full"
				/>
				<Textarea
					name="message"
					placeholder="Mensagem"
					required
					className="bg-transparent resize-none w-full"
				/>
				<button
					type="submit"
					className="border rounded px-3 py-2 bg-gray-800 hover:bg-gray-900 transition-colors"
				>
					Enviar
				</button>
			</form>
		</section>
	);
}
