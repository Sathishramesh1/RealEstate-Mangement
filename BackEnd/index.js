import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { dbconnection } from './database/dbconnection.js';
import { UserRouter } from './Router/UserRouter.js';
import { isAuthorized } from './middleware/isAuthorized.js';
import { PropertyRouter } from './Router/PropertyRouter.js';




//configuration .env files
dotenv.config();



//assign app to express server
const app=express();
app.use(cors());
app.use(express.json());



//database connection
dbconnection();




//ROUTES
app.use("/api/v1/user",UserRouter);
app.use("/api/v1/property",isAuthorized,PropertyRouter);

const PORT=process.env.PORT;



app.get("/",(req,res)=>{
    res.status(200).send("server working");
})





app.listen(PORT,()=>{
    console.log("server running on ",PORT);  
})