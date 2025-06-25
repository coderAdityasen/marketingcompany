import { About } from "./sections/about";
import { Client } from "./sections/client";
import { Project } from "./sections/project";

export const Section = () => {
  return (
    <section className="pt-10 relative px-8 min-h-[calc(100vh-20px)]   ">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8  ">
        {/* Text Section - Left */}
        <div className="md:w-1/2 space-y-7 mt-[10rem]">
          <h1 className="text-4xl font-bold text-blue-500">
            Not Your Average Realtor
          </h1>
          <p className="text-gray-700 md:w-2/3 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            corrupti doloremque explicabo a maxime non mollitia placeat!
            Corrupti omnis, unde rem harum saepe eveniet tenetur neque voluptas
            error, praesentium quod numquam sint nisi. Unde.
          </p>
        </div>

        {/* Image Section - Right */}
        <div className="">
          <img
            src="/images/Ellipse 11.svg"
            alt=""
            className="w-[20rem] absolute top-[10rem] right-[25rem] "
          />
          <img
            src="/images/Ellipse 12.svg"
            alt=""
            className="w-[14rem] absolute top-[5rem] right-[12rem]"
          />
          <img
            src="/images/Ellipse 13.svg"
            alt=""
            className="w-[15rem] absolute top-[20rem] right-[11rem]"
          />
        </div>
      </div>

      <section className="pt-[13rem] px-4 md:px-8  mb-20 ">
        {/* Heading */}
        <div className="text-center mb-12 relative">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-500 capitalize inline-block">
            why choose us?
          </h1>

          {/* Underline bar centered under heading */}
          <div className="h-1 w-24 bg-blue-500 mx-auto mt-2 rounded-full"></div>
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto mt-[6rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="group flex flex-col items-center text-center p-5 hover:shadow-md transition duration-300 rounded-lg hover:text-blue-500">
            {/* Logo with group-hover background change */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center transition group-hover:bg-gray-200">
              <img
                src="/icons/circle-dollar-sign.svg"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>

            <h5 className="text-xl font-semibold mb-2 mt-4">Potential ROI</h5>
            <p className="text-gray-600">
              We bring your vision to life with unique and modern design
              solutions tailored to you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group flex flex-col items-center text-center p-5 hover:shadow-md transition duration-300 rounded-lg hover:text-blue-500">
            {/* Logo with group-hover background change */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center transition group-hover:bg-gray-200">
              <img
                src="/icons/paintbrush-2.svg"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>

            <h5 className="text-xl font-semibold mb-2 mt-4 ">Design</h5>
            <p className="text-gray-600">
              We bring your vision to life with unique and modern design
              solutions tailored to you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group flex flex-col items-center text-center p-5 hover:shadow-md transition duration-300 rounded-lg hover:text-blue-500">
            {/* Logo with group-hover background change */}
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex items-center justify-center transition group-hover:bg-gray-200">
              <img src="/icons/home.svg" alt="Logo" className="w-8 h-8" />
            </div>

            <h5 className="text-xl font-semibold mb-2 mt-4">Marketing</h5>
            <p className="text-gray-600">
              We bring your vision to life with unique and modern design
              solutions tailored to you.
            </p>
          </div>
        </div>
      </section>

      <About />
      <Project />
      <Client />
    </section>
  );
};
