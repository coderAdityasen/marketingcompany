import { Router } from "express";
import { getAllSubscribers , addSubscriber } from "../controllers/subscriber.controller.js";
import  adminverifyjwt  from "../middleware/AdmiVerify.middileware.js"; 

const subscriberroute = Router()

subscriberroute.route("/getallsubscriber").get(getAllSubscribers);
subscriberroute.route("/addsubscriber").post( addSubscriber);

export default subscriberroute;
