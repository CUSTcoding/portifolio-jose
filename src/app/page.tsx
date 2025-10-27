import Logo from "@/components/header/logo";
import Navbar from "@/components/header/menu";
import Hero from "@/components/heropage/heropage";
import About from "@/components/about/about";
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen ">
      <Logo/>
      <Navbar/>
      <Hero/>
      <About/>
      <Footer/>
    </main>
  );
}
