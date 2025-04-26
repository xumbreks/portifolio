import { Card, CardContent } from "../ui/card";

export function About() {
	return (
		<section id="about" className="py-20 bg-gray-950">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-6 md:text-4xl text-center">
					Sobre Mim
				</h2>
				<Card className="mt-8">
					<CardContent className="p-6">
						<p className="text-lg leading-relaxed">
							Sou um desenvolvedor apaixonado com uma sólida experiência em
							desenvolvimento web. Amo criar soluções elegantes para problemas
							complexos e estou sempre aprendendo novas tecnologias para me
							manter atualizado no setor.
						</p>
						<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3 className="font-semibold text-xl mb-4">Habilidades</h3>
								<ul className="space-y-2">
									<li>React & TypeScript</li>
									<li>Node.js</li>
									<li>SwiftUI</li>
									<li>RESTful APIs</li>
								</ul>
							</div>
							<div>
								<h3 className="font-semibold text-xl mb-4">Experiência</h3>
								<ul className="space-y-2">
									<li>3+ Anos em Desenvolvimento Web</li>
									<li>1+ Anos em Liderança de Equipe</li>
									<li>Contribuidor Open Source</li>
								</ul>
							</div>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
