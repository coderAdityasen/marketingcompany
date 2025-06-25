import { Router } from "express";
import { getAllContacts , submitContactForm } from "../controllers/contact.controller.js";
import  adminverifyjwt  from "../middleware/AdmiVerify.middileware.js"; 

const contactroutes = Router()

contactroutes.route("/getallcontact").get(getAllContacts);
contactroutes.route("/submitcontactform").post( submitContactForm);

export default contactroutes;
