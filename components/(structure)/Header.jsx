"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BasketModal from "../(basket)/BasketModal";
import SearchModal from "../(search)/SearchModal";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "lightMode"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const toggleCheck = (e) => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme("lightMode");
    } else {
      setTheme("darkMode");
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 ml-auto mr-auto z-10">
      <div className="xl:w-fit w-fit h-14 bg-neutral rounded-full fixed top-4 left-0 right-0 ml-auto mr-auto flex justify-between items-center px-8 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.2)]">
        <nav>
          <ul className="flex justify-between items-center text-sm font-medium">
            <li>
              <Link
                href="/"
                className="text-primary font-bold select-none mx-4 rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Arneis
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
              <Link
                href="/profil"
                className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Profil
              </Link>
            </li>
            <li className="">
              <Link
                href="/contact"
                className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
              >
                Contact
              </Link>
            </li>
            {/* Basket modal */}
            <li>
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="flex my-drawer-4"></div>

                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button  ">
                    <span className="cursor-pointer text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300">
                      Panier
                    </span>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu p-4 w-[26%] min-h-full bg-base-200 text-base-content">
                    <BasketModal />
                  </div>
                </div>
              </div>
            </li>

            {/* Search modal */}
            <li>
              <div className="drawer drawer-end">
                <input
                  id="my-drawer-5"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="flex my-drawer-5"></div>

                <div className="drawer-content">
                  <label htmlFor="my-drawer-5" className="drawer-button  ">
                    <span className="cursor-pointer text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300">
                      Rechercher
                    </span>
                  </label>
                </div>
                <div className="drawer-side">
                  <label
                    htmlFor="my-drawer-5"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                  ></label>
                  <div className="menu p-4 w-[26%] min-h-full bg-base-200 text-base-content">
                    <SearchModal />
                  </div>
                </div>
              </div>
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
