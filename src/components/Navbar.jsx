import Dropdown from "./Dropdown";

function Navbar() {
  return (
    <nav className="flex justify-around">
      <span className="font-semibold">SOFTWIZ US</span>
      <Dropdown />
    </nav>
  );
}

export default Navbar;
