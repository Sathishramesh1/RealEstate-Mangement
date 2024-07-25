import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard() {
  return (
    <Card sx={{ width:250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard

        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          Status

        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Edit</Button>
        <Button size="small">Delete</Button>
      </CardActions>
    </Card>
  );
}