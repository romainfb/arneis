"use client";
import Link from "next/link";
import { useCart } from "../(provider)/cartProvider";

const BasketModal = () => {
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
    <section className="pt-24 pb-16 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
          Panier
        </h2>

        {cart.map((item) => (
          <div
            key={item.id}
            className="rounded-3xl p-4 lg:p-8 grid grid-cols-12 mb-8 max-lg:max-w-lg max-lg:mx-auto gap-y-4"
          >
            <div className="col-span-12 lg:col-span-2 img box">
              <img
                src={item.thumbnail}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-2xl"
              />
            </div>
            <div className="col-span-12 lg:col-span-10 detail w-full lg:pl-6">
              <div className="flex items-center justify-between w-full mb-4">
                <h5 className="font-bold text-2xl leading-9 text-primary">
                  {item.name}
                </h5>
                <button
                  className="rounded-full group flex items-center justify-center focus-within:outline-red-500"
                  onClick={() => removeFromCart(item.id)}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 34 34"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                      cx="17"
                      cy="17"
                      r="17"
                      fill=""
                    />
                    <path
                      className="stroke-red-500 transition-all duration-500 group-hover:stroke-white"
                      d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                      stroke="#EF4444"
                      stroke-width="1.6"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <p className="font-normal text-base leading-7 text-secondary mb-6">
                {item.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleDecreaseQuantity(item.id)}
                    className="group rounded-[50px]   shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:-gray-300 focus-within:outline-gray-300"
                  >
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 9.5H13.5"
                        stroke=""
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    id="number"
                    className="rounded-full w-10 aspect-square outline-none text-primary font-semibold text-sm py-1.5 px-3 bg-gray-100  text-center"
                    placeholder="1"
                    value={item.quantity}
                    readOnly
                  />
                  <button
                    onClick={() => handleIncreaseQuantity(item.id)}
                    className="group rounded-[50px]   shadow-sm shadow-transparent p-2.5 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:-gray-300 focus-within:outline-gray-300"
                  >
                    <svg
                      className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.75 9.5H14.25M9 14.75V4.25"
                        stroke=""
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <h6 className="text-primary font-bold text-2xl leading-9 text-right">
                  {getCartProductPrice(item.id)}€
                </h6>
              </div>
            </div>
          </div>
        ))}

        <div className="divider mb-6"></div>

        {cart.length > 0 ? (
          <>
            <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 -b  max-lg:max-w-lg max-lg:mx-auto">
              <h5 className="text-primary font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
                Total
              </h5>

              <div className="flex items-center justify-between gap-5 ">
                <h6 className="font-bold text-3xl lead-10 text-primary">
                  {getCartPrice()}€
                </h6>
              </div>
            </div>
            <div className="max-lg:max-w-lg max-lg:mx-auto">
              <Link href="/basket">
                <button className="rounded-full py-4 px-6 bg-primary text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-primary ">
                  Voir mon panier
                </button>
              </Link>
            </div>
          </>
        ) : (
          <p className="text-center text-primary">Votre panier est vide</p>
        )}
      </div>
    </section>
  );
};

export default BasketModal;
