import Logo from "@/components/header/logo";
import Navbar from "@/components/header/menu";

import Footer from "@/components/footer/footer";
import Contact from "@/components/contact/contact";

export default function Contacto(){
    return(
        <main className="w-screen min-h-screen flex flex-col items-center justify-center gap-4">
            <Logo/>
            <Navbar/>
            <Contact/>
            <Footer/>
        </main>
    );
}