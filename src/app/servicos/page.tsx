import Logo from "@/components/header/logo";
import Navbar from "@/components/header/menu";
import Services from "@/components/service/service";
import Footer from "@/components/footer/footer";

export default function Servicos(){
    return(
        <main className="flex flex-col items-center justify-center">
            <Logo/>
            <Navbar/>
            <Services/>
            <Footer/>

        </main>
    );
}