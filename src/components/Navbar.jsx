import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav className="flex justify-around items-center py-[1rem] shadow-md">
      <span className="font-semibold text-2xl text-zinc-700">SOFTWIZ<span className="text-cyan-500">US</span></span>
      <Dropdown />
    </nav>
  );
}

export default Navbar;
