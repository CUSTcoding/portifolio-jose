export default function Footer(){
    const Year:number = new Date().getFullYear();
    return(
        <footer className="flex flex-col justify-center  bottom-0 w-screen md:w-[calc(80%)]  items-center py-8 px-3 bg-white">
            <div className="flex items-center w-[calc(96%)] justify-center flex-col md:flex-row  gap-3 ">
                <div className="social-link w-[calc(96%)]  md:w-1/2 border flex items-start relative justify-center flex-col border-black p-6 rounded-xl">
                    <h1 className="text-2xl">Jose Arone Mulate Chambal</h1>
                    <div className="my-3 m-auto rounded-2xl w-[calc(98%)] bg-gray-400 h-1 opacity-50"></div>
                </div>
                <div className="social-link w-[calc(96%)] md:w-1/2 border flex items-start relative justify-center flex-col border-black p-6 rounded-xl">
                    <h1 className="text-2xl">Navegacao</h1>
                    <div className="my-3 m-auto rounded-2xl w-[calc(98%)] bg-gray-400 h-1 opacity-50"></div>
                </div>
                <div className="social-link w-[calc(96%)] md:w-1/2 border flex items-start relative justify-center flex-col border-black p-6 rounded-xl">
                     <h1 className="text-2xl">Redes Socias</h1>
                     <div className="my-3 m-auto rounded-2xl w-[calc(98%)] bg-gray-400 h-1 opacity-50"></div>
                </div>

            </div>
            <div className="my-5 w-[calc(90%)] rounded-2xl bg-gray-400 h-1 opacity-50"></div>
            <p className="text-black">© Jose.{Year}.Todos direitos Reservados  </p>
        </footer>
    );
}

