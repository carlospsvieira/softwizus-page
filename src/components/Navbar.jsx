import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav className="flex justify-around items-center py-[0.5rem] shadow-md">
      <span className="font-semibold text-2xl text-zinc-700">SOFTWIZ US</span>
      <Dropdown />
    </nav>
  );
}

export default Navbar;
