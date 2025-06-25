import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Route imports
import projectroute from "./routes/project.routes.js";
import clientroute from "./routes/client.routes.js";
import subscriberroute from "./routes/subscriber.routes.js";
import contactroutes from "./routes/contact.routes.js";
import userroute from "./routes/user.routes.js";

const app = express();

// ✅ CORS Configuration
const allowedOrigin = "https://marketingcompany-eosin.vercel.app";

app.use(
  cors({
    origin: allowedOrigin,
    credentials: true, // required for cookies
  })
);

// ✅ Body parsing and cookie middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// ✅ Test route (optional, for debugging CORS)
app.get("/test-cors", (req, res) => {
  res.json({ success: true, message: "CORS working" });
});

// ✅ Routes
app.use("/project", projectroute);
app.use("/client", clientroute);
app.use("/subscriber", subscriberroute);
app.use("/contact", contactroutes);
app.use("/user", userroute);

// ✅ Export app
export { app };
