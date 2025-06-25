import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/apis";


export const Client = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const response = await axios.get(`${baseUrl}/client/getallclient`);
      setClients(response.data); // expecting an array of client objects
    } catch (error) {
      console.error("Error fetching clients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-600">
          Happy Clients
        </h1>
        <p className="text-gray-600 mt-2">
          Here's what our clients say about us
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading clients...</div>
      ) : (
        <div className="flex flex-wrap justify-center gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg w-full sm:w-[45%] md:w-[30%] transition hover:shadow-xl"
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 mb-2">"{client.description}"</p>
              <h5 className="font-bold text-blue-500">{client.name}</h5>
              <p className="text-sm text-gray-500">{client.designation}</p>
              <p className="text-yellow-400 text-xl mt-2">
                ⭐⭐⭐⭐⭐
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
