import { Router } from "express";
import { getAllClients , addClient } from "../controllers/client.controller.js";
import  adminverifyjwt  from "../middleware/AdmiVerify.middileware.js"; 

const clientroute = Router()

clientroute.route("/getallclient").get(adminverifyjwt , getAllClients);
clientroute.route("/addclient").post(adminverifyjwt , addClient);

export default clientroute;
