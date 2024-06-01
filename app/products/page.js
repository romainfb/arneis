"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/(products)/PorductCard";
import ProductCardSkeleton from "../../components/(products)/ProductCardSkeleton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((response) => {
        if (response.products) {
          setProducts(response.products);
        } else {
          setError("Failed to load products");
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
          Nos produits
        </h1>

        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div>Aucun produit trouvé</div>
        )}
      </section>
    </>
  );
}
