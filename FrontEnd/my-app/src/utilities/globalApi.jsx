import axios from 'axios';

const baseUrl='https://realestate-mangement.onrender.com'


const getAuthToken = () => {
    return localStorage.getItem('x-auth-token');
}

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
        
    );
        
        console.log("Login success:", response.data);
        return response
       
    } catch (error) {
        console.error("unable to Login:", error);
       
    }
};


export const handleGetPropertiesApi = async (token) => {
    try {
       
        const response = await axios.get(`${baseUrl}/api/property/v1/getall`,{
            headers:{
                'x-auth-token':token
            }
        }
       
    );
        
        console.log("Login success:", response.data);
        return response
       
    } catch (error) {
        console.error("unable to Login:", error);
       
    }
};

