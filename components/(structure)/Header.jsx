"use client";

import { Menu, Search, ShoppingBasket } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import BasketModal from "../(basket)/BasketModal";
import SearchModal from "../(search)/SearchModal";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [theme, setTheme] = useState("lightMode");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoggedIn(true);
    }
  }, [status]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      setTheme(savedTheme || "lightMode");
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  }, [theme]);

  const linksWhenAdmin = [
    { href: "/", text: "Arneis", className: "text-primary font-bold" },
    { href: "/products", text: "Produits", className: "text-primary" },
    { href: "/categories", text: "Catégories", className: "text-primary" },
    { href: "/account", text: "Mon compte", className: "text-primary" },
    { href: "/dashboard", text: "Tableau de bord", className: "text-primary" },
  ];

  const linksWhenLoggedIn = [
    { href: "/", text: "Arneis", className: "text-primary font-bold" },
    { href: "/products", text: "Produits", className: "text-primary" },
    { href: "/categories", text: "Catégories", className: "text-primary" },
    { href: "/account", text: "Mon compte", className: "text-primary" },
  ];

  const linksWhenLoggedOut = [
    { href: "/", text: "Arneis", className: "text-primary font-bold" },
    { href: "/products", text: "Produits", className: "text-primary" },
    { href: "/categories", text: "Catégories", className: "text-primary" },
    { href: "/login", text: "Connexion", className: "text-primary" },
  ];

  const commonLinks = [
    {
      id: "my-drawer-5",
      modalComponent: <SearchModal />,
      icon: <Search size="24" />,
    },
    {
      id: "my-drawer-4",
      modalComponent: <BasketModal />,
      icon: <ShoppingBasket size="24" />,
    },
  ];

  const renderLinks = (links) =>
    links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className={`${link.className} mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer`}
        >
          {link.text}
        </Link>
      </li>
    ));

  const renderCommonLinks = () =>
    commonLinks.map((link, index) => (
      <li key={index} className="mx-4">
        <div className="drawer drawer-end">
          <input id={link.id} type="checkbox" className="drawer-toggle" />
          <div className={`flex ${link.id}`}></div>
          <div className="drawer-content">
            <label htmlFor={link.id} className="drawer-button h-fit">
              <span className="cursor-pointer text-primary rounded-full py-2 duration-300">
                {link.icon}
              </span>
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor={link.id}
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>
            <div className="menu p-4 w-[26%] min-h-full bg-base-200 text-base-content">
              {link.modalComponent}
            </div>
          </div>
        </div>
      </li>
    ));

  const getLinksToRender = () => {
    if (isLoggedIn) {
      if (session?.user?.role === "admin") {
        return linksWhenAdmin;
      }
      return linksWhenLoggedIn;
    }
    return linksWhenLoggedOut;
  };

  return (
    <div className="fixed top-4 left-0 right-0 ml-auto mr-auto z-10">
      <div className="xl:w-fit w-fit h-14 bg-neutral rounded-full fixed top-4 left-0 right-0 ml-auto mr-auto flex justify-between items-center px-8 shadow-[0px_10px_40px_0px_rgba(0,0,0,0.2)]">
        <nav className="hidden md:block">
          <ul className="flex justify-between items-center text-sm font-medium">
            {renderLinks(getLinksToRender())}
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => signOut()}
                  className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer"
                >
                  Déconnexion
                </button>
              </li>
            )}
            {renderCommonLinks()}
          </ul>
        </nav>
        <div className="md:hidden dropdown w-full">
          <div tabIndex={0} role="button" className="m-1">
            <Menu size="24" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-center"
          >
            {renderLinks(getLinksToRender())}
            {isLoggedIn && (
              <li>
                <button
                  onClick={() => signOut()}
                  className="text-primary mx-4 hover:bg-secondary rounded-full py-2 px-3 duration-300 cursor-pointer items-center"
                >
                  Déconnexion
                </button>
              </li>
            )}
            {renderCommonLinks()}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
