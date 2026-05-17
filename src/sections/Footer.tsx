const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-x-clip">
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between gap-8 items-center">
          <div className="text-white/40">
            &copy; {currentYear}, All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
