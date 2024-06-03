"use client";

import Link from "next/link";
import CheckoutMethods from "../../components/(checkout)/CheckoutMethods";
import { useCart } from "../../components/(provider)/cartProvider";

export default function Payment() {
  const { cart, getCartPrice, clearCart } = useCart();

  const handlePayment = async () => {
    // Ici, vous pouvez intégrer votre logique de traitement de paiement
    // Par exemple, appeler une API de paiement
    // clearCart() pour vider le panier après le paiement réussi
    clearCart();
    alert("Paiement réussi !");
  };

  return (
    <>
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
            Paiement
          </h2>

          <CheckoutMethods />

          <div className="rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto bg-gray-50">
            <h3 className="font-semibold text-2xl leading-8 mb-6 text-gray-900">
              Récapitulatif de la commande
            </h3>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-4"
              >
                <div className="flex items-center">
                  <img
                    src={item.thumbnail}
                    alt={item.name}
                    className="h-20 w-20 object-cover rounded-xl mr-4"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-lg text-primary">
                      {item.name}
                    </span>
                    <span className="font-medium text-gray-600">
                      {item.price}€ x {item.quantity}
                    </span>
                  </div>
                </div>
                <span className="font-semibold text-lg text-primary">
                  {item.price * item.quantity}€
                </span>
              </div>
            ))}

            <div className="flex items-center justify-between w-full pt-6 mt-6">
              <p className="font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-medium text-2xl leading-9 text-primary">
                {getCartPrice()}€
              </h6>
            </div>
          </div>

          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link href="/basket">
              <button className="rounded-full py-4 px-4 w-full max-w-[280px]  flex items-center bg-accent justify-center transition-all duration-500">
                <span className="px-2 font-semibold text-lg leading-8 text-primary">
                  Retourner au panier
                </span>
                <svg
                  className="ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                >
                  <path
                    d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                    stroke="#1f2937"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </Link>
            <button
              onClick={handlePayment}
              className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-primary font-semibold text-lg text-accent flex transition-all duration-500 hover:bg-primary"
            >
              Confirmer le paiement
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="22"
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
