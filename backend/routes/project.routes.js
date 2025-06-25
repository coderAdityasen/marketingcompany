import { Router } from "express";
import { addProject , getAllProjects } from "../controllers/project.controller.js";
import  adminverifyjwt  from "../middleware/AdmiVerify.middileware.js"; 

const projectroute = Router()

projectroute.route("/getallproject").get(getAllProjects);
projectroute.route("/addproject").post(addProject);

export default projectroute;
