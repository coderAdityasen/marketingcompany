export const About=()=>{
 return<>
 {/* //about us */}
       <section className="pt-[5rem] px-4 md:px-8 mb-20 flex flex-col items-center justify-center">
         <div className="w-full flex flex-wrap justify-center gap-6 mb-12 items-center">
           <img
             src="/images/pexels-andres-ayrton-6578391.svg"
             alt="Image 1"
             className="w-[15rem] h-[15rem] object-cover rounded-lg shadow-lg"
           />
           <img
             src="/images/pexels-brett-sayles-2881232.svg"
             alt="Image 2"
             className="w-[20rem] h-[20rem] object-cover rounded-lg shadow-lg"
           />
           <img
             src="/images/pexels-fauxels-3182834.svg"
             alt="Image 3"
             className="w-[15rem] h-[15rem] object-cover rounded-lg shadow-lg"
           />
         </div>
 
         <div className="max-w-3xl text-center px-4">
           <h1 className="text-4xl font-bold mb-4 text-blue-500">About Us</h1>
           <div className="h-1 w-24 bg-blue-500 mx-auto  rounded-full"></div>
           <p className="text-gray-700 mb-6 mt-10">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quis
             aspernatur inventore maiores quibusdam totam neque maxime commodi
             vel ratione molestiae ullam, possimus, id fuga vero! Laboriosam
             voluptatem repudiandae iste maiores inventore fuga officia.
           </p>
           <button className="bg-white text-black px-6 py-2 rounded border border-blue-500 border-b border-r border-l transition duration-300 hover:border-t hover:border-blue-700 hover:shadow-md hover:bg-white/90">
             Learn More
           </button>
         </div>
       </section></>
}
