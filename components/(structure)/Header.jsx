"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import BasketModal from "../(basket)/BasketModal";

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
            <li>
              <div className="drawer drawer-end">
                <svg
                  className="my-drawer-4 drawer-toggle cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clipPath="url(#clip0_9_28)">
                    <path
                      d="M0.5 2.25C0.5 2.05109 0.579018 1.86032 0.71967 1.71967C0.860322 1.57902 1.05109 1.5 1.25 1.5H3.5C3.6673 1.50005 3.82977 1.55603 3.9616 1.65904C4.09342 1.76205 4.18701 1.90618 4.2275 2.0685L4.835 4.5H22.25C22.3601 4.5001 22.4689 4.52445 22.5685 4.57133C22.6682 4.6182 22.7563 4.68644 22.8266 4.77121C22.8969 4.85597 22.9477 4.95518 22.9753 5.06178C23.0029 5.16838 23.0068 5.27976 22.9865 5.388L20.7365 17.388C20.7043 17.5599 20.6131 17.7151 20.4786 17.8268C20.3442 17.9386 20.1749 17.9998 20 18H6.5C6.32515 17.9998 6.15585 17.9386 6.02137 17.8268C5.88688 17.7151 5.79567 17.5599 5.7635 17.388L3.515 5.4105L2.915 3H1.25C1.05109 3 0.860322 2.92098 0.71967 2.78033C0.579018 2.63968 0.5 2.44891 0.5 2.25ZM5.153 6L7.1225 16.5H19.3775L21.347 6H5.153ZM8 18C7.20435 18 6.44129 18.3161 5.87868 18.8787C5.31607 19.4413 5 20.2044 5 21C5 21.7956 5.31607 22.5587 5.87868 23.1213C6.44129 23.6839 7.20435 24 8 24C8.79565 24 9.55871 23.6839 10.1213 23.1213C10.6839 22.5587 11 21.7956 11 21C11 20.2044 10.6839 19.4413 10.1213 18.8787C9.55871 18.3161 8.79565 18 8 18ZM18.5 18C17.7043 18 16.9413 18.3161 16.3787 18.8787C15.8161 19.4413 15.5 20.2044 15.5 21C15.5 21.7956 15.8161 22.5587 16.3787 23.1213C16.9413 23.6839 17.7043 24 18.5 24C19.2956 24 20.0587 23.6839 20.6213 23.1213C21.1839 22.5587 21.5 21.7956 21.5 21C21.5 20.2044 21.1839 19.4413 20.6213 18.8787C20.0587 18.3161 19.2956 18 18.5 18ZM8 19.5C8.39782 19.5 8.77936 19.658 9.06066 19.9393C9.34196 20.2206 9.5 20.6022 9.5 21C9.5 21.3978 9.34196 21.7794 9.06066 22.0607C8.77936 22.342 8.39782 22.5 8 22.5C7.60217 22.5 7.22064 22.342 6.93934 22.0607C6.65804 21.7794 6.5 21.3978 6.5 21C6.5 20.6022 6.65804 20.2206 6.93934 19.9393C7.22064 19.658 7.60217 19.5 8 19.5ZM18.5 19.5C18.8978 19.5 19.2794 19.658 19.5607 19.9393C19.842 20.2206 20 20.6022 20 21C20 21.3978 19.842 21.7794 19.5607 22.0607C19.2794 22.342 18.8978 22.5 18.5 22.5C18.1022 22.5 17.7206 22.342 17.4393 22.0607C17.158 21.7794 17 21.3978 17 21C17 20.6022 17.158 20.2206 17.4393 19.9393C17.7206 19.658 18.1022 19.5 18.5 19.5Z"
                      fill="#1E1E1E"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_9_28">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <input
                  id="my-drawer-4"
                  type="checkbox"
                  className="drawer-toggle"
                />
                <div className="flex my-drawer-4"></div>

                <div className="drawer-content">
                  {/* Page content here */}
                  <label htmlFor="my-drawer-4" className="drawer-button  ">
                    <svg
                      className="cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="primary"
                    >
                      <g clipPath="url(#clip0_9_28)">
                        <path
                          d="M0.5 2.25C0.5 2.05109 0.579018 1.86032 0.71967 1.71967C0.860322 1.57902 1.05109 1.5 1.25 1.5H3.5C3.6673 1.50005 3.82977 1.55603 3.9616 1.65904C4.09342 1.76205 4.18701 1.90618 4.2275 2.0685L4.835 4.5H22.25C22.3601 4.5001 22.4689 4.52445 22.5685 4.57133C22.6682 4.6182 22.7563 4.68644 22.8266 4.77121C22.8969 4.85597 22.9477 4.95518 22.9753 5.06178C23.0029 5.16838 23.0068 5.27976 22.9865 5.388L20.7365 17.388C20.7043 17.5599 20.6131 17.7151 20.4786 17.8268C20.3442 17.9386 20.1749 17.9998 20 18H6.5C6.32515 17.9998 6.15585 17.9386 6.02137 17.8268C5.88688 17.7151 5.79567 17.5599 5.7635 17.388L3.515 5.4105L2.915 3H1.25C1.05109 3 0.860322 2.92098 0.71967 2.78033C0.579018 2.63968 0.5 2.44891 0.5 2.25ZM5.153 6L7.1225 16.5H19.3775L21.347 6H5.153ZM8 18C7.20435 18 6.44129 18.3161 5.87868 18.8787C5.31607 19.4413 5 20.2044 5 21C5 21.7956 5.31607 22.5587 5.87868 23.1213C6.44129 23.6839 7.20435 24 8 24C8.79565 24 9.55871 23.6839 10.1213 23.1213C10.6839 22.5587 11 21.7956 11 21C11 20.2044 10.6839 19.4413 10.1213 18.8787C9.55871 18.3161 8.79565 18 8 18ZM18.5 18C17.7043 18 16.9413 18.3161 16.3787 18.8787C15.8161 19.4413 15.5 20.2044 15.5 21C15.5 21.7956 15.8161 22.5587 16.3787 23.1213C16.9413 23.6839 17.7043 24 18.5 24C19.2956 24 20.0587 23.6839 20.6213 23.1213C21.1839 22.5587 21.5 21.7956 21.5 21C21.5 20.2044 21.1839 19.4413 20.6213 18.8787C20.0587 18.3161 19.2956 18 18.5 18ZM8 19.5C8.39782 19.5 8.77936 19.658 9.06066 19.9393C9.34196 20.2206 9.5 20.6022 9.5 21C9.5 21.3978 9.34196 21.7794 9.06066 22.0607C8.77936 22.342 8.39782 22.5 8 22.5C7.60217 22.5 7.22064 22.342 6.93934 22.0607C6.65804 21.7794 6.5 21.3978 6.5 21C6.5 20.6022 6.65804 20.2206 6.93934 19.9393C7.22064 19.658 7.60217 19.5 8 19.5ZM18.5 19.5C18.8978 19.5 19.2794 19.658 19.5607 19.9393C19.842 20.2206 20 20.6022 20 21C20 21.3978 19.842 21.7794 19.5607 22.0607C19.2794 22.342 18.8978 22.5 18.5 22.5C18.1022 22.5 17.7206 22.342 17.4393 22.0607C17.158 21.7794 17 21.3978 17 21C17 20.6022 17.158 20.2206 17.4393 19.9393C17.7206 19.658 18.1022 19.5 18.5 19.5Z"
                          fill="#1E1E1E"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9_28">
                          <rect
                            width="24"
                            height="24"
                            fill="white"
                            transform="translate(0.5)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
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
