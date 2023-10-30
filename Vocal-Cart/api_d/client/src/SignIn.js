import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Typography,
  TextField,
  Paper,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  Grid,
  Container,
  AppBar,
  Toolbar,
  Box,
  LinearProgress,
} from '@mui/material';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/* <Link color="inherit" href="https://mui.com/"> */}
        VocalCart 
      {/* </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {

  const [currentUser, setCurrentUser] = useState(null);

  const handleLogout = (event) => {
    event.preventDefault();
    axios.post(
      "http://127.0.0.1:8000/query/logout/",
      {withCredentials: true}
    ).then(function(res) {
      setCurrentUser(false);
    });
    alert("You are logged out")
  }

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.currentTarget);
    
    
    const email = formData.get('email');
    const password = formData.get('password');

    
    formData.append('email', email);
    formData.append('password', password);

    try {
      const response = await axios.post('http://127.0.0.1:8000/query/login/', formData);

     
      console.log(response.data); 
    } catch (error) {
     
      console.error('Error during login:', error);
    }


    console.log({
      email: formData.get('email'),
      password: formData.get('password'),
    });

    navigate('/');
    alert('You Are Successfully Logged In')

  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <AppBar position="static">
        <Toolbar>
          <MenuIcon />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            VocalCart
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 2 }}>
            <Button color="inherit" component={Link} to="/signin">
              Sign In
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
            
            <Button color="inherit" onClick={handleLogout} >Signout</Button>
        
    
          </Box>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="xs" sx={{paddingTop:2,marginTop:15,paddingBottom:1}}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 4, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}