"use client";

import ProductCard from "@/components/(products)/PorductCard";
import ProductCardSkeleton from "@/components/(products)/ProductCardSkeleton";
import Footer from "@/components/(structure)/Footer";
import Header from "@/components/(structure)/Header";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((response) => response.json())
      .then((response) => setproducts(response.products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {/* Main hero section */}
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <>
            {[...Array(6)].map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </>
        )}
      </section>
    </>
  );
}
