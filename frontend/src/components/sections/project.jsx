export const Project = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-10">Our Project</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          consequatur in quis autem! Iure dicta aspernatur, illo ipsam
          consequatur non quos aliquam porro itaque!
        </p>
      </div>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-between gap-6">
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:shadow-xl hover:scale-105 "
          style={{ flex: "1 1 calc(20% - 1.2rem)" }}
        >
          <img
            src="/images/pexels-brett-sayles-2881232.svg"
            alt=""
            className="w-24 h-24 object-cover mb-4 rounded"
          />
          <h5 className="text-blue-500 text-xl font-semibold mb-2">
            Consultation
          </h5>
          <p className="text-gray-700 mb-4">Lorem, ipsum dolor.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:shadow-xl hover:scale-105"
          style={{ flex: "1 1 calc(20% - 1.2rem)" }}
        >
          <img
            src="/images/pexels-brett-sayles-2881232-1.svg"
            alt=""
            className="w-24 h-24 object-cover mb-4 rounded"
          />
          <h5 className="text-blue-500 text-xl font-semibold mb-2">
           Design
          </h5>
          <p className="text-gray-700 mb-4">Lorem, ipsum dolor.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:shadow-xl hover:scale-105"
          style={{ flex: "1 1 calc(20% - 1.2rem)" }}
        >
          <img
            src="/images/pexels-andres-ayrton-6578391.svg"
            alt=""
            className="w-24 h-24 object-cover mb-4 rounded"
          />
          <h5 className="text-blue-500 text-xl font-semibold mb-2">
          Marketing & design
          </h5>
          <p className="text-gray-700 mb-4">Lorem, ipsum dolor.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:shadow-xl hover:scale-105"
          style={{ flex: "1 1 calc(20% - 1.2rem)" }}
        >
          <img
            src="/images/pexels-brett-sayles-2881232-3.svg"
            alt=""
            className="w-24 h-24 object-cover mb-4 rounded"
          />
          <h5 className="text-blue-500 text-xl font-semibold mb-2">
       Marketing
          </h5>
          <p className="text-gray-700 mb-4">Lorem, ipsum dolor.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
        <div
          className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:shadow-xl hover:scale-105"
          style={{ flex: "1 1 calc(20% - 1.2rem)" }}
        >
          <img
            src="/images/pexels-brett-sayles-2881232-2.svg"
            alt=""
            className="w-24 h-24 object-cover mb-4 rounded"
          />
          <h5 className="text-blue-500 text-xl font-semibold mb-2">
           Consultation
          </h5>
          <p className="text-gray-700 mb-4">Lorem, ipsum dolor.</p>
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
