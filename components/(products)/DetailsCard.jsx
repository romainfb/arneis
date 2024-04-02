"use client";

import Image from "next/image";
import Link from "next/link";

const DetaildCard = ({ product }) => {
  return (
    <section className="flex mb-10">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-md:px-2 ">
          <div className="img">
            <div className="img-box h-full rounded-lg mt-6">
              {product.image && product.name && (
                <Image
                  src={product.image}
                  alt={product.name}
                  className="lg:ml-auto h-full rounded-lg"
                  width={1000}
                  height={1000}
                />
              )}
            </div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-indigo-600 mb-4">
                <Link href="/products">Boutique</Link>&nbsp; /&nbsp;{" "}
                {product.name}
              </p>

              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize">
                {product.name}
              </h2>

              <span className="text-sm font-semibold text-gray-900 mb-10 bg-blueprimary py-1 px-2 rounded-3xl">
                {product.stock > 0 ? "En stock" : "Rupture de stock"}
              </span>

              <p className="text-gray-500 text-base font-normal mb-5 mt-4">
                {product.description}
              </p>
              <ul className="grid gap-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#c1dcdc" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-normal text-base text-gray-900 ">
                    3 color shirt
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#c1dcdc" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-normal text-base text-gray-900 ">
                    Pure Cotton Shirt with 60% as 40%
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="26" height="26" rx="13" fill="#c1dcdc" />
                    <path
                      d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="font-normal text-base text-gray-900 ">
                    all size is available
                  </span>
                </li>
              </ul>

              <div className="flex items-center gap-3">
                <button className="text-center w-full px-5 py-4 rounded-[100px] bg-black flex items-center justify-center font-semibold text-lg text-white shadow-sm transition-all duration-500 hover:bg-indigo-700 hover:shadow-indigo-400">
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
