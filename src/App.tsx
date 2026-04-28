
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail
} from "lucide-react";
import bridclub from "./assets/projects/bridclub.jpeg";
import laundry from "./assets/projects/laundry.jpg";
import logovideira from "./assets/projects/logovideira.png";
import { WHATSAPP_LINK } from "./lib/whatsappButton";

export function App() {
  const projects = [
    {
      id: 1,
      title: "BridClub",
      category: "Full Stack",
      description: "Sistema de Agendamento para Barbearias.",
      image: bridclub,
      size: "large",
      link: "https://bridclub.com/"
    },
    {
      id: 2,
      title: "Plataforma para Igrejas",
      category: "Full Stack",
      description: "Eventos, inscrições, amigo secreto e financeiro em um só lugar.",
      image: logovideira,
      size: "small",
      link: "https://videiraportimao.pt/"
    },
    {
      id: 3,
      title: "Sistema de Apontamentos para Lavanderias",
      category: "full stack",
      description: "Controle de entradas, status do processo e entregas com histórico e busca.",
      image: laundry,
      size: "small",
    },
    // {
    //   id: 4,
    //   title: "Dev Social",
    //   category: "React Native",
    //   description: "Rede social para desenvolvedores compartilharem snippets.",
    //   image: "https://picsum.photos/seed/dev/800/600",
    //   size: "medium",
    // },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div className="min-h-screen bg-bg text-white font-sans selection:bg-accent selection:text-black">
      {/* Atmospheric Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[120px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-2xl tracking-tighter font-bold text-accent italic">BR.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
            <a href="#about" className="hover:text-accent transition-colors">Sobre</a>
            <a href="#projects" className="hover:text-accent transition-colors">Projetos</a>
            <a href="#contact" className="hover:text-accent transition-colors">Contato</a>
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center justify-center gap-2 bg-white text-black px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-blue-600 transition-colors" type="button">
              <span> Contrate-me </span>
              <WhatsappLogo size={20} />
            </button>
          </a>
        </div>
      </nav >

      <main className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.section
          id="about"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mb-32"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-accent" />
            <span className="text-accent text-xs font-bold uppercase tracking-[0.2em]">Desenvolvedor de Software</span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-6xl md:text-9xl font-serif font-normal tracking-tighter leading-[0.9] mb-8"
          >
            Criando <br />
            Experiências <span className="italic text-accent">Digitais</span>.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="max-w-xl text-lg text-white/50 leading-relaxed mb-10"
          >
            Olá, eu sou o Brian. Desenvolvedor focado em criar interfaces de alta performance
            e experiências memoráveis. Especialista em transformar ideias complexas em
            soluções elegantes.
          </motion.p>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://github.com/xumbreks" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-accent hover:text-accent transition-all">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/brianrangel/" target="_blank" rel="noopener noreferrer" className="p-3 border border-white/10 rounded-full hover:border-accent hover:text-accent transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </motion.section>

        {/* Bento Grid Projects */}
        <section id="projects" className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif italic mb-2">Projetos Selecionados</h2>
              <p className="text-white/40">Uma coleção de trabalhos recentes.</p>
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`group relative overflow-hidden border border-white/5 bg-surface/30 backdrop-blur-sm 
                  ${project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''}
                  ${project.size === 'medium' ? 'md:col-span-2' : ''}
                `}
              >
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 left-0 p-8 w-full">
                  <span className="text-[10px] uppercase tracking-widest text-accent font-bold mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-serif mb-2 flex items-center justify-between">
                    {project.title}
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-accent transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </h3>
                  <p className="text-sm text-white/50 line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills / Services */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32 border-t border-white/5 pt-20">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center text-accent">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Desenvolvimento Frontend</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Interfaces responsivas e performáticas utilizando React, Next.js e Tailwind CSS.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">Sistemas Backend</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              APIs robustas e escaláveis com Node.js, Express e bancos de dados modernos.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
              <Globe className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold">UI/UX Design</h3>
            <p className="text-sm text-white/40 leading-relaxed">
              Design focado no usuário, priorizando clareza, estética e funcionalidade.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/5 pt-20 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-serif italic mb-4">Vamos conversar?</h2>
            <p className="text-white/40">Sempre aberto a novos projetos e colaborações.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <a href="mailto:brianrangel.dev@gmail.com" className="text-2xl font-bold hover:text-accent transition-colors">
              <div className="flex items-center gap-2">
                <span>Enviar Email</span>
                <Mail />
              </div>
            </a>
            <div className="flex gap-6 text-sm text-white/40">
              <a href="https://www.instagram.com/brian.rangel/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <InstagramLogo size={25} weight="fill" />
              </a>

              <a href="https://facebook.com/brianrangelcardososantos" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <FacebookLogo size={25} weight="fill" />
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div >
  );
}
