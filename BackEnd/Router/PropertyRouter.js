import express from "express";
import { createNewProperty, deleteProperty, getAllProperties, updateProperty } from "../Controllers/PropertyController.js";


const router = express.Router();

// Route to create a new property
router.post("/add", createNewProperty);


// Route to get all properties
router.get("/properties", getAllProperties);

// Route to update a property
router.put("/properties/:id", updateProperty);

// Route to delete a property
router.delete("/properties/:id", deleteProperty);


export { router as PropertyRouter};
