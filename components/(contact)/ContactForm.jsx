const ContactForm = () => {
  return (
    <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-center text-center gap-12 xl:px-80 flex-wrap justify-center items-center">
      <div class="w-full">
        <div class="flex w-full">
          <div class="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
            <h2 class="text-primary font-manrope text-4xl font-semibold leading-10 mb-11">
              Nous écrire
            </h2>
            <input
              type="text"
              class="w-full h-12 text-gray-600 placeholder-gray-400  shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Nom"
            />
            <input
              type="text"
              class="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Email"
            />
            <input
              type="text"
              class="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Portable"
            />

            <input
              type="text"
              class="w-full h-12 text-gray-600 placeholder-gray-400 bg-transparent text-lg shadow-sm font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-10"
              placeholder="Message"
            />
            <button class="btn w-full h-12 text-white text-base font-semibold leading-6 rounded-full transition-all duration-700 hover:bg-primary bg-primary shadow-sm">
              Envoyer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
