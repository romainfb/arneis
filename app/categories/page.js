"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CategoryCard from "../../components/(category)/CategoryCard";
import CategoryCardSkeleton from "../../components/(category)/CategoryCardSkeleton";

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/categories")
      .then((response) => response.json())
      .then((response) => {
        if (response.categories) {
          setCategories(response.categories);
        } else {
          setError("Failed to load categories");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        {[...Array(6)].map((_, index) => (
          <CategoryCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center xl:px-80 flex-wrap">
        <h1 className="text-primary font-black text-5xl w-full">
          Nos catégories
        </h1>
        <div className="text-sm breadcrumbs mt-2 mb-10">
          <ul>
            <li>
              <Link href={`/products`}>Produits</Link>
            </li>
            <li>Catégories</li>
          </ul>
        </div>

        <div className="w-full flex-col justify-start items-start gap-12 flex">
          {categories.length > 0 ? (
            categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))
          ) : (
            <div>No categories found</div>
          )}
        </div>
      </section>
    </>
  );
}
