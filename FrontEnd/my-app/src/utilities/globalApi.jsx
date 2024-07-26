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


export const handleGetSelectedPropertyApi = async (token,id) => {
    try {
       
        const response = await axios.get(`${baseUrl}/api/property/v1/get/${id}`,{
            headers:{
                'x-auth-token':token
            }
        }
       
    );
        
        console.log("property details:", response.data);
        return response
       
    } catch (error) {
        console.error("unable to get property:", error);
       
    }
}


export const handleDeleteApi = async (token,id) => {
    try {
       
        const response = await axios.delete(`${baseUrl}/api/property/v1/remove/${id}`,{
            headers:{
                'x-auth-token':token
            }
        }
       
    );
        
        console.log("deleted successfully:", response.data);
        return response
       
    } catch (error) {
        console.error("unable to delete:", error);
       
    }
};




export const handleEditApi = async (user, token, id) => {
    try {
        const response = await axios.put(
            `${baseUrl}/api/property/v1/update/${id}`,
            { ...user },
            {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json' 
                }
            }
        );
        
        console.log("Update success:", response.data);
        return response;
    } catch (error) {
        console.error("Unable to update:", error);
    }
};



export const handleAddApi = async (user, token) => {
    try {
        const response = await axios.post(
            `${baseUrl}/api/property/v1/add`,
            { ...user },
            {
                headers: {
                    'x-auth-token': token,
                    'Content-Type': 'application/json' 
                }
            }
        );
        
        console.log("property added successfully:", response.data);
        return response;
    } catch (error) {
        console.error("Unable to add", error);
    }
};