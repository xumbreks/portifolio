import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";

export function Contact() {
	return (
		<section id="contact" className="py-20 bg-gray-950">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-6 md:text-4xl text-center">
					Entre em Contato
				</h2>
				<Card className="mt-8">
					<CardContent className="p-6">
						<p className="text-center text-lg mb-8">
							Estou sempre aberto a novas oportunidades e projetos
							interessantes. Sinta-se à vontade para entrar em contato!
						</p>
						<div className="flex flex-col md:flex-row gap-2 justify-center space-x-4">
							<Button variant="default" size="lg" asChild>
								<a href="mailto:brianrangel.dev@gmail.com">
									<Mail className="w-5 h-5 mr-2" />
									Enviar Email
								</a>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<a
									href="https://github.com/xumbreks"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="w-5 h-5 mr-2" />
									GitHub
								</a>
							</Button>
							<Button variant="outline" size="lg" asChild>
								<a
									href="https://linkedin.com/in/brianrangel"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="w-5 h-5 mr-2" />
									LinkedIn
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
