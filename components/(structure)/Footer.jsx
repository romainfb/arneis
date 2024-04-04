import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex w-full h-fit py-10 mt-40">
      <div className="flex justify-center items-center w-full flex-col space-y-2">
        <span className="text-primary font-medium text-sm">
          © {new Date().getFullYear()} Arneis
        </span>
        <span className="text-primary font-medium text-sm">
          <Link href="/legal-mentions">Mentions légales</Link>
        </span>
        <span className="text-primary font-medium text-sm">
          <Link href="/cgu">Conditions Générales d'Utilisation</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
