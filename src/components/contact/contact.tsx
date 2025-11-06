import { FaWhatsapp, FaEnvelope, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="w-screen min-h-screen flex flex-col items-center justify-center py-20 gap-4">
           <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold !text-white">Contate nos!</h2>
                    
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center content-center">

                    <div className="bg-gradient-to-r from-green-500/30 to-green-400/10 border-2 border-green-400 rounded-xl p-6 flex items-center gap-4">
                        <div className="!text-white text-4xl">
                            <FaWhatsapp />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold !text-white">ATENDIMENTO PELO  <span className="text-green-100">WHATSAPP</span></h3>
                            <a
                                href="https://hackone.com.br/portfolio-whatsapp"
                                className="mt-2 inline-block bg-white text-green-600 px-4 w-[calc(70%)] text-center py-2 rounded hover:bg-green-50 transition"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-500/30 to-blue-400/10 border-2 border-blue-400 rounded-xl p-6 flex items-center gap-4">
                        <div className="!text-white text-4xl">
                            <FaFacebook />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold !text-white">ATENDIMENTO PELO  <span className="text-blue-200">FACEBOOK</span></h3>
                            <a
                                href="https://hackone.com.br/portfolio-facebook"
                                className="mt-2 inline-block bg-white w-[calc(70%)] text-center text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-pink-500/300 via-purple-500/30 to-yellow-400/30 border-2 border-transparent rounded-xl p-6 flex items-center gap-4">
                        <div className="!text-white text-4xl">
                            <FaInstagram />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold !text-white">ATENDIMENTO PELO  <span className="text-pink-200">INSTAGRAM</span></h3>
                            <a
                                href="https://hackone.com.br/portfolio-instagram"
                                className="mt-2 inline-block bg-white w-[calc(70%)] text-center text-pink-600 px-4 py-2 rounded hover:bg-pink-50 transition"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-700/30 to-blue-600/10 border-2 border-blue-600 rounded-xl p-6 flex items-center gap-4">
                        <div className="!text-white text-4xl">
                            <FaLinkedin />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold !text-white">ATENDIMENTO PELO O <span className="text-blue-200">LINKEDIN</span></h3>
                            <a
                                href="https://hackone.com.br/portfolio-linkedin"
                                className="mt-2 inline-block bg-white text-blue-600 px-4 py-2 w-[calc(70%)] text-center rounded hover:bg-blue-50 transition"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-500/30 to-red-400/10 border-2 border-red-400 rounded-xl p-6 flex items-center gap-4">
                        <div className="!text-white text-4xl">
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold !text-white">ATENDIMENTO PELO O <span className="text-red-100">GMAIL</span></h3>
                            <a
                                href="mailto:portfolio@hackone.com.br"
                                className="mt-2 inline-block w-[calc(70%)] text-center bg-white text-red-600 px-4 py-2 rounded hover:bg-red-50 transition"
                            >
                                Fale Conosco
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
