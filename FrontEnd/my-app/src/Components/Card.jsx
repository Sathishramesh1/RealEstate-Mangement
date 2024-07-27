import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { handleDeleteApi, handleStatusUpdateApi } from '../utilities/globalApi';
import { useNavigate } from 'react-router-dom';

export default function ImgMediaCard({ details, onUpdate }) {
  const [property, setProperty] = React.useState(details);
  const token = localStorage.getItem("x-auth-token");
  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
     
      const data = await handleDeleteApi(token, id);
      console.log("Deleting data:", data);
      if (onUpdate) onUpdate(); // Refresh data after deletion
    } catch (error) {
      console.error("Error while deleting:", error);
    }
  };

  const handleClick = (id) => {
    navigate(`/edit/${id}`);
  };

  const statusUpdateClick = async (id) => {
    try {
      setProperty(prev => ({ ...prev, status: !prev.status })); 
      const data = await handleStatusUpdateApi(token, id);
      console.log("Status update success:", data);
      
      if (onUpdate) onUpdate(); 
    } catch (error) {
      console.error("Error while updating status:", error);
    }
  };

  return (
    <Card sx={{ width: 250 }}>
      <CardMedia
        component="img"
        alt="Property image"
        height="140"
        image="https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {property.propertyType}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Status: {property.status ? "Sold" : "Not Sold"}
          <Button
            size="small"
            variant='contained'
            onClick={() => statusUpdateClick(property._id)}
          >
            Change Status
          </Button>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {property.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: RS {property.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={() => handleClick(property._id)}
        >
          Edit
        </Button>
        <Button
          size="small"
          onClick={() => handleDelete(property._id)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}
