import Logo from "@/components/header/logo";
import Navbar from "@/components/header/menu";
import Hero from "@/components/heropage/heropage";
// About component unused here; removed to avoid lint warning
import Footer from "@/components/footer/footer";


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen min-h-screen ">
      <Logo/>
      <Navbar/>
      <Hero/>
      <Footer/>
    </main>
  );
}
