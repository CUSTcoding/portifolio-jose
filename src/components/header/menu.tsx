export default function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-around p-1 rounded-full bottom-4 absolute z-40 gap-4 text-black">
        <span className="ms-3">Menu</span>
        <button className=" bg-black  rounded-full w-10 h-10 ">
            <span>X</span>
        </button>
    </nav>
  );
}