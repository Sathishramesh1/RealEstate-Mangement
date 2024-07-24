import { Property } from "../model/Property.js";


//create new Properties
export const createNewProperty=async(req,res)=>{

    try {

        const { propertyType, location, price, description } = req.body;
        const newProperty = new Property({ propertyType, location, price, description });
        await newProperty.save();
        res.status(201).json(newProperty);
        
    } catch (error) {
        console.log(error);

        res.status(500).send("Internal server Error");
        
    }


}


// Get all properties
export const getAllProperties = async (req, res) => {
    try {
        const properties = await Property.find();
        res.status(200).json(properties);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

// Update property
export const updateProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const { propertyType, location, price, description } = req.body;
        const updatedProperty = await Property.findByIdAndUpdate(
            id,
            { propertyType, location, price, description },
            { new: true }
        );
        if (!updatedProperty) {
            return res.status(404).send("Property not found");
        }
        res.status(200).json(updatedProperty);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};

// Delete property
export const deleteProperty = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProperty = await Property.findByIdAndDelete(id);
        if (!deletedProperty) {
            return res.status(404).send("Property not found");
        }
        res.status(200).send("Property deleted successfully");
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};