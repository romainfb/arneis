import DetailsCard from "@/components/(products)/DetailsCard";
import ProductCard from "@/components/(products)/PorductCard";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

async function fetchProductData(id) {
  const res = await fetch(`/api/product?id=${id}`);
  const product = await res.json();
  return product;
}

async function fetchRelatedProducts(categoryId, productId) {
  const res = await fetch(`/api/products?category=${categoryId}&limit=3`);
  const related = await res.json();
  return related.products.filter((p) => p.id !== productId);
}

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (id) {
      fetchProductData(id)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setProduct(data.product);
            if (data.product.categoryId) {
              fetchRelatedProducts(data.product.categoryId, data.product.id)
                .then(setRelatedProducts)
                .catch((err) => setError(err.message));
            }
          }
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
      {product && <DetailsCard product={product} />}
      {relatedProducts.map((relatedProduct) => (
        <ProductCard key={relatedProduct.id} product={relatedProduct} />
      ))}
    </section>
  );
}
