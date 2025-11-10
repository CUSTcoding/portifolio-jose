"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaBullseye, FaEye } from "react-icons/fa"; // Ícones para Missão e Visão


type Project = {
  title: string;
  description: string;
  imgp: string;
};

export default function Hero() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "Pro Tech Education",
      description:
        "Plataforma dedicada à literacia digital, inovação e empoderamento juvenil, promovendo inclusão e formação tecnológica entre jovens moçambicanos.",
        imgp: "/img/dd852c18-c364-4d6a-b4d0-c1d03027e087.jpeg",
    },
    {
      title: "Projeto de Inclusão Acadêmica na FLCS",
      description:
        "Iniciativa voltada a apoiar estudantes com necessidades especiais, combater assédio e reforçar a cultura de empatia e igualdade na universidade.",
      imgp: "/img/812031e3-c76d-4e98-bd6c-98cc6b586bbb.jpeg",
    },
    {
      title: "Chambal Investments & Service, Lda.",
      description:
        "Empresa de soluções tecnológicas e serviços informáticos, focada em gerar impacto económico e social, democratizando o acesso à tecnologia.",
      imgp: "/img/dc2d304b-1944-44ac-9628-2632048048be.jpeg",
    }
  ];

  return (
    <section className="w-full min-h-[1000px]  text-white flex flex-col items-center justify-center px-4 md:px-0 py-18">

      {/* Nome */}
      <motion.h1 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center leading-tight"
      >
        José Arone Mulate Chambal
      </motion.h1>


      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="mt-6 w-40 h-40 md:w-56 md:h-56 rounded-full !bg-gray-800  overflow-hidden ring-4 ring-offset-2"
      >
        <div className="relative w-full h-full">
          <Image src="/img/873ecd45-aaa1-4547-8b3a-8a6cf4434f47.jpeg" alt="José Chambal" fill className="object-cover" />
        </div>
      </motion.div>


      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="text-lg md:text-2xl font-semibold mt-4 text-center"
        style={{ color: 'var(--lead-azul-profundo)' }}
      >
        Futuro Líder em Políticas Públicas & Inclusão Social
      </motion.h2>


      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="text-gray-300 text-md md:text-lg text-center mt-4 w-[85%] md:w-[55%] leading-relaxed"
      >
        José Arone Mulate Chambal é um jovem líder moçambicano, apaixonado por inclusão, educação e transformação social. Fundador da <strong>Pro Tech Education</strong> e estudante de Ciência Política na Universidade Eduardo Mondlane.
      </motion.p>


      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="flex flex-col md:flex-row gap-6 mt-6 text-center md:text-left justify-center"
      >
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-[280px] flex items-start gap-2"
         style={{ backgroundColor: 'var(--lead-section-bg)' }}>
       <FaBullseye className=" w-7 h-7 !text-gray-300" />
          <div>
            <h3 className="font-semibold !text-blue-300 mb-1">Missão</h3>
            <p className="text-gray-300 text-sm">Promover inclusão, empatia e transformação social.</p>
          </div>
        </div>
      <div className="bg-gray-800 p-4 rounded-lg shadow-md w-[280px] flex items-start gap-2"
         style={{ backgroundColor: 'var(--lead-section-bg)' }}>
       <FaEye className="w-7 h-7 !text-gray-300"  />
          <div>
            <h3 className="font-semibold !text-blue-300 mb-1">Visão</h3>
            <p className="text-gray-300 text-sm">Contribuir para um Moçambique mais justo e equitativo.</p>
          </div>
        </div>
      </motion.div>

      
      <motion.div className="flex flex-wrap gap-5 items-center justify-center py-10">
  {projects.map((project, index) => (
    <motion.div
      key={index}
      className="w-[250px] bg-gray-900/50 h-80 rounded-2xl relative cursor-pointer"
    >
      <div className="relative w-full h-[150px] rounded-xl overflow-hidden ">
        <Image
          src={project.imgp}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="w-full flex  gap-1 flex-col justify-around">
        <h3 className="font-bold mx-3 !text-white">{project.title}</h3>
        <h6 className="text-sm mx-3 !text-white/50">{project.description}</h6>
      </div>
    </motion.div>
  ))}
</motion.div>

    
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="italic text-gray-400 text-md md:text-lg text-center mt-10 w-[85%] md:w-[55%]"
      >
        “Enquanto a Medicina salva vidas, a Ciência Política pode salvar sociedades inteiras.”
      </motion.p>

      
      

    </section>
  );
}
