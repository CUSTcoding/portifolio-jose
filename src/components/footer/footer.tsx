"use client";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  const Year: number = new Date().getFullYear();

  const links = [
    { href: "/", label: "Início" },
    { href: "/sobre", label: "Sobre" },
    { href: "/servicos", label: "Serviços" },
    { href: "/contacto", label: "Contato" },
  ];

  const socialLinks = [
    { icon: <FaWhatsapp />, action: "https://wa.me/258XXXXXXXXX?text=Olá!%20Gostaria%20de%20entrar%20em%20contato.", bg: "bg-green-500" },
    { icon: <FaFacebookF />, action: "https://facebook.com/seuPerfil", bg: "bg-blue-600" },
    { icon: <FaInstagram />, action: "https://instagram.com/seuPerfil", bg: "bg-pink-500" },
    { icon: <FaEnvelope />, action: "mailto:seuemail@gmail.com", bg: "bg-red-500" },
    { icon: <FaPhoneAlt />, action: "tel:+258XXXXXXXXX", bg: "bg-yellow-500" },
  ];

  return (
    <footer className="flex flex-col justify-center bottom-0 w-screen md:w-[calc(95%)] items-center py-8 px-3 bg-gray-900 text-white gap-12">
      <div className="flex flex-wrap items-center w-[calc(96%)] justify-center gap-6">

        {/* Nome e descrição */}
        <div className="social-link w-[calc(96%)] md:w-1/3 border border-gray-700 p-6 rounded-xl flex flex-col items-start">
          <h1 className="text-2xl text-amber-400 font-bold">José Arone Mulate Chambal</h1>
          <p className="text-gray-300 text-sm mt-2">
            José Arone Mulate Chambal é um jovem líder moçambicano, apaixonado por inclusão, educação e transformação social. 
            Fundador da <strong>Pro Tech Education</strong> e estudante de Ciência Política na Universidade Eduardo Mondlane.
          </p>
        </div>

        {/* Navegação */}
        <div className="social-link w-[calc(96%)] md:w-1/3 border border-gray-700 p-6 rounded-xl flex flex-col items-start">
          <h1 className="text-2xl text-amber-400 font-bold">Navegação</h1>
          <div className="mt-3 flex flex-col gap-2">
            {links.map((link, i) => (
              <Link key={i} href={link.href} className="text-gray-300 hover:text-amber-400 transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Redes sociais */}
        <div className="social-link w-[calc(96%)] md:w-1/3 border border-gray-700 p-6 rounded-xl flex flex-col items-start">
          <h1 className="text-2xl text-amber-400 font-bold">Redes Sociais</h1>
          <div className="mt-3 flex flex-wrap gap-3">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.action}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 flex items-center justify-center rounded-full ${s.bg} text-white text-lg transition-transform duration-300 hover:scale-110`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="my-5 w-[90%] h-1 bg-gray-700 opacity-50 rounded-full"></div>

      <p className="text-gray-400 text-sm">© José Arone {Year}. Todos direitos reservados.</p>
    </footer>
  );
}
