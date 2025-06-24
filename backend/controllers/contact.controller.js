import {ContactForm} from "../models/ContactForm.models.js"

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactForm.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching contact data', error });
  }
};

export const submitContactForm = async (req, res) => {
  try {
    const { fullName, email, mobile, city } = req.body;
    const newContact = new ContactForm({ fullName, email, mobile, city });
    await newContact.save();
    res.status(201).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting contact form', error });
  }
};
