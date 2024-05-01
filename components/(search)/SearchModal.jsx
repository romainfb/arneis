"use client";
import { useCart } from "../(provider)/cartProvider";

const SearchModal = () => {
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
      <div className="flex w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto justify-center flex-col items-center">
        <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
          Recherche
        </h2>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">
              Vous recherchez un produit précis?
            </span>
          </div>
          <input
            type="text"
            placeholder="Canapé en cuir"
            className="input input-bordered w-full focus:outline-none"
          />
        </label>

        <label className="form-control w-full ">
          <div className="label">
            <span className="label-text">
              Vous recherchez une description précise?
            </span>
          </div>
          <input
            type="text"
            placeholder="Provenant des hautes terres d'écosse.."
            className="input input-bordered w-full focus:outline-none"
          />
        </label>
      </div>
    </section>
  );
};

export default SearchModal;
