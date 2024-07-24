import express from 'express'
import { Login, Register } from '../Controllers/UserController.js';



const router=express.Router();


//route for login
router.route('/register').post(Register);

//route for login
router.route('/login').post(Login);






export {router as UserRouter}