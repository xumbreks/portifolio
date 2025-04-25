import brian from "../../assets/brian.png";
export function Home() {
	return (
		<section
			id="home"
			className="w-full h-dvh flex flex-col-reverse items-center justify-center md:flex-row md:space-x-10 md:px-10"
		>
			<div className="mt-10 md:mt-0">
				<p className="font-medium text-lg px-5 md:px-0 md:text-2xl lg:text-[2rem] max-w-3xl">
					Olá 🙋🏻‍♂️ ,<br />
					eu sou o Brian Rangel,
					<br />
					um Desenvolvedor Frontend 👨🏻‍💻.
					<br />
					Transformo ideias em experiências digitais cativantes.
				</p>
			</div>
			<div className="w-56 md:w-[18.75rem] border border-gray-700 rounded-full">
				<img src={brian} alt="foto brian sorrindo" />
			</div>
		</section>
	);
}
