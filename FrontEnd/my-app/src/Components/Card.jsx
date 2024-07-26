import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { handleDeleteApi } from '../utilities/globalApi';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard({details}) {

const token=localStorage.getItem("x-auth-token");

const navigate=useNavigate();

const handleDelete=async(id)=>{
    try {
        const token=localStorage.getItem("x-auth-token");

        const data=await handleDeleteApi(token,id);
        console.log("deleting data",data);
        
    } catch (error) {
        console.log("while deleing",error);
    }
}


const handleClick=(id)=>{

  navigate(`/edit/${id}`)
  
  
  }



  

  return (
    
    <Card sx={{ width:250 }} >
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {details.propertyType}

        </Typography>
        <Typography gutterBottom variant="h6" component="div">
         status:{details.status?"sold":"Not Sold"}

        </Typography>
        <Typography variant="body2" color="text.secondary">
         {details.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Price:RS {details.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"
        onClick={()=>handleClick(details._id)}
        
        >Edit</Button>
        <Button size="small"
        onClick={()=>handleDelete(details._id)}
        
        >Delete</Button>

<Button size="small"
        
        
        >saleMark</Button>
      </CardActions>
    </Card>
    
  );
}