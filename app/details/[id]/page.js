// Importez vos composants nécessaires
import DetailsCard from "@/components/(products)/DetailsCard";
import ProductCard from "@/components/(products)/PorductCard";
import { use } from 'react';

// Fonction pour récupérer les données
async function getProductData(id) {
  const res = await fetch(`/api/product?id=${id}`);
  const product = await res.json();

  let relatedProducts = [];
  if (product && product.product.categoryId) {
    const relatedRes = await fetch(
      `/api/products?category=${product.product.categoryId}&limit=3`
    );
    const related = await relatedRes.json();
    relatedProducts = related.products.filter((p) => p.id !== product.product.id);
  }

  return { product: product.product, relatedProducts };
}

// Le composant du serveur
export default function ProductDetails({ params }) {
  const { id } = params;
  const { product, relatedProducts } = use(getProductData(id));

  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
      <DetailsCard product={product} />
      {relatedProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </section>
  );
}
