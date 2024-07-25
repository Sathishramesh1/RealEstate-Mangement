import mongoose from "mongoose";

const PropertySchema = new mongoose.Schema({
    propertyType: {
        type: String,
        required: true
    },
    postedBy:{
       type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageurl:{
        type:String,
        required:true
    },
    description: {
        type: String,
        required: true
    },
    status:{
     type:Boolean,
     default:false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Property = mongoose.model("Property", PropertySchema);

export { Property };
