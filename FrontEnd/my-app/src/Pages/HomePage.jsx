import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { handleGetPropertiesApi } from '../utilities/globalApi';
import { useNavigate } from 'react-router-dom';

function HomePage() {
const [data,setData]=useState([]);  
const navigate=useNavigate();

useEffect(()=>{

const fetchData=async()=>{
try {
  const token =localStorage.getItem('x-auth-token');
  console.log(token, "token")
  const data=await handleGetPropertiesApi(token);

  console.log(data,"properties data from homepage");
  setData(data.data);

  
} catch (error) {
  console.log(error,"error in fetching");
  
}

}
fetchData();

},[data.length])






  
  return (
    <>
    <Navbar>
      <div className='home_page_container'>

      {data.length>0 &&data.map((ele)=>{
        return <Card key={ele._id} details={ele} />
      })}
       
  
      </div>

        
    </Navbar>

    </>
  )
}

export default HomePage