// details/[id]/page.js

import DetailsCard from "@/components/(products)/DetailsCard";
import ProductCard from "@/components/(products)/ProductCard";

export async function getServerSideProps({ params }) {
  const res = await fetch(`https://your-domain.com/api/product?id=${params.id}`);
  const product = await res.json();

  let relatedProducts = [];
  if (product.product.categoryId) {
    const relatedRes = await fetch(
      `https://your-domain.com/api/products?category=${product.product.categoryId}&limit=3`
    );
    const related = await relatedRes.json();
    relatedProducts = related.products.filter((p) => p.id !== product.product.id); // Ignore current product
  }

  return {
    props: {
      product: product.product,
      relatedProducts,
    },
  };
}

export default function Home({ product, relatedProducts }) {
  return (
    <>
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        <DetailsCard product={product} />
        {relatedProducts &&
          relatedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </section>
    </>
  );
}
