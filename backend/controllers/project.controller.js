import {Project} from '../models/Project.models.js';

export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching projects', error });
  }
};

export const addProject = async (req, res) => {
  try {
    const { image, name, description } = req.body;
    const newProject = new Project({ image, name, description });
    await newProject.save();
    res.status(201).json({ message: 'Project added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error adding project', error });
  }
};
