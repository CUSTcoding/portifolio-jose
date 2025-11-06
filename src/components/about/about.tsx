"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeart, FaPrayingHands, FaMedal, FaUsers,
  FaBalanceScale, FaBolt, FaHandsHelping, FaStar, FaEye, FaTimes
} from "react-icons/fa";

export default function About() {
  const [modal, setModal] = useState<{title: string, description: string} | null>(null);

  const valores = [
    { icon: <FaBolt />, name: "Resiliência", desc: "Capacidade de superar desafios mantendo foco." },
    { icon: <FaPrayingHands />, name: "Fé e espiritualidade", desc: "Confiança e conexão com valores espirituais." },
    { icon: <FaHeart />, name: "Amor e cuidado", desc: "Priorizar bem-estar e empatia nas relações." },
    { icon: <FaStar />, name: "Coragem", desc: "Enfrentar desafios e adversidades sem medo." },
    { icon: <FaMedal />, name: "Perseverança", desc: "Manter disciplina e foco nos objetivos." },
    { icon: <FaBalanceScale />, name: "Justiça ética", desc: "Agir com ética, imparcialidade e integridade." },
    { icon: <FaHandsHelping />, name: "Empatia", desc: "Compreender sentimentos e perspectivas alheias." },
    { icon: <FaUsers />, name: "Determinação", desc: "Foco e ação contínua para alcançar metas." },
  ];

  const experiencias = [
    {
      title: "Pro Tech Education",
      role: "Fundador e Coordenador",
      period: "2023 – Presente",
      description: "Plataforma de inclusão digital e empoderamento juvenil."
    },
    {
      title: "Formador Acadêmico",
      role: "Instrutor de Informática",
      period: "2023 – 2025",
      description: "Ensino técnico em informática básica e hardware."
    },
    {
      title: "Wake Up Organization",
      role: "Programa de Liderança",
      period: "2018",
      description: "Formação em relações públicas e comunicação estratégica."
    }
  ];

  const animSection = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className="bg-black text-white w-full flex flex-col items-center py-16 gap-16 px-4">

      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        className="rounded-full bg-white p-2 px-4 text-black text-sm font-semibold"
      >
        Sobre Mim
      </motion.p>

      {/* Biografia e Linha do Tempo */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col gap-6 text-gray-300"
      >
        <h1 className="text-3xl font-bold text-amber-400">José Arone Mulate Chambal</h1>
        <p className="bg-gray-800 rounded-lg p-4 leading-relaxed text-sm sm:text-base">
          Nascido em 10/09/2005, em Moçambique, sua vida é marcada por resiliência, fé e compromisso social. Desde cedo demonstrou empatia, curiosidade e desejo de transformar a sociedade.
        </p>

        <div className="relative w-full h-32 flex items-center">
          <div className="absolute w-1 bg-amber-400 h-full left-6"></div>
          <div className="flex flex-col ml-10 gap-4">
            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="font-semibold">2005 - Nascimento</p>
              <p className="text-gray-300 text-sm">Matola, Moçambique</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="font-semibold">2018 - Wake Up Organization</p>
              <p className="text-gray-300 text-sm">Programa de Liderança</p>
            </div>
            <div className="bg-gray-800 p-2 rounded-lg">
              <p className="font-semibold">2023 - Pro Tech Education</p>
              <p className="text-gray-300 text-sm">Fundador e Coordenador</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mudança de carreira */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col gap-2"
      >
        <h2 className="text-xl font-semibold text-amber-400">Mudança de Medicina para Ciência Política</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          José percebeu que podia impactar mais vidas mudando sistemas do que apenas corpos. Decidiu estudar Ciência Política para promover justiça social.
        </p>
      </motion.section>

      {/* Valores */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-amber-400">Valores</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {valores.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-1 bg-gray-800 py-2 rounded cursor-pointer justify-center group relative"
            >
              {v.icon}
              <span className="text-xs sm:text-sm">{v.name}</span>
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max bg-gray-700 p-1 text-xs rounded opacity-0 group-hover:opacity-100 transition">
                {v.desc}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Missão & Visão */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col md:flex-row gap-4"
      >
        <div className="bg-gray-800 p-4 rounded-lg flex-1">
          <h3 className="text-amber-400 font-semibold flex items-center gap-2"><FaPrayingHands /> Missão</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Promover inclusão, empatia e transformação nas instituições moçambicanas.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg flex-1">
          <h3 className="text-amber-400 font-semibold flex items-center gap-2"><FaEye /> Visão</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Construir um Moçambique mais justo, onde diversidade e inclusão sejam reconhecidas como forças.
          </p>
        </div>
      </motion.section>

      {/* Experiências com Modal */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold text-amber-400">Experiência e Liderança</h2>
        {experiencias.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer transition"
            onClick={() => setModal({ title: exp.title, description: exp.description })}
          >
            <h3 className="text-amber-300 font-semibold">{exp.title}</h3>
            <p className="text-gray-400 text-sm">{exp.role} · {exp.period}</p>
          </motion.div>
        ))}
      </motion.section>

      {/* Modal de Experiência */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-gray-800 rounded-lg p-6 max-w-lg w-full relative"
          >
            <button className="absolute top-2 right-2 text-amber-400" onClick={() => setModal(null)}>
              <FaTimes />
            </button>
            <h3 className="text-amber-300 font-semibold text-lg mb-2">{modal.title}</h3>
            <p className="text-gray-300 text-sm sm:text-base">{modal.description}</p>
          </motion.div>
        </div>
      )}

      {/* Fé */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-xl font-semibold text-amber-400">Liderança na Fé & Serviço Comunitário</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Lidera adolescentes na igreja, promovendo valores cristãos, autoestima e propósito de vida.
        </p>
      </motion.section>

      {/* Amizade */}
      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl"
      >
        <h2 className="text-xl font-semibold text-amber-400">Amizade & Lealdade</h2>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          Valoriza amizades como fonte de aprendizado emocional, maturidade e inteligência relacional.
        </p>
      </motion.section>
    </main>
  );
}
