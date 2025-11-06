"use client"
import { motion, Variants } from "framer-motion";
import { FaHeadset, FaMicrophoneAlt, FaBolt, FaUserTie, FaArrowRight } from "react-icons/fa";

export default function Services(){

   const card_service = [

        {
        nome: "Técnico de Suporte Informático",
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi assumenda quaerat architecto? Ipsam, ipsum ut quibusdam placeat dignissimos.",
        icone: <FaHeadset  size={40} />,
        },

        {
        nome: "Mestre de Cerimónias",
        description:
            "Apresentação de eventos, animação e condução de cerimónias com profissionalismo e carisma.",
        icone: <FaMicrophoneAlt  size={40} />,
        },

        {
        nome: "Eletricista Residencial",
        description:
            "Instalações, reparos e manutenção elétrica com segurança e qualidade para residências e empresas.",
        icone: <FaBolt  size={40} />,
        },

        {
        nome: "Recursos Humanos",
        description: "Gestão de pessoas, recrutamento e desenvolvimento profissional com foco em cultura organizacional e desempenho.",
         icone: <FaUserTie  size={40} />,
        },
    ];

    const iconVariants: Variants = {
        hover: { rotate: 360, transition: { duration: 0.4, ease: "easeIn" } },
        initial: { rotate: 0 },
    };

    const linkVariants: Variants = {
        hover: { color: "#3b82f6", textDecoration: "underline", transition: { duration: 0.2 } },
        initial: { color: "#000", textDecoration: "none" },
    };

    const cardVariants: Variants = {
        initial: { y: 0 },
        hover: { y: -50, transition: { duration: 0.3, ease: "easeOut" } }
    };

    return(

        <main className="w-screen min-h-screen flex flex-col items-center justify-center py-20 gap-4">
           <h1 className="text-4xl font-bold !!text-white py-8">Meus Servicos</h1>
           <div className="w-[calc(100%-6%)] md:w-[calc(100%-30%)] h-auto py-5 flex flex-wrap items-center justify-center gap-2 md:gap-6 relative">

               {card_service.map((service, index) =>(
                  <motion.div 
                  key={index}
                  className="card h-[400px] bg-gray-800 p-4 rounded-2xl flex flex-col items-start justify-around  gap-4 w-[18rem] cursor-pointer"
                  variants={cardVariants}
                  initial="initial"
                  whileHover="hover"
                  
                  >
                    <motion.div className="bg-gray-950 p-3 rounded-xl w-16 flex items-center justify-center"
                    variants={iconVariants}
                    >
                        {service.icone}
                    </motion.div>
                    <h1 className="text-2xl font-bold !!text-white/80">{service.nome}</h1>

                    <p className=" text-md !!text-white/70 text-left mx-auto">{service.description}</p>

                     <motion.a 
                        href="#"
                        className="text-black rounded-full px-4 flex items-center justify-start gap-3 "
                        variants={linkVariants}
                        >
                            Entrar em contato <FaArrowRight/>
                    
                    </motion.a>
                  </motion.div>
               ))}

                
           </div>
        </main>
    );
}