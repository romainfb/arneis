"use client";

import { useEffect, useState } from "react";
import CategoryCard from "../../components/(category)/CategoryCard";
import ProductCardSkeleton from "../../components/(products)/ProductCardSkeleton";

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
          <ProductCardSkeleton key={index} />
        ))}
      </section>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        <h1 className="text-primary font-black text-5xl w-full">
          Nos catégories
        </h1>

        {categories.length > 0 ? (
          categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))
        ) : (
          <div>No categories found</div>
        )}
      </section>
    </>
  );
}
