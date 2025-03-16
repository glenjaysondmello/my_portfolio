const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white text-center py-4 px-6 text-sm md:text-base shadow-lg">
      <p className="transition-all duration-300 hover:text-gray-300">
        © {new Date().getFullYear()} <span className="font-semibold text-blue-400">Glen Jayson Dmello</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
