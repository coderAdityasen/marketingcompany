import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { baseUrl } from '../utils/apis'

function Dashboard() {
  const [tab, setTab] = useState('projects')
  const [projects, setProjects] = useState([])
  const [clients, setClients] = useState([])
  const [contacts, setContacts] = useState([])
  const [subscribers, setSubscribers] = useState([])
  const [loading , setloading ] = useState(false);

const [newProject, setNewProject] = useState({
  image: null,
  name: '',
  description: ''
})



const handleProjectSubmit = async (e) => {
  e.preventDefault()

  try {
    // Upload to Cloudinary
    const imageFormdata = new FormData()
    imageFormdata.append('file', newProject.image)
    imageFormdata.append('upload_preset', 'adityasenhulala') // your preset

    const cloudRes = await axios.post(
      'https://api.cloudinary.com/v1_1/dj3gpszjr/image/upload',
      imageFormdata
    )

    const imageUrl = cloudRes.data.secure_url

    // Send project data to your backend
    await axios.post(`${baseUrl}/project/addproject`, {
      image: imageUrl,
      name: newProject.name,
      description: newProject.description
    })

    alert("Project added successfully!")
    setNewProject({ image: null, name: '', description: '' })
  } catch (error) {
    console.error("Error adding project:", error)
    alert("Failed to add project.")
  }
}



const [clientForm, setClientForm] = useState({
  image: null,
  name: '',
  description: '',
  designation: ''
});

const handleClientChange = (e) => {
  const { name, value } = e.target;
  setClientForm({ ...clientForm, [name]: value });
};


const handleAddClient = async (e) => {
  e.preventDefault();

  try {
    // Upload image to Cloudinary
    const imageFormdata = new FormData();
    imageFormdata.append('file', clientForm.image);
    imageFormdata.append('upload_preset', 'adityasenhulala'); // your Cloudinary preset

    const cloudRes = await axios.post(
      'https://api.cloudinary.com/v1_1/dj3gpszjr/image/upload',
      imageFormdata
    );

    const imageUrl = cloudRes.data.secure_url;

    // Send data to backend
    await axios.post(`${baseUrl}/client/addclient`, {
      image: imageUrl,
      name: clientForm.name,
      description: clientForm.description,
      designation: clientForm.designation
    });

    alert("Client added successfully!");
    setClientForm({ image: null, name: '', description: '', designation: '' });
    // optionally refetch clients here
  } catch (err) {
    console.error("Error adding client:", err);
    alert("Failed to add client.");
  }
};



  // Fetch data
  useEffect(() => {
    fetchAllData()
  }, [])

  const fetchAllData = async () => {
    try {

		setloading(true);

		const projectdetail = await axios.get(`${baseUrl}/project/getallproject`);
		setProjects(projectdetail.data);

		const contactdetail = await axios.get(
        `${baseUrl}/contact/getallcontact`
      );
	  setContacts(contactdetail.data);

	  const subsdetail = await axios.get(
        `${baseUrl}/subscriber/getallsubscriber`
      );
	  setSubscribers(subsdetail.data);

	  const clientdetail = await axios.get(
        `${baseUrl}/client/getallclient`
      );

	setClients(clientdetail.data);


     setloading(false);
    } catch (error) {
      console.error("Error fetching admin data:", error)
    }
  }


  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
      
      {/* Tabs */}
      <div className="flex gap-4 mb-6">
        {['projects', 'clients', 'contacts', 'subscribers'].map((item) => (
          <button
            key={item}
            onClick={() => setTab(item)}
            className={`px-4 py-2 rounded ${tab === item ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white p-4 rounded shadow-md">
       {tab === 'projects' && (
  <div>
    <h2 className="text-xl font-semibold mb-4">📁 Add New Project</h2>

    {/* Project Form */}
    <form onSubmit={handleProjectSubmit} className="space-y-4 mb-6" encType="multipart/form-data">
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setNewProject({ ...newProject, image: e.target.files[0] })}
        className="block w-full border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Project Name"
        value={newProject.name}
        onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
        className="block w-full border p-2 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={newProject.description}
        onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
        className="block w-full border p-2 rounded"
        required
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Project
      </button>
    </form>

    {/* Display All Projects */}
    <h2 className="text-xl font-semibold mb-2">📋 All Projects</h2>
    <ul>
      {projects.map((p, index) => (
		<>
		<img key={index} src={p.image} alt="" width="50px" />
        <li key={index} className="border-b py-2">{p.name}</li>
       
     </> ))}
    </ul>
  </div>
)}


      {tab === 'clients' && (
  <div>
    <h2 className="text-xl font-semibold mb-4">👥 Client Management</h2>

    {/* Add Client Form */}
    <div className="bg-white p-6 rounded-md shadow mb-8">
      <h3 className="text-lg font-semibold mb-4">Add New Client</h3>
      <form onSubmit={handleAddClient} className="space-y-4" encType="multipart/form-data">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setClientForm({ ...clientForm, image: e.target.files[0] })}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="name"
          placeholder="Client Name"
          value={clientForm.name}
          onChange={handleClientChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <textarea
          name="description"
          placeholder="Client Description"
          value={clientForm.description}
          onChange={handleClientChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <input
          type="text"
          name="designation"
          placeholder="Client Designation (e.g. CEO, Designer)"
          value={clientForm.designation}
          onChange={handleClientChange}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Add Client
        </button>
      </form>
    </div>

    {/* Display Clients in a Table */}
    <div className="overflow-x-auto bg-white rounded-md shadow">
      <table className="min-w-full text-sm text-left text-gray-800">
        <thead className="bg-gray-100 text-xs uppercase">
          <tr>
            <th className="px-6 py-3">Image</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Designation</th>
            <th className="px-6 py-3">Description</th>
          </tr>
        </thead>
        <tbody>
          {clients.length > 0 ? (
            clients.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-6 py-3">
                  <img src={c.image} alt={c.name} className="w-12 h-12 rounded-full object-cover" />
                </td>
                <td className="px-6 py-3">{c.name}</td>
                <td className="px-6 py-3">{c.designation}</td>
                <td className="px-6 py-3">{c.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center px-6 py-4 text-gray-500">
                No clients added yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}


       {tab === 'contacts' && (
  <div>
    <h2 className="text-xl font-semibold mb-4">📬 Contact Form Submissions</h2>
    
    <div className="overflow-x-auto rounded-lg shadow bg-white">
      <table className="min-w-full text-sm text-left text-gray-700">
        <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
          <tr>
            <th className="px-6 py-3">Full Name</th>
            <th className="px-6 py-3">Email</th>
            <th className="px-6 py-3">Mobile</th>
            <th className="px-6 py-3">City</th>
          </tr>
        </thead>
        <tbody>
          {contacts.length > 0 ? (
            contacts.map((c, i) => (
              <tr key={i} className="border-b hover:bg-gray-50">
                <td className="px-6 py-4">{c.fullName}</td>
                <td className="px-6 py-4">{c.email}</td>
                <td className="px-6 py-4">{c.mobile}</td>
                <td className="px-6 py-4">{c.city}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="px-6 py-4 text-center text-gray-500">
                No contact submissions found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  </div>
)}


        {tab === 'subscribers' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Subscribed Users</h2>
            <ul>
              {subscribers.map((s, i) => (
                <li key={i} className="border-b py-2">{s.email}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default Dashboard
