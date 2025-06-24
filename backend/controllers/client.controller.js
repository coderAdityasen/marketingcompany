import { Client } from "../models/Client.models.js";


export const getAllClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching clients', error });
  }
};

export const addClient = async (req, res) => {
  try {
    const { image, name, description, designation } = req.body;
    const newClient = new Client({ image, name, description, designation });
    await newClient.save();
    res.status(201).json({ message: 'Client added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding client', error });
  }
};