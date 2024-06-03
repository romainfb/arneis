"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryCard from "../components/(category)/CategoryCard";
import ContactForm from "../components/(contact)/ContactForm";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories?limit=3")
      .then((response) => response.json())
      .then((response) => {
        if (response.categories) {
          setCategories(response.categories);
        } else {
          console.error("Failed to load categories");
        }
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* Main hero section */}

      <section className="w-full h-96 flex items-center px-20 my-60 md:space-x-20 flex-col md:flex-row md:text-left text-center space-y-16 xl:px-80">
        <div className="flex flex-col">
          {/* Text container */}
          <span className="badge badge-outline mb-4 font-medium">
            Nouveautés artisanales
          </span>

          <h1 className="text-primary font-black uppercase text-5xl">
            Solution artisanale{" "}
            <span className="text-secondary">
              pour votre mobilier de qualité
            </span>
          </h1>
          <p className="my-4 text-sm font-medium w-2/3">
            Découvrez notre collection de meubles artisanaux fabriqués avec des
            matériaux de qualité en France par des artisans passionnés.
          </p>
          <div className="flex flex-row w-full justify-center md:justify-start">
            <Link
              href={"/products"}
              className="btn btn-primary rounded-full mr-6"
            >
              Nos produits
            </Link>

            <button className="rounded-full text-sm font-semibold">
              Découvrir nos catégories
            </button>
          </div>
        </div>

        {/* Caroussel container */}

        <div className="flex">
          <div className="flex xl:h-[32rem] h-[28rem] xl:w-96 w-72 rounded-t-full rounded-b-[80rem] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.2)] carousel">
            <div className="carousel-item w-full">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353_1280.jpg"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Catégories */}

      <section className="w-full px-20 xl:px-80 my-40">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-primary text-3xl font-semibold">
            Nos catégories
          </h2>
          <p className="text-md text-primary mt-4">
            Découvrez nos différentes catégories de produits
          </p>
          <div className="flex w-full h-fit mt-20 space-x-10">
            {categories &&
              categories.map((category) => (
                <CategoryCard key={category.id} category={category} />
              ))}
          </div>
        </div>
      </section>

      {/* Contact section */}

      <ContactForm />
    </>
  );
}
