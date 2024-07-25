import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import { handleGetPropertiesApi } from '../utilities/globalApi';

function HomePage() {
const [data,setData]=useState([1,2,3,4,5]);  

useEffect(()=>{

const fetchData=async()=>{
try {
  const token =localStorage.getItem('x-auth-token');
  const data=await handleGetPropertiesApi(token);

  console.log(data,"properties data from homepage")

  
} catch (error) {
  console.log(error,"error in fetching");
  
}

}
fetchData();

},[])



  
  return (
    <>
    <Navbar>
      <div className='home_page_container'>
       
  
      </div>

        
    </Navbar>

    </>
  )
}

export default HomePage