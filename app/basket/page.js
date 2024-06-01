"use client";

import Link from "next/link";
import { useCart } from "../../components/(provider)/cartProvider";

export default function Home() {
  const {
    cart,
    removeFromCart,
    clearCart,
    getCartPrice,
    getCartProductPrice,
    updateCartItemQuantity,
  } = useCart();

  const handleIncreaseQuantity = (productId) => {
    const updatedQuantity =
      cart.find((item) => item.id === productId).quantity + 1;
    updateCartItemQuantity(productId, updatedQuantity);
  };

  const handleDecreaseQuantity = (productId) => {
    const updatedQuantity =
      cart.find((item) => item.id === productId).quantity - 1;
    if (updatedQuantity >= 1) {
      updateCartItemQuantity(productId, updatedQuantity);
    }
  };

  return (
    <>
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-left text-center gap-12 xl:px-80 flex-wrap">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
            Mon panier
          </h2>
          <div className="hidden lg:grid grid-cols-2 py-6">
            <div className="font-normal text-xl leading-8 secondary">
              Produit
            </div>
            <p className="font-normal text-xl leading-8 secondary flex items-center justify-between">
              <span className="w-full max-w-[200px] text-center">TVA</span>
              <span className="w-full max-w-[260px] text-center">Quantité</span>
              <span className="w-full max-w-[200px] text-center">Total</span>
            </p>
          </div>

          {cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
            >
              <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
                <div className="img-box">
                  <img
                    src={item.image}
                    alt="perfume bottle image"
                    className="h-40 w-40 object-cover rounded-xl"
                  />
                </div>
                <div className="pro-data w-full max-w-sm ">
                  <h5 className="font-semibold text-xl leading-8 text-primary max-[550px]:text-center">
                    {item.name}
                  </h5>

                  <h6 className="font-medium text-lg leading-8 text-primary  max-[550px]:text-center">
                    {item.price}€
                  </h6>
                </div>
              </div>
              <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
                <h6 className="font-bold text-2xl leading-9 text-primary w-full max-w-[176px] text-center">
                  0%{" "}
                  <span className="text-sm text-gray-300 ml-3 lg:hidden whitespace-nowrap">
                    (Delivery Charge)
                  </span>
                </h6>
                <div className="flex items-center w-full mx-auto justify-center">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  >
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M16.5 11H5.5"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.5 11H5.5"
                        stroke=""
                        stroke-opacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M16.5 11H5.5"
                        stroke=""
                        stroke-opacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent"
                    placeholder="1"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  >
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-primary"
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                    >
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke=""
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke=""
                        stroke-opacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 5.5V16.5M16.5 11H5.5"
                        stroke=""
                        stroke-opacity="0.2"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <h6 className="text-primary font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                  {getCartProductPrice(item.id)}€
                </h6>
              </div>
            </div>
          ))}

          <div className="rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">
                Sous total
              </p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                {getCartPrice()}€
              </h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
              <p className="font-normal text-xl leading-8 text-gray-400">TVA</p>
              <h6 className="font-semibold text-xl leading-8 text-gray-900">
                0%
              </h6>
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-medium text-2xl leading-9 text-gray-900">
                Total
              </p>
              <h6 className="font-medium text-2xl leading-9 text-primary">
                {getCartPrice()}€
              </h6>
            </div>
          </div>
          <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
            <Link href="/products">
              <button className="rounded-full py-4 px-4 w-full max-w-[280px]  flex items-center bg-accent justify-center transition-all duration-500">
                <span className="px-2 font-semibold text-lg leading-8 text-primary">
                  Retourner aux produits
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
            <button className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center bg-primary font-semibold text-lg text-accent flex transition-all duration-500 hover:bg-primary">
              Accéder au paiement
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
