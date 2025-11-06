"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBullseye, FaEye } from "react-icons/fa"; // Ícones para Missão e Visão


type Project = {
  title: string;
  description: string;
};

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Pro Tech Education",
      description:
        "Plataforma dedicada à literacia digital, inovação e empoderamento juvenil, promovendo inclusão e formação tecnológica entre jovens moçambicanos."
    },
    {
      title: "Projeto de Inclusão Acadêmica na FLCS",
      description:
        "Iniciativa voltada a apoiar estudantes com necessidades especiais, combater assédio e reforçar a cultura de empatia e igualdade na universidade."
    },
    {
      title: "Chambal Investments & Service, Lda.",
      description:
        "Empresa de soluções tecnológicas e serviços informáticos, focada em gerar impacto económico e social, democratizando o acesso à tecnologia."
    }
  ];

  return (
    <section className="w-full min-h-[1000px] bg-black text-white flex flex-col items-center justify-center px-4 md:px-0 py-16">

      {/* Nome */}
      <motion.h1 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center leading-tight"
      >
        José Arone Mulate Chambal
      </motion.h1>

      {/* Foto */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 w-40 h-40 md:w-56 md:h-56 rounded-full bg-gray-300 shadow-xl overflow-hidden ring-4 ring-offset-2"
      >
        <div className="relative w-full h-full">
          <Image src="/profile.jpg" alt="José Chambal" fill className="object-cover" />
        </div>
      </motion.div>

      {/* Cargo / Intenção */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg md:text-2xl font-semibold mt-4 text-center"
        style={{ color: 'var(--lead-azul-profundo)' }}
      >
        Futuro Líder em Políticas Públicas & Inclusão Social
      </motion.h2>

      {/* Apresentação resumida */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-gray-300 text-md md:text-lg text-center mt-4 w-[85%] md:w-[55%] leading-relaxed"
      >
        José Arone Mulate Chambal é um jovem líder moçambicano, apaixonado por inclusão, educação e transformação social. Fundador da <strong>Pro Tech Education</strong> e estudante de Ciência Política na Universidade Eduardo Mondlane.
      </motion.p>

      {/* Missão & Visão com ícones */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="flex flex-col md:flex-row gap-6 mt-6 text-center md:text-left justify-center"
      >
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-[280px] flex items-start gap-2"
         style={{ backgroundColor: 'var(--lead-section-bg)' }}>
       <FaBullseye className=" w-7 h-7 text-yellow-300" />
          <div>
            <h3 className="font-semibold text-blue-300 mb-1">Missão</h3>
            <p className="text-gray-300 text-sm">Promover inclusão, empatia e transformação social.</p>
          </div>
        </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-[280px] flex items-start gap-2"
         style={{ backgroundColor: 'var(--lead-section-bg)' }}>
       <FaEye className="w-7 h-7 text-yellow-300"  />
          <div>
            <h3 className="font-semibold text-blue-300 mb-1">Visão</h3>
            <p className="text-gray-300 text-sm">Contribuir para um Moçambique mais justo e equitativo.</p>
          </div>
        </div>
      </motion.div>

      {/* Destaques / Projetos com modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="flex flex-col md:flex-row gap-4 mt-8 text-center"
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            onClick={() => setSelectedProject(project)}
            className="p-4 rounded-lg shadow-md w-[220px] cursor-pointer transition"
            style={{ backgroundColor: 'var(--lead-section-bg)', border: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p className="font-semibold" style={{ color: 'var(--lead-azul-profundo)' }}>{project.title}</p>
          </div>
        ))}
      </motion.div>

      {/* Frase inspiradora */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="italic text-gray-400 text-md md:text-lg text-center mt-10 w-[85%] md:w-[55%]"
      >
        “Enquanto a Medicina salva vidas, a Ciência Política pode salvar sociedades inteiras.”
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="flex gap-4 mt-6 flex-wrap justify-center"
      >
  <a href="#about" className="px-5 py-2 rounded-full font-semibold lead-cta-outline hover:lead-cta" style={{ display: 'inline-block' }}>Sobre mim</a>
  <a href="#mission" className="px-5 py-2 rounded-full font-semibold lead-cta" style={{ display: 'inline-block' }}>Missão & Visão</a>
  <a href="#contact" className="px-5 py-2 rounded-full font-semibold lead-cta-outline" style={{ display: 'inline-block' }}>Contacto</a>
      </motion.div>

      {/* Modal de projeto */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="p-6 rounded-lg shadow-lg max-w-lg w-full relative"
            style={{ backgroundColor: 'var(--lead-section-bg)', border: `1px solid var(--lead-azul-profundo)` }}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white"
            >
              &times;
            </button>
            <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--lead-azul-profundo)' }}>{selectedProject.title}</h3>
            <p className="text-gray-300">{selectedProject.description}</p>
          </motion.div>
        </div>
      )}

    </section>
  );
}
