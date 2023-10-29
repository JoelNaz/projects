import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
// import CameraIcon from '@mui/icons-material/PhotoCamera';
// import logo from './logo.png';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import {Link} from 'react-router-dom';
import './Album.css';
// import { Link } from 'react-router-dom';
// import {SignIn} from './SignIn';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      {/* <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '} */}
      VocalCart
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function ResultPage() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative" sx={{p:1}}>
        <Toolbar>
          {/* <logo sx={{ mr: 2 }} /> */}
          {/* <img src='.'/> */}
          {/* <Stack
              // sx={{ pt: 2 }}
              direction="row"
              spacing={10}
              justifyContent={'left'}
            > */}
          <Typography variant="h3" color="inherit" noWrap>
            VocalCart
          </Typography>
          {/* component={Link} to="/login" */}
         <Button variant="outlined,h2" color='inherit'>
          {/* <Route path="/sign-in.js" element={<SignIn />} />*/}
          {/* <Link href="sign-in.js" variant="outlined,h3" color='inherit'> */}
          Sign-in</Button>
          <Button variant="outlined,h2" color='inherit' className='left-align'>Registration</Button>
          
          {/* </Stack> */}
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'white',
            pt: 8,
            pb: 4,
          }}
        >
          <div className='container'>
          <Container maxWidth="80%">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom>
              Result Found!!
            </Typography>
            {/* <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Search here
              <form>
                <input type="search" className='Search'/>
              </form>
            </Typography>
            <Stack
              sx={{ pt: 2 }}
              direction="row"
              spacing={7}
              justifyContent="center"
            >
              <Button variant="contained">Click to on Mic</Button>
              <Button variant="outlined">Search</Button>
            </Stack> */}
          </Container>
          </div>
        </Box>
      
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      product name
                    </Typography>
                    <Typography>
                      Description of product 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">more details</Button>
                    {/* <Button size="small">Ed</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', py:2}} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          VocalCart
        </Typography>
        {/* <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Copyright@VocalCart
        </Typography> */}
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
