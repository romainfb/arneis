export default function Home() {
  return (
    <>
      {/* Main hero section */}
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-center text-center gap-12 xl:px-80 flex-wrap justify-center items-center">
        <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
          Mentions légales
        </h2>

        {/* General informations */}

        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Informations Générales</h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            <strong>Siège social :</strong> 42 Rue de l'Élégance, 75000
            Villeparure, France
            <strong>
              Immatriculée au Registre du Commerce et des Sociétés sous le
              numéro
            </strong>{" "}
            123456789 R.C.S. Paris
            <strong>TVA intracommunautaire :</strong> FR123456789
            <strong>Email :</strong> contact@arneis.com
            <strong>Téléphone :</strong> +33 (0)1 23 45 67 89
          </p>
        </div>

        {/* Directeur de la Publication */}

        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Directeur de la publication</h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            Arneis, représentée par Monsieur Jean Dupont, en sa qualité de
            Président.
          </p>
        </div>

        {/* Hébergement du site */}

        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Hébergement du site</h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            <strong>Le site est hébergé par</strong> Vercel Inc
            <strong>Adresse :</strong> 440 N Barranca Ave #4133 Covina, CA 91723
            <strong>Adresse mail :</strong> privacy@vercel.com
          </p>
        </div>

        {/* Propriété Intellectuelle */}

        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Propriété Intellectuelle</h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            L'ensemble du contenu du site, y compris mais sans s'y limiter, les
            textes, graphiques, logos, images et logiciels, est la propriété
            exclusive d'Arneis Meubles SAS. Toute reproduction, distribution,
            transmission ou utilisation du contenu du site sans autorisation
            écrite préalable est strictement interdite.
          </p>
        </div>

        {/* Protection des Données Personnelles */}

        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">
            Protection des Données Personnelles
          </h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            Conformément à la réglementation sur la protection des données
            personnelles, vous disposez d'un droit d'accès, de rectification et
            de suppression des données vous concernant. Pour exercer ces droits,
            veuillez contacter <strong>contact@arneis.com</strong>.
          </p>
        </div>

        {/* Cookies */}

        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Cookies</h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            Le site utilise des cookies pour améliorer l'expérience de
            l'utilisateur. En naviguant sur le site, vous consentez à
            l'utilisation de cookies conformément à notre Politique de Cookies.
          </p>
        </div>

        {/* Conditions Générales de Vente */}

        <div className="flex w-full text-center flex-wrap mt-12">
          <h2 className="text-3xl w-full mb-8">
            Conditions Générales de Vente
          </h2>

          <p className="text-center text-lg flex flex-col space-y-4 w-full">
            Consultez nos Conditions Générales de Vente pour connaître les
            termes et conditions régissant vos achats sur le site.
          </p>
        </div>
      </section>
    </>
  );
}
