import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { useCart } from "../(provider)/cartProvider";

const ProductCard = ({ product }) => {
  const { name, thumbnail, price, description, id } = product;
  const { addToCart } = useCart(); // Utilisez le hook useCart pour accéder à addToCart

  const truncatedDescription =
    description.length > 50
      ? description.substring(0, 50) + "..."
      : description;

  const handleAddToCart = () => {
    addToCart(product); // Appel de la fonction addToCart avec le produit en tant que paramètre
    toast.success("Produit ajouté au panier avec succès!");
  };

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="h-60">
        <Link href={`/details/${id}`} className="w-full h-full">
          <Image
            src={thumbnail}
            alt={name}
            className="object-cover w-full h-full"
            width={400}
            height={400}
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/details/${id}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <p className="card-text">{truncatedDescription}</p>
        <p className="card-price font-bold text-xl">{price} €</p>
        <div className="card-actions w-full">
          <button
            onClick={handleAddToCart}
            className="btn btn-primary w-full mt-6"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
