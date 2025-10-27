import { section } from "framer-motion/client";

export default function Hero() {
  return (
    <section className="home flex items-center min-h-screen flex-col md:flex-row justify-center gap-2 w-[calc(95%)] md:w-[calc(70%)]">
        <div className="w-1/2 bg-white">
        </div>
       <div className=" md:w-1/2 flex flex-col gap-2 w-full items-center justify-center md:items-start">
            <h1 className="text-3xl font-semibold text-center md:text-start">José Arone Mulate Chambal</h1>
            <p className="text-center md:text-start text-lg">Líder jovem, apaixonado por inclusão, justiça social e transformação.</p>
            <button  className="flex items-start md:items-center">
                <a href="#about" className="border px-3 py-1.5 rounded-full hover:bg-white hover:text-black hover:font-semibold duration-500 transition ">Saiba mais</a>
            </button>
       </div>
    </section>
  );
}