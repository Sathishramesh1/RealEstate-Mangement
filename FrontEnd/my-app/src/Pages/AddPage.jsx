import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { handleAddApi, handleEditApi, handleGetPropertiesApi, handleGetSelectedPropertyApi } from '../utilities/globalApi';

const defaultTheme = createTheme();

export default function AddPage() {
 
  const token =localStorage.getItem("x-auth-token");
  const navigate=useNavigate();
  const [details, setDetails] = React.useState({
    propertyType: '',
    location: '',
    description: '',
    price: '',
    imageurl:"https://3.imimg.com/data3/HE/BA/MY-3289884/propery-sale-srvice.png"
  });

  const handleSubmit = (event) => {
    event.preventDefault();
   
    const AddProperty=async()=>{
        try {
           const data=await handleAddApi(details,token);
           console.log("data",data)
          
            
        } catch (error) {
            console.log(error,"error fro unable to add new property");
        }
    }

    AddProperty();
    navigate("/home");

  };

  React.useEffect(() => {

   
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Add New Property
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="propertyType"
              label="Property Type"
              name="propertyType"
              autoComplete="propertyType"
              autoFocus
              value={details.propertyType}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="location"
              label="Location"
              type="text"
              id="location"
              autoComplete="location"
              value={details.location}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description"
              type="text"
              id="description"
              autoComplete="description"
              value={details.description}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="price"
              label="Price"
              type="number"
              id="price"
              autoComplete="price"
              value={details.price}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Add  New Properties
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
