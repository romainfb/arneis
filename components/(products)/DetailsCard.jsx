"use client";

import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCart } from "../(provider)/cartProvider";

const DetaildCard = ({ product, categoryName, materials }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    toast.success("Produit ajouté au panier avec succès!");
  };

  return (
    <section className="flex mb-10">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-md:px-2 ">
          <div className="img">
            <div className="img-box h-full rounded-lg mt-6">
              {product.thumbnail && product.name && (
                <Image
                  src={product.thumbnail}
                  alt={product.name}
                  className="lg:ml-auto h-full rounded-lg object-cover"
                  width={1000}
                  height={1000}
                />
              )}
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <p className="text-lg font-medium leading-8 my-6">
                <Link href="/products">Produits</Link>&nbsp; /&nbsp;{" "}
                {product.name}
              </p>

              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                {product.name}
              </h2>

              <span className="text-sm font-semibold text-gray-900 mb-10 bg-blueprimary py-1 px-2 rounded-3xl bg-secondary bg-opacity-50">
                {product.stock > 0 ? "En stock" : "Rupture de stock"}
              </span>

              <span className="text-sm ml-2 font-semibold text-gray-900 mb-10 bg-blueprimary py-1 px-2 rounded-3xl bg-secondary bg-opacity-50">
                Catégorie: {categoryName}
              </span>

              <h3 className="text-lg font-semibold text-gray-900 mb-6 mt-4">
                Matériaux
                <div className="space-x-2 mt-2">
                  {materials &&
                    materials.map((material) => (
                      <span
                        className="text-sm font-semibold text-gray-900 mb-10 bg-blueprimary py-1 px-2 rounded-3xl bg-secondary bg-opacity-50"
                        key={material.id}
                      >
                        {material.label}
                      </span>
                    ))}
                </div>
              </h3>

              <p className="text-gray-500 text-base font-normal mb-5 mt-4">
                {product.description}
              </p>
              <ul className="grid gap-y-4 mb-8 text-4xl font-black py-4">
                <li>{product.price} €</li>
              </ul>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCart}
                  className="btn text-center btn-primary w-1/2"
                >
                  Ajouter au panier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetaildCard;
