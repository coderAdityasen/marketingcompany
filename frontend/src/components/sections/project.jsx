import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/apis";
 // Adjust this path if needed

export const Project = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${baseUrl}/project/getallproject`);
      setProjects(response.data); // Assuming backend returns an array of project objects
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Section Heading */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-blue-500 mb-10">Our Projects</h2>
        <p className="text-gray-600 max-w-xl mx-auto mt-2">
          Discover our services that have helped businesses grow through strategy, design, and marketing.
        </p>
      </div>

      {/* Loading State */}
      {loading ? (
        <div className="text-center text-gray-500">Loading projects...</div>
      ) : (
        <div className="flex flex-wrap justify-between gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition transform hover:shadow-xl hover:scale-105"
              style={{ flex: "1 1 calc(20% - 1.2rem)" }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-24 h-24 object-cover mb-4 rounded"
              />
              <h5 className="text-blue-500 text-xl font-semibold mb-2">
                {project.title}
              </h5>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
