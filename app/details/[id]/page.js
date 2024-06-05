"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import DetailsCard from "../../../components/(products)/DetailsCard";
import ProductCard from "../../../components/(products)/PorductCard";
import ProductDetailsCardSkeleton from "../../../components/(products)/ProductDetailsCardSkeleton";

async function fetchProductData(id) {
  const res = await fetch(`/api/product?id=${id}`);
  return res.json();
}

async function fetchRelatedProducts(categoryId, productId) {
  const res = await fetch(`/api/products?category=${categoryId}&limit=3`);
  const related = await res.json();
  return related.products.filter((p) => p.id !== productId);
}

async function fetchCategoryName(categoryId) {
  const res = await fetch(`/api/categories?id=${categoryId}`);
  const category = await res.json();
  return category.category.label;
}

async function fetchProductMaterials(productId) {
  const res = await fetch(`/api/materials-products?productId=${productId}`);
  const materials = await res.json();
  if (materials.error) {
    throw new Error(materials.error);
  }
  return materials.materials;
}

async function fetchProductDetails(id) {
  const product = await fetchProductData(id);
  if (product.error) {
    throw new Error(product.error);
  }
  const categoryName = await fetchCategoryName(product.product.categoryId);
  const relatedProducts = await fetchRelatedProducts(
    product.product.categoryId,
    product.product.id
  );
  const materials = await fetchProductMaterials(product.product.id);
  return { product: product.product, categoryName, relatedProducts, materials };
}

export default function ProductDetails() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [productDetails, setProductDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const data = await fetchProductDetails(id);
        setProductDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <ProductDetailsCardSkeleton />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
      {productDetails && (
        <>
          <DetailsCard
            product={productDetails.product}
            categoryName={productDetails.categoryName}
            materials={productDetails.materials}
          />
          <h1 className="text-primary font-black text-5xl w-full mt-20">
            Produits similaires
          </h1>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 ">
            {productDetails.relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} product={relatedProduct} />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
