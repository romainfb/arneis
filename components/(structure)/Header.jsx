"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <header className="fixed top-4 left-0 right-0 ml-auto mr-auto z-10">
      <div className="xl:w-[36%] w-fit h-14 bg-neutral rounded-full fixed top-4 left-0 right-0 ml-auto mr-auto flex justify-between items-center px-6 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.2)]">
        <span className="text-primary font-bold select-none">Arneis</span>
        <nav>
          <ul className="flex justify-between items-center text-sm font-medium">
            <li>
              <Link
                href="/"
                className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Produits
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Catégories
              </a>
            </li>
            <li className="">
              <a
                href="#"
                className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <input
          type="checkbox"
          className="toggle [--tglbg:#1f2937] bg-neutral hover:bg-neutral border-primary"
          checked={isChecked}
          onChange={toggleCheck}
        />
      </div>
    </header>
  );
};

export default Header;
