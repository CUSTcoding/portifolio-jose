

export default function About() {
    return (
       <main className="about flex flex-col gap-2 flex-center items-center justify-center w-screen min-h-screen ">

          

            <div className=" flex flex-col gap-2 flex-center items-center justify-center w-screen min-h-screen py-20">
                <p className="rounded-full bg-white p-1 px-2 my-2 text-sm text-black font-semibold">Sobre min</p>

                <div className="w-[calc(95%)] md:w-[calc(70%)] rounded-2xl bg-gray-800 p-4 items-start justify-center">
                    <h1 className="text-2xl font-bold">Jose Arone Mulate Chambal</h1>
                    <div className="w-[calc(99%)] h-[21.72rem] m-auto bg-black rounded-2xl my-2">
                    </div>
                    <div className="w-[calc(99%)] h-60 relative m-auto flex items-center my-2">
                        <div className="absolute w-1 h-[calc(94%)]  bg-amber-400 rounded-full"></div>
                        <div className="  h-[calc(70%)] ms-3 flex flex-col items-start justify-around">
                            <p className="p-0 m-0"><span className="font-semibold">Nome completo: </span>Jose Arone Mulate Chambal</p>
                            <p className="p-0 m-0"><span className="font-semibold">Data de Nascimento: </span>07/07/2005</p>
                            <p className="p-0 m-0"><span className="font-semibold">Proficao : Empriendedor e Estudante </span></p>
                            <p className="p-0 m-0"><span className="font-semibold">Habilidades : Empriendedor e Estudante </span></p>
                        </div>
                    </div>
                </div>

                <div className="w-[calc(93%)] md:w-[calc(67%)] h-1 bg-amber-400 my-10 "></div>

                <div className="w-[calc(90%)] md:w-[calc(67%)] flex flex-col items-start justify-center gap-5">
                    <div className="lg:w-1/2 flex flex-col items-start justify-center gap-5 ">
                        <div className="flex items-start flex-col">
                            <div className="flex items-center justify-center py-2 gap-2">
                                <h1 className="text-xl font-semibold">Minha Historia</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur quis obcaecati delectus doloribus quidem velit esse nemo assumenda, dolore voluptatem nisi aperiam! Natus possimus autem facere voluptas doloremque perferendis?</p>
                        </div>
                        <div className="flex items-start flex-col">
                            <div className="flex items-center justify-center py-2 gap-2">
                                <h1 className="text-xl font-semibold">Missao</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur quis obcaecati delectus doloribus quidem velit esse nemo assumenda, dolore voluptatem nisi aperiam! Natus possimus autem facere voluptas doloremque perferendis?</p>
                        </div>
                        <div className="flex items-start flex-col">
                            <div className="flex items-center justify-center py-2 gap-2">
                                <h1 className="text-xl font-semibold">visao</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur quis obcaecati delectus doloribus quidem velit esse nemo assumenda, dolore voluptatem nisi aperiam! Natus possimus autem facere voluptas doloremque perferendis?</p>
                        </div>
                        <div className="flex items-start flex-col">
                            <div className="flex items-center justify-center py-2 gap-2">
                                <h1 className="text-xl font-semibold">valores</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus pariatur quis obcaecati delectus doloribus quidem velit esse nemo assumenda, dolore voluptatem nisi aperiam! Natus possimus autem facere voluptas doloremque perferendis?</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        
            
        </main>
    );
}