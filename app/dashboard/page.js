import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="w-full h-fit px-20 my-40 flex flex-col md:text-left text-center xl:px-80">
      <div className="w-full flex-col justify-start items-start lg:gap-14 md:gap-10 gap-8 inline-flex">
        <div className="w-full flex-col justify-start items-start gap-4 flex">
          <h1 className="text-primary font-black text-5xl w-full">
            Tableau de bord
          </h1>
          <p className="text-secondary text-base font-light leading-relaxed">
            Bienvenue sur votre tableau de bord.
          </p>
          <Link href={"/dashboard/products"} className="btn btn-primary">
            Produits
          </Link>
          <Link href={"/dashboard/orders"} className="btn btn-primary">
            Commandes
          </Link>
          <Link href={"/dashboard/contact"} className="btn btn-primary">
            Demandes de contact
          </Link>
        </div>
      </div>
    </div>
  );
}
