"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "../../../components/(products)/PorductCard";
import ProductCardSkeleton from "../../../components/(products)/ProductCardSkeleton";

export default function CategoryPageDetails() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Extract the category ID from the URL pathname
  const params = useParams();
  console.log("params", params);

  const id = params.id;

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    fetch(`/api/categories?id=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.category) {
          setCategory(data.category);
        } else {
          setError("Failed to load category");
        }
      })
      .catch((error) => setError(error.message));

    // Fetch products for the category
    fetch(`/api/products?category=${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.products) {
          setProducts(data.products);
        } else {
          setError("Failed to load products");
        }
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [id]);

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
      <section className="w-full h-fit px-20 my-40 flex flex-col md:text-left text-center xl:px-80">
        {console.log("category", category)}
        {category && (
          <>
            <h1 className="text-primary font-black text-5xl w-full">
              {category.label}
            </h1>
            <div className="text-sm breadcrumbs mb-10 mt-2">
              <ul>
                <li>
                  <Link href={`/products`}>Produits</Link>
                </li>
                <li>
                  <Link href={`/categories`}>Catégories</Link>
                </li>
                <li>{category.label}</li>
              </ul>
            </div>
            <div className="w-full bg-accent h-28 rounded-lg mb-20">
              <Image
                src={category.thumbnail}
                alt={category.label}
                width={1920}
                height={1080}
                className="rounded-lg h-full object-cover opacity-70"
              />
            </div>
          </>
        )}
        <div className="w-full flex flex-row gap-12 flex-wrap">
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
