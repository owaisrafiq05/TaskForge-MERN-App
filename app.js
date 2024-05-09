import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import route from "./routes/index.js";
const app = express();
const PORT = 5000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: "*" }))

const uri = "mongodb+srv://admin:admin@cluster0.oplpgp2.mongodb.net/toDoList"

mongoose.connect(uri)
    .then(() => console.log("mongodb connected!"))
    .catch((error) => console.log("err mongodb", error.message))

app.use(route)


app.get("/",(req,res)=>{
    res.json("Running");
})

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
    console.log("http://localhost:5000");
});