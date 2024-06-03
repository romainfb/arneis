"use client";

const ProductDetailsCardSkeleton = ({ product }) => {
  return (
    <section className="w-full h-96 flex items-center px-20 my-60 md:space-x-20 flex-col md:flex-row md:text-left text-center space-y-16 xl:px-80">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-md:px-2 ">
          <div className="img">
            <div className="img-box h-96 rounded-lg mt-6 skeleton"></div>
          </div>
          <div className="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
            <div className="data w-full max-w-xl">
              <p className="text-lg font-medium leading-8 text-indigo-600 mb-4 h-6 w-full skeleton"></p>

              <h2 className="font-manrope font-bold text-3xl leading-10 text-gray-900 mb-2 capitalize h-6 w-full skeleton"></h2>

              <span className="text-sm font-semibold text-gray-900 mb-10 bg-blueprimary py-1 px-2 rounded-3xl bg-accent h-6 w-full skeleton"></span>

              <p className="text-gray-500 text-base font-normal mb-5 mt-4 h-6 w-full skeleton"></p>
              <ul className="grid gap-y-4 mb-8">
                <li>
                  <span className="text-gray-900 font-semibold h-6 w-full skeleton"></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsCardSkeleton;
