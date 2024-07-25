import axios from 'axios';

const baseUrl='https://realestate-mangement.onrender.com'


export const handleRegisterApi = async (user) => {
    try {
       
        const response = await axios.post(`${baseUrl}/api/user/v1/register`, {
           ...user
        });
        
        console.log("Registration success:", response.data);
       
    } catch (error) {
        console.error("unable to Register new user:", error);
       
    }
};


export const handleLoginApi = async (user) => {
    try {
       
        const response = await axios.post(`${baseUrl}/api/user/v1/login`, {
           ...user
        },
        {
            withCredentials: true 
        }
    );
        
        console.log("Login success:", response.data);
        return response
       
    } catch (error) {
        console.error("unable to Login:", error);
       
    }
};

