const Footer = () => {
  return (
    <footer className="flex w-full h-fit py-10 mt-40">
      <div className="flex justify-center items-center w-full">
        <span className="text-primary font-medium text-sm">
          © {new Date().getFullYear()} Arneis
        </span>
      </div>
    </footer>
  );
};

export default Footer;
