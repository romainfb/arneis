import Footer from "@/components/(structure)/Footer";
import Header from "@/components/(structure)/Header";

export default function Home() {
  return (
    <>
      <Header />

      {/* Main hero section */}

      <section className="w-full h-96 flex items-center px-20 my-40 md:space-x-20 flex-col md:flex-row md:text-left text-center space-y-16 xl:px-80">
        <div className="flex flex-col">
          {/* Text container */}
          <span className="badge badge-outline mb-4 font-medium">
            Nouveautés artisanales
          </span>

          <h1 className="text-primary font-black uppercase text-5xl">
            Solution artisanale{" "}
            <span className="text-secondary">
              pour votre mobilier de qualité
            </span>
          </h1>
          <p className="my-4 text-sm font-medium w-2/3">
            Découvrez notre collection de meubles artisanaux fabriqués avec des
            matériaux de qualité en France par des artisans passionnés.
          </p>
          <div className="flex flex-row w-full justify-center md:justify-start">
            <button className="btn btn-primary rounded-full mr-6">
              Nos produits
            </button>
            <button className="rounded-full text-sm font-semibold">
              Découvrir nos catégories
            </button>
          </div>
        </div>

        {/* Caroussel container */}

        <div className="flex">
          <div className="flex xl:h-[32rem] h-[28rem] xl:w-96 w-72 rounded-t-full rounded-b-[80rem] shadow-[0px_10px_20px_0px_rgba(0,0,0,0.2)] carousel">
            <div className="carousel-item w-full">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/19/01/18/living-room-2155353_1280.jpg"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://cdn.pixabay.com/photo/2016/11/30/08/48/bedroom-1872196_1280.jpg"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
            <div className="carousel-item w-full">
              <img
                src="https://cdn.pixabay.com/photo/2015/04/20/06/46/office-730681_1280.jpg"
                className="w-full object-cover"
                alt="Tailwind CSS Carousel component"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Brand section */}

      <section className="h-fit w-full flex px-20 xl:px-80">
        <div className="flex w-full h-fit justify-center items-center flex-col space-y-14 px-20">
          <h2 className="text-primary font-bold">
            Découvrez nos partenaires de confiance
          </h2>
          <div className="flex h-10 space-x-28 w-full grayscale justify-center">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
              alt=""
              className="w-48 h-full object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
              alt=""
              className="w-48 h-full object-contain"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
              alt=""
              className="w-48 h-full object-contain"
            />
            <img
              src="https://news.microsoft.com/wp-content/uploads/prod/sites/113/2017/06/Microsoft-logo_rgb_c-gray.png"
              alt=""
              className="w-48 h-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* Catégories */}

      <section className="w-full px-20 xl:px-80 my-40">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-primary text-3xl font-semibold">
            Nos catégories
          </h2>
          <p className="text-md text-primary mt-4">
            Découvrez nos différentes catégories de produits
          </p>
          <div className="flex w-full h-fit mt-20 space-x-10">
            <div className="card p-8 w-1/3 h-64 rounded-lg shadow-lg bg-cover bg-primary cursor-pointer">
              <p className="text-white text-2xl flex items-end h-full font-medium">
                Nos bois de chêne
              </p>
            </div>
            <div className="card p-8 w-1/3 h-64 rounded-lg shadow-lg bg-cover bg-primary cursor-pointer">
              <p className="text-white text-2xl flex items-end h-full font-medium">
                Nos bois de bouleau
              </p>
            </div>
            <div className="card p-8 w-1/3 h-64 rounded-lg shadow-lg bg-cover bg-primary cursor-pointer ">
              <p className="text-white text-2xl flex items-end h-full font-medium">
                Nos bois de hêtre
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
