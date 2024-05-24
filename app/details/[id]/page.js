"use client";

import DetailsCard from "@/components/(products)/DetailsCard";
import ProductCard from "@/components/(products)/PorductCard";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home({ params }) {
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/product?id=${params.id}`);
      const data = await res.json();
      setProduct(data.product);
    };

    fetchProduct();
  }, [params.id]);

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      if (product && product.categoryId) {
        const res = await fetch(`/api/products?category=${product.categoryId}&limit=3`);
        const data = await res.json();
        setRelatedProducts(data.products.filter(p => p.id !== product.id));
      }
    };

    fetchRelatedProducts();
  }, [product]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        <DetailsCard product={product} />
        {relatedProducts &&
          relatedProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </>
  );
}
