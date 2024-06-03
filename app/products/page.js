"use client";

import { useEffect, useState } from "react";
import ProductCard from "../../components/(products)/PorductCard";
import ProductCardSkeleton from "../../components/(products)/ProductCardSkeleton";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = new URLSearchParams(window.location.search).toString();
        const response = await fetch(`/api/products?${params}`);
        const data = await response.json();

        if (data.products) {
          setProducts(data.products);
        } else {
          setError("Failed to load products");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center xl:px-80 flex-wrap">
        <h1 className="text-primary font-black text-5xl w-full">
          Nos produits
        </h1>
        <div className="text-sm breadcrumbs mt-2 mb-10">
          <ul>
            <li>Produits</li>
            <li>Tous nos produits</li>
          </ul>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div>Aucun produit trouvé</div>
          )}
        </div>
      </section>
    </>
  );
}
