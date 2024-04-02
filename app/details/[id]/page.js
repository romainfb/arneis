"use client";

import DetailsCard from "@/components/(products)/DetailsCard";
import ProductCard from "@/components/(products)/PorductCard";
import { useEffect, useState } from "react";
import Footer from "../../../components/(structure)/Footer";
import Header from "../../../components/(structure)/Header";

export default function Home({ params }) {
  const [product, setproduct] = useState([]);
  const [relatedProducts, setrelatedProducts] = useState([]);

  useEffect(() => {
    fetch(`/api/product?id=${params.id}`)
      .then((response) => response.json())
      .then((response) => setproduct(response.product))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    if (product.categoryId) {
      fetch(`/api/products?category=${product.categoryId}&limit=3`)
        .then((response) => response.json())
        .then((response) => setrelatedProducts(response.products))
        .catch((error) => console.error(error));
    }
  }, [product]);

  return (
    <>
      <Header />
      {/* Main hero section */}

      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        <DetailsCard product={product} />

        {relatedProducts &&
          relatedProducts
            .filter((p) => p.id !== product.id) // Ignore current product
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
      </section>
      <Footer />
    </>
  );
}
