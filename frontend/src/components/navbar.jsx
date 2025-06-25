export const Navbar = () => {
  return (
    <nav className="py-3 bg-white/70 backdrop-blur-md top-0 w-full z-30 shadow sticky">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-xl font-semibold text-black"><img src="/images/logo.svg" alt="" className="w-[10rem]" /></div>

        <div>
          <ul className="flex space-x-8 items-center">
            <li>
              <a href="#" className="text-black hover:text-blue-500 transition">Home</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-500 transition">Service</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-500 transition">About Product</a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-blue-500 transition">Testimonials</a>
            </li>
            <li>
              <button className="bg-orange-600 hover:bg-orange-500 text-white px-4 py-2 rounded transition">
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
