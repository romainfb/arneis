"use client";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full h-48 bg-white rounded-lg shadow-md">
      {console.log("category CARD ", category.id)}
      <Link
        href={`/category/${category.id}`}
        className="w-full h-full bg-primary rounded-lg"
      >
        <Image
          src={category.thumbnail}
          alt={category.label}
          className="rounded-lg h-full object-cover opacity-70"
          width={1920}
          height={1080}
        />
        <div className="absolute bottom-0 left-0 p-2 rounded-tr-lg">
          <h3 className="text-xl uppercase text-accent font-bold">
            {category.label}
          </h3>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
