export default function Header() {
  return (
    <header className="bg-blue-600 text-white flex items-center justify-around p-4 top-0 fixed w-full">
      <h1 className="text-3xl font-bold">Jose Arone Shambal <span className="bg-green-600 rounded-2xl w-1.5 h-1.5 relative"></span></h1>
      <nav className="mt-2">
        <a href="#home" className="mr-4 hover:underline">Home</a>
        <a href="#about" className="mr-4 hover:underline">About</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}