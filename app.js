import express from "express";
import connectDB from "./db/dbconnector.js";
import router from "./routes/allRoutes.js";
import cors from "cors";
import helmet from "helmet";
import dotenv from 'dotenv';
import { register } from "./controllers/auth.js";
import authRoutes from "./routes/auth.js";
import path from "path";
import { fileURLToPath } from "url";
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app=express();
app.use(cors());
app.use(express.json());

// app.use(function(req, res, next) {
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
//     next();
// });

app.use(express.static(path.join(__dirname, "/client/dist")));
app.get("*", function (_, res) {
  res.sendFile(
    path.join(__dirname, "/client/dist/index.html"),
    function (err) {
      res.status(500).send(err);
    }
  );
});



app.post("/auth/register", register);
app.use("/auth", authRoutes);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
const port = process.env.PORT ;
const dburl=process.env.dbUrl
connectDB(dburl);
// app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.use(router)
app.listen(port,()=>{
console.log(`server running at url- http://localhost:${port}`);})