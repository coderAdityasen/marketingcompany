import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";


const app = express()

app.use(
	cors({
		origin:"https://marketingcompany-eosin.vercel.app",
	  credentials: true,
	})
  );
  
  app.use(express.json({limit: "16kb"}))
  app.use(express.urlencoded({extended: true, limit: "16kb"}))
  app.use(express.static("public"))
  app.use(cookieParser())


//routes


import projectroute from "./routes/project.routes.js";
import clientroute from "./routes/client.routes.js";
import subscriberroute from "./routes/subscriber.routes.js";
import contactroutes from "./routes/contact.routes.js";
import userroute from "./routes/user.routes.js";

app.use("/project" , projectroute);
app.use("/client" , clientroute);
app.use("/subscriber" , subscriberroute);
app.use("/contact" , contactroutes);
app.use("/user" , userroute);




export {app}
