export const Client=()=>{
  return<>
  <section className="bg-gray-50 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
            Happy Clients
          </h1>
          <p className="text-gray-600 mt-2">
            Here's what our clients say about us
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Card 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[45%] md:w-[30%] transition hover:shadow-xl">
            <img
              src="/images/Ellipse%2033.svg"
              alt="Client 1"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-2">
              "Absolutely amazing service. Highly recommend!"
            </p>
            <h5 className="font-bold text-blue-500">Anjali Sharma</h5>
            <p className="text-sm text-gray-500">Mumbai, India</p>
            <p className="text-yellow-400 text-xl mt-2">⭐⭐⭐⭐⭐</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[45%] md:w-[30%] transition hover:shadow-xl">
            <img
              src="/images/Ellipse%2031.svg"
              alt="Client 2"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-2">
              "Loved the designs and fast response."
            </p>
            <h5 className="font-bold text-blue-500">Rahul Verma</h5>
            <p className="text-sm text-gray-500">Delhi, India</p>
            <p className="text-yellow-400 text-xl mt-2">⭐⭐⭐⭐</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[45%] md:w-[30%] transition hover:shadow-xl">
            <img
              src="/images/Ellipse%2028.svg"
              alt="Client 3"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-2">
              "Professional and creative team. Will work again!"
            </p>
            <h5 className="font-bold text-blue-500">Sneha Desai</h5>
            <p className="text-sm text-gray-500">Pune, India</p>
            <p className="text-yellow-400 text-xl mt-2">⭐⭐⭐⭐⭐</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[45%] md:w-[30%] transition hover:shadow-xl">
            <img
              src="/images/Ellipse%2029.svg"
              alt="Client 4"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-2">
              "Timely delivery and beautiful output."
            </p>
            <h5 className="font-bold text-blue-500">Vikas Mehta</h5>
            <p className="text-sm text-gray-500">Chandigarh, India</p>
            <p className="text-yellow-400 text-xl mt-2">⭐⭐⭐⭐</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[45%] md:w-[30%] transition hover:shadow-xl">
            <img
              src="/images/Ellipse%2035.svg"
              alt="Client 5"
              className="w-16 h-16 rounded-full mx-auto mb-4"
            />
            <p className="text-gray-700 mb-2">
              "The consultation session was super helpful."
            </p>
            <h5 className="font-bold text-blue-500">Priya Iyer</h5>
            <p className="text-sm text-gray-500">Bangalore, India</p>
            <p className="text-yellow-400 text-xl mt-2">⭐⭐⭐⭐⭐</p>
          </div>
        </div>
      </section></>
}
