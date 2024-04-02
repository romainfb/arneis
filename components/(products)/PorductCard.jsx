import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const { name, image, price, description, id } = product;

  const truncatedDescription =
    description.length > 50
      ? description.substring(0, 50) + "..."
      : description;

  return (
    <div className="card w-[30%] bg-base-100 shadow-xl flex">
      <figure className="h-96">
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{truncatedDescription}</p>
        <p className="card-price font-bold text-xl">{price} €</p>
        <div className="card-actions w-full">
          <Link href={`/details/${id}`} className="btn btn-primary w-full mt-6">
            Voir le produit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
