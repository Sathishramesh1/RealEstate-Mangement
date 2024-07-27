import express from "express";
import { createNewProperty, deleteProperty, getAllProperties, getProperty, statusUpdate, updateProperty } from "../Controllers/PropertyController.js";


const router = express.Router();

// Route to create a new property
router.post("/add", createNewProperty);


// Route to get all properties
router.get("/getall", getAllProperties);


router.get("/get/:id",getProperty)

// Route to update a property
router.put("/update/:id", updateProperty);


// Route to update status property
router.put("/status/:id", statusUpdate);




// Route to delete a property
router.delete("/remove/:id", deleteProperty);


export { router as PropertyRouter};
