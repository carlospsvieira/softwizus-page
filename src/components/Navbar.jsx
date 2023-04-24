import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav className="flex justify-around py-[2rem]">
      <span className="font-semibold">SOFTWIZ US</span>
      <Dropdown />
    </nav>
  );
}

export default Navbar;
