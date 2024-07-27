import { Property } from "../model/Property.js";


//create new Properties
export const createNewProperty=async(req,res)=>{

    try {
        const user=req.user._id;
        const { propertyType, location, price, description,imageurl } = req.body;
        const newProperty = new Property({ propertyType, location, price, description,imageurl ,postedBy:user});
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
        const user=req.user._id;
        const properties = await Property.find({postedBy:user});
        res.status(200).json(properties);
    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
};




// Get a properties
export const getProperty = async (req, res) => {
    try {
        const user=req.user._id;
        const id=req.params.id;
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).json({ message: 'Property not found' });
        }

        res.json(property);
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


export const statusUpdate = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    try {
        const property = await Property.findById(id);
        if (!property) {
            return res.status(404).send("Property not found");
        }

        property.status = status;
        await property.save();

        res.status(200).send("Property status updated successfully");
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