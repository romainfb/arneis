export default function Home() {
  return (
    <>
      {/* Main hero section */}
      <section className="w-full h-fit px-20 my-40 flex flex-row md:flex-row md:text-center text-center gap-12 xl:px-80 flex-wrap justify-center items-center">
        <h2 className="title font-bold text-4xl leading-10 mb-8 text-center text-primary">
          Conditions Générales d'Utilisation
        </h2>

        {/* Introduction */}
        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Introduction</h2>
          <p className="text-center text-lg flex flex-col space-y-4">
            Les présentes Conditions Générales d'Utilisation régissent
            l'utilisation de ce site web. En accédant à ce site, vous acceptez
            ces conditions dans leur intégralité. Si vous n'êtes pas d'accord
            avec une partie de ces conditions, vous ne devez pas utiliser ce
            site.
          </p>
        </div>

        {/* Utilisation du Site */}
        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Utilisation du Site</h2>
          <p className="text-center text-lg flex flex-col space-y-4">
            Vous vous engagez à n'utiliser ce site que dans le respect de la
            loi, des bonnes mœurs et des droits des tiers. Vous acceptez de ne
            pas utiliser ce site de manière abusive, frauduleuse ou illicite.
          </p>
        </div>

        {/* Contenu du Site */}
        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Contenu du Site</h2>
          <p className="text-center text-lg flex flex-col space-y-4">
            Le contenu de ce site est fourni à titre informatif uniquement. Nous
            nous efforçons de maintenir le contenu à jour et précis, mais nous
            ne garantissons pas son exhaustivité ou son exactitude.
          </p>
        </div>

        {/* Limitation de Responsabilité */}
        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Limitation de Responsabilité</h2>
          <p className="text-center text-lg flex flex-col space-y-4">
            Nous ne serons en aucun cas responsables de tout dommage direct,
            indirect, accessoire, spécial ou consécutif résultant de
            l'utilisation ou de l'incapacité à utiliser ce site.
          </p>
        </div>

        {/* Modifications */}
        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Modifications</h2>
          <p className="text-center text-lg flex flex-col space-y-4">
            Nous nous réservons le droit de modifier ces Conditions Générales
            d'Utilisation à tout moment. Les modifications entrent en vigueur
            dès leur publication sur ce site. Nous vous recommandons de
            consulter régulièrement ces conditions pour rester informé des
            éventuels changements.
          </p>
        </div>

        {/* Droit Applicable */}
        <div className="flex w-full text-center flex-wrap my-12">
          <h2 className="text-3xl w-full mb-8">Droit Applicable</h2>
          <p className="text-center text-lg flex flex-col space-y-4">
            Ces Conditions Générales d'Utilisation sont régies par les lois en
            vigueur en France. Tout litige relatif à ces conditions sera soumis
            à la compétence exclusive des tribunaux français.
          </p>
        </div>
      </section>
    </>
  );
}
