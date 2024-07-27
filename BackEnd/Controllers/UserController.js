import * as bcrypt from 'bcrypt'
import {User} from '../model/User.js'
import jwt from 'jsonwebtoken'
import { Property } from '../model/Property.js';



//user login
const Login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        let user= await User.findOne({email:email});

if (!user) {
    return res.status(401).json({ message: "Email is not Registered" });
      }

const passwordMatch = await bcrypt.compare(password, user.password);

if (!passwordMatch) {
         return res.status(401).json({ message: "Wrong Password" });
      }
           
const jwttoken = jwt.sign({id:user._id}, process.env.SECRET_KEY);
        
          res.status(200).json({ jwttoken,message:"login success" });    
    } 
    catch (error) {
        console.log(error);
        res.status(500).send("Internal server Error")
        
    }

}

export {Login}

const Register = async (req, res) => {
    try {
        // Check if this user already exists
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send('That user already exists!');
        }

        // Hash the password
        const { password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the new user
        const newUser = await new User({ ...req.body, password: hashedPassword }).save();

        // Create dummy properties
        const dummyProperties = [
            {
                propertyType: 'Apartment',
                postedBy: newUser._id,
                location: 'New York, NY',
                price: 250000,
                imageurl: 'https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png',
                description: 'Spacious 2-bedroom apartment in the heart of the city.',
            },
            {
                propertyType: 'House',
                postedBy: newUser._id,
                location: 'Los Angeles, CA',
                price: 500000,
                imageurl: 'https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png',
                description: 'Beautiful 3-bedroom house with a garden.',
            },
            {
                propertyType: 'Condo',
                postedBy: newUser._id,
                location: 'Chicago, IL',
                price: 300000,
                imageurl: 'https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png',
                description: 'Modern condo with great amenities.',
            },
            {
                propertyType: 'Studio',
                postedBy: newUser._id,
                location: 'San Francisco, CA',
                price: 200000,
                imageurl: 'https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png',
                description: 'Cozy studio apartment near downtown.',
            }
        ];

        
        await Property.insertMany(dummyProperties);

        return res.status(201).json({
            status: 'success',
            message: 'New user created and dummy properties added',
        });
    } catch (err) {
        console.log('Error in creating new user and properties:', err);
        return res.status(500).send('Internal Error');
    }
};

export { Register };