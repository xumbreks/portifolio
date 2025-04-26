import { Link } from "lucide-react";
import { Button } from "../ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "../ui/card";

export function Projects() {
	const projects = [
		{
			title: "Dev Links",
			description: "Um agregador de links",
			tech: ["Html", "Tailwind", "JS"],
			link: "https://brianrangel.com.br",
		},
		{
			title: "ToDo List",
			description: "Lista de tarefas",
			tech: ["SpeechRecognition API", "TypeScript", "React"],
			link: "https://nlw-expert-kohl.vercel.app",
		},
		{
			title: "Biscoito da sorte",
			description: "Teste a sua sorte",
			tech: ["React", "JavaScript"],
			link: "https://biscoitodasorte-two.vercel.app",
		},
	];

	return (
		<section id="projects" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-3xl font-bold mb-6 md:text-4xl text-center">
					Meus Projetos
				</h2>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<CardHeader>
								<CardTitle>{project.title}</CardTitle>
								<CardDescription>{project.description}</CardDescription>
							</CardHeader>
							<CardContent>
								<div className="flex flex-wrap gap-2 mb-4">
									{project.tech.map((tech, techIndex) => (
										<span
											key={techIndex}
											className="bg-gray-800 px-3 py-1 rounded-full text-sm"
										>
											{tech}
										</span>
									))}
								</div>
								<Button variant="outline" className="w-full" asChild>
									<a
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Link className="w-4 h-4 mr-2" />
										Ver Projeto
									</a>
								</Button>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
