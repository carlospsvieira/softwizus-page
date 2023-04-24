import { useEffect, useRef, useState } from "react";

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div ref={dropdownRef}>
        <button
          type="button"
          className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-xl font-semibold text-zinc-700 shadow-md hover:bg-slate-50"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
          onClick={handleDropdown}
        >
          DEVELOPERS
        </button>
      </div>
      <div
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
        hidden={!isOpen}
      >
        <div className="py-1" role="none" ref={dropdownRef}>
          <a
            href="https://carlospsvieira.github.io/Portfolio"
            className="text-gray-700 block px-4 py-2 text-md"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-0"
            target="_blank"
            rel="noreferrer"
          >
            Carlos
          </a>
          <a
            href="https://sagacello.github.io/Portfolio"
            className="text-gray-700 block px-4 py-2 text-md"
            role="menuitem"
            tabIndex="-1"
            id="menu-item-1"
            target="_blank"
            rel="noreferrer"
          >
            Marcelo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
