"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaHeart, FaPrayingHands, FaMedal, FaUsers,
  FaBalanceScale, FaBolt, FaHandsHelping, FaStar, FaEye, 
} from "react-icons/fa";

import Image from "next/image";

export default function About() {
  const [modal, setModal] = useState<{title: string, description: string} | null>(null);

  const valores = [
  { icon: FaBolt, name: "Resiliência", desc: "Capacidade de superar desafios mantendo foco." },
  { icon: FaPrayingHands, name: "Fé e espiritualidade", desc: "Confiança e conexão com valores espirituais." },
  { icon: FaHeart, name: "Amor e cuidado", desc: "Priorizar bem-estar e empatia nas relações." },
  { icon: FaStar, name: "Coragem", desc: "Enfrentar desafios e adversidades sem medo." },
  { icon: FaMedal, name: "Perseverança", desc: "Manter disciplina e foco nos objetivos." },
  { icon: FaBalanceScale, name: "Justiça ética", desc: "Agir com ética, imparcialidade e integridade." },
  { icon: FaHandsHelping, name: "Empatia", desc: "Compreender sentimentos e perspectivas alheias." },
  { icon: FaUsers, name: "Determinação", desc: "Foco e ação contínua para alcançar metas." },
];


  const experiencias = [
    {
      title: "Pro Tech Education",
      role: "Fundador e Coordenador",
      period: "2023 – Presente",
      description: "Plataforma de inclusão digital e empoderamento juvenil.",
      image: '/img/dd852c18-c364-4d6a-b4d0-c1d03027e087.jpeg',
    },
    {
      title: "Formador Acadêmico",
      role: "Instrutor de Informática",
      period: "2023 – 2025",
      description: "Ensino técnico em informática básica e hardware.",
      image: '/img/6a4f9cbd-f671-4afa-8069-0cfe3bd1bf42.jpeg',
    },
    {
      title: "Wake Up Organization",
      role: "Programa de Liderança",
      period: "2018",
      description: "Formação em relações públicas e comunicação estratégica.",
      image: '/img/3ee75f62-db5e-4d06-bbdd-94ec51763910.jpeg',
    }
  ];

  const animSection = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <main className=" text-white w-full flex flex-col items-center py-16 gap-16 px-4">

      {/* Header */}
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
        className="rounded-full bg-white p-2 px-4 text-black text-sm font-semibold"
      >
        Sobre Mim
      </motion.p>


     <motion.div className="flex items-center w-full justify-center py-6 flex-col">
        <div className="w-[80%] flex flex-col md:flex-row gap-4 bg-gray-800 p-2 rounded-3xl">

         
          <div className="foto relative w-full md:w-1/2 h-64 md:h-[24rem] rounded-2xl overflow-hidden">
            <Image
              src="/img/1e7b803b-7c8a-42c1-a51c-c46ab13c1d72.jpeg"
              fill
              className="object-cover"
              alt="Foto de José Arone Mulate Chambal"
            />
          </div>

         
          <div className="info w-full md:w-1/2 bg-gray-800 rounded-2xl flex flex-col items-center justify-around p-3">
            <h1 className="text-2xl font-bold !text-gray-100 mb-2">José Arone Mulate Chambal</h1>
            <p className="text-sm sm:text-base mb-4">
              Nascido em 10/09/2005, em Moçambique, sua vida é marcada por resiliência, fé e compromisso social. Desde cedo demonstrou empatia, curiosidade e desejo de transformar a sociedade.
            </p>

            <div className="w-full flex gap-3 relative">
              <div className="absolute w-0.5 bg-blue-500 h-[90%] left-0 top-1/2 -translate-y-1/2"></div>
              <div className="pl-6">
                <h2 className="!text-white"><span className="font-semibold">Nome:</span> José Arone Mulate Chambal</h2>
                <h4 className="!text-white"><span className="font-semibold">Data de Nascimento:</span> 10/09/2005</h4>
                <h4 className="!text-white"><span className="font-semibold">Profissão:</span> Estudante</h4>
                <h4 className="!text-white"><span className="font-semibold">Curso:</span> Ciências Políticas</h4>
                <h4 className="!text-white"><span className="font-semibold">Instituição:</span> Faculdade de Ciências Políticas (UEM)</h4>
              </div>
            </div>
          </div>


         
        </div>
      </motion.div>

      <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col md:flex-row gap-2  bg-gray-500/20 rounded-lg p-4 m-5"
      >
        <div className="flex flex-col gap-2 m-4 justify-around">
          <h2 className="text-xl font-semibold !text-gray-100">Liderança na Fé & Serviço Comunitário</h2>
          <p className="text-gray-300/80 text-sm sm:text-base leading-relaxed">
            Lidera adolescentes na igreja, promovendo valores cristãos, autoestima e propósito de vida.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[14rem] relative rounded-lg overflow-hidden flex-shrink-0">
              <Image src={'/img/d50d0b1e-2c97-4af1-80cf-1c7081f1994c.jpeg'} alt={"igreja"} fill className="object-cover" />
          </div>
        
      </motion.section>


       <motion.section
            variants={animSection}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl flex flex-col gap-2 px-5"
          >
            <h2 className="text-xl font-semibold !text-gray-100">Mudança de Medicina para Ciência Política</h2>
            <p className="text-gray-300/80 text-sm sm:text-base leading-relaxed">
              José percebeu que podia impactar mais vidas mudando sistemas do que apenas corpos. Decidiu estudar Ciência Política para promover justiça social.
            </p>
        </motion.section>


      <motion.div 
        initial={{ opacity: 0, y: 45 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        className=" w-full md:w-[calc(85%)] flex flex-col items-center justify-center py-4 "
        >

          <motion.h3 
            className="text-start text-2xl !text-white font-bold"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
          >
            Valores
          </motion.h3>

          <motion.div
          className="flex flex-wrap items-center justify-center m-4 gap-4 ">
              {valores.map((valor, index) => {
                const Icon = valor.icon; 
                return (
                  <div
                    key={index}
                    className="flex flex-col w-[13rem] md:w-[15rem] p-6 lg:p-8 gap-14 lg:gap-16
                              border border-nav-gray bg-main-background rounded-[1.125rem] lg:rounded-4xl
                              shadow-[0px_16px_32px_0px_#00000040]"
                  >
                    <Icon className="h-[4.75rem] w-[4.75rem] lg:h-[5.5rem] lg:w-[5.5rem]" />

                    <div className="flex flex-col gap-4 lg:gap-5">
                      <p className="text-section-white text-xl font-semibold lg:text-2xl leading-[1.875rem] lg:leading-9 font-poppins">
                        {valor.name}
                      </p>

                      <p className="text-paragraph-white text-sm lg:text-base leading-[1.625rem] lg:leading-7 font-poppins">
                        {valor.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
          </motion.div>

        </motion.div>


         <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl flex flex-col md:flex-row gap-4"
      >
        <div className="bg-gray-800/50 p-4 rounded-lg flex-1">
          <h3 className="!text-gray-300 font-semibold flex items-center text-xl gap-2"><FaPrayingHands /> Missão</h3>
          <p className="!text-gray-300 text-sm sm:text-base leading-relaxed">
            Promover inclusão, empatia e transformação nas instituições moçambicanas.
          </p>
        </div>

        <div className="bg-gray-800/50 p-4 rounded-lg flex-1">
          <h3 className="!text-gray-300 font-semibold flex items-center text-xl gap-2"><FaEye /> Visão</h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Construir um Moçambique mais justo, onde diversidade e inclusão sejam reconhecidas como forças.
          </p>
        </div>
      </motion.section>

              
       <motion.section
        variants={animSection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="w-[calc(85%)] flex flex-col gap-4"
      >
        <h2 className="text-xl font-semibold !text-gray-50 py-2 border-b-2 w-[calc(90%)] md:w-[calc(40%)] border-white/40">Experiência e Liderança</h2>
        
        <div className="flex w-full items-center justify-center flex-wrap gap-9">
          {experiencias.map((exp, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="bg-gray-800 p-4 rounded-lg cursor-pointer transition flex flex-col  gap-4 items-center"
            onClick={() => setModal({ title: exp.title, description: exp.description })}
          >
          
            <div className="w-full h-54 relative rounded-lg overflow-hidden flex-shrink-0">
              <Image src={exp.image} alt={exp.title} fill className="object-cover" />
            </div>

           
            <div className="flex flex-col gap-2">
              <h3 className="!text-gray-200 font-semibold">{exp.title}</h3>
              <p className="!text-gray-400 text-sm">{exp.role} · {exp.period}</p>
            </div>
          </motion.div>
        ))}
        </div>
        
      </motion.section>
     

   
    </main>
  );
}
