import Logo from "@/components/header/logo";
import Navbar from "@/components/header/menu";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";

export default function Sobre(){
    return(
        <main className="flex flex-col gap-2 flex-center items-center justify-center w-screen min-h-screen">
            <Logo/>
            <Navbar/>
            <About/>
            <Footer/>

        </main>
    );
}