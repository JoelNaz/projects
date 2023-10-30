import './App.css';
import Button from '@mui/material/Button';
import { BrowserRouter as Router, Route, Routes, Link as RouterLink } from "react-router-dom"
import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Footer from './Footer.js';
import Image from 'mui-image'
import AdminDashboard from './AdminDashboard.js';
import CADashboard from './CADComponents/CADashboard.js';
import Container from '@mui/material/Container';

import ChildCareOutlinedIcon from '@mui/icons-material/ChildCareOutlined';
import FemaleOutlinedIcon from '@mui/icons-material/FemaleOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';

import "bootstrap/dist/css/bootstrap.min.css";
import SignInSide from './Login';

import SearchAppBar from './NavBar.js';
import PledgePage from './PledgePage';
import RegistrationPage from './Registration.js'
import Dashboard from './Dashboard';
import { Link } from '@mui/material';


const theme = createTheme();

/*const theme = createTheme({
  palette: {
    primary: {
      main: '#00e0aa',
      light: '#b5f9a0',
      dark: '#00a568'
    },
    secondary: {
      main: '#e2ed1d',
      /*light:
      dark:*//*
    }
  },
});*/

function Carousel() {
  return(
    <>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="10000">
            <img src="static/images/1.jpg" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src="static/images/2.jpg" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>
          <div className="carousel-item">
            <img src="static/images/3.jpg" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5></h5>
              <p></p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

/*function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon 
          size="large"
          edge="start"
          aria-label="open drawer"
          sx={{ mr: 2, color: '#3c3c3c', fontSize: 50 }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <Divider />
        <MenuTypography >About Us</MenuTypography>
        <Divider />
        <MenuTypography >Take a Pledge</MenuTypography>
        <Divider/>
        <MenuTypography>Gallery</MenuTypography>
        <MenuItem onClick={handleClose}>Photo Gallery</MenuItem>
        <MenuItem onClick={handleClose}>Video Gallery</MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
      </Menu>
    </div>
  );
}

const MenuTypography = styled(Typography)`
text-align: left;
margin: 6px;
`;

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  //backgroundColor: alpha(theme.palette.common.white, 0.15),
  backgroundColor: alpha(theme.palette.common.white, 0.60),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.70),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function LoginButton() {
  return(
    <Button variant="contained" sx={{ backgroundColor: '#c5ecc3', ml: 2 }}>Login</Button>
  );
}

function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {/*<IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>*//*}
          <BasicMenu />
          
          <Image 
            src="/images/Emblem_of_India.svg" //Path relative to public directory!
            bgColor="{primary.main}"
            width="3%"
            style={{padding: 5, }}
          
          />

          <Typography
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, p: 0.5 , ml: 1}}
          >
            <Typography
              variant="h4"
              /*variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}*/
              /*sx={{ fontWeight: 'bold'}}
            >
              Nasha Mukht Bharat Abhiyan
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: 'medium', color: '#3c3c3c'}}
              /*variant='h5'
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}*/
/*
            >
              Ministry of Social Justice & Empowerment, Govt. of India
            </Typography>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>

          <LoginButton/>

          <Image 
            src="/images/G20_India_2023_Logo.webp"
            width="8%"
            sx={{ ml: 2 }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}*/

const StyledTypography = styled(Typography)`
  font-weight: bold;
`;

const StyledBox = styled(Box)`
  background-image: radial-gradient(circle, #2097e1 10%, #004a95);
  padding: 2%;
  width: 40%;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
`

function MainContentDisplay() {
  return(
    <>
      <Container maxWidth={false} sx={{ display: 'flex', width: '100%', height: '60vh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: 3, backgroundColor: '#ffffff'}}>
        <Container sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
          <StyledBox component={RouterLink} to='/pledge'> 
            <Typography variant='h6'  align='center'>Take a Pledge<br/>51290 Pledges Taken</Typography>
          </StyledBox>
          <StyledBox component={RouterLink}>
            <Typography variant='h6' align='center'>Nearest Nasha Mukti<br/>Center</Typography>
          </StyledBox>
        </Container>
        <Container sx={{ display: 'flex' , width: '100%', height: '50%', justifyContent: 'space-around', alignItems: 'center' }}>
          <Box className="abhyanStatisticsBox">
            <ChildCareOutlinedIcon sx={{ fontSize: '7em' }}/>
            <StyledTypography>33623250+<br/>Youth Reached Out</StyledTypography>
          </Box>
          <Box className='abhyanStatisticsBox'>
            <FemaleOutlinedIcon sx={{ fontSize: '7em' }}/>
            <StyledTypography>22453257+<br/>Woman Reached Out</StyledTypography>
          </Box>
          <Box className='abhyanStatisticsBox'>
            <SchoolOutlinedIcon sx={{ fontSize: '7em' }}/>
            <StyledTypography>325984+<br/>Educational Institutes Covered</StyledTypography>
          </Box>
          <Box className='abhyanStatisticsBox'>
            <PeopleOutlineOutlinedIcon sx={{ fontSize: '7em' }}/>
            <StyledTypography>106156730+<br/>Total People Reached Out</StyledTypography>
          </Box>
        </Container>
      </Container>
    </>
  );
}

function WelcomeContent() {
  return(
    <>
      <Container maxWidth={false} sx={{ backgroundImage: 'linear-gradient(to top left, #E233FF, #FF6B00)', padding: '2%'}}>
        <Typography sx={{ color: '#ffffff', fontSize: '50px', textAlign: 'center',}}>Welcome to Nirog Bharat Abhiyaan!</Typography>
        <Box sx={{ display: 'flex', backgroundColor: 'inherit', width: '100%', justifyContent: 'center', pt: 2 }}> 
          {/*<Image src='static/images/NMBA_Logo.png' width='15%'/>*/}
          <Image src='static/images/Nirog.png' width='12%' />
        </Box>
        <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '5%', padding: '0%' }}>
          <Box sx={{ width: '75%' , color: '#ffffff'}}>  
            <Typography textAlign='justify'>
              Drug Addiction is emerging to be a serious concern in the country, especially in the younger  generation leading to dangerous consequences not just for the person using drugs, but on the family and society at large. Drug abuse has resulted in an increase in crime rate and had an overall detrimental impact on society. Prevention has proven to be the most effective strategy to counter this problem.

              The Ministry of Social Justice & Empowerment is the nodal ministry for Drug Demand Reduction in the country and under its interventions it coordinates, implements and monitors several interventions like prevention, assessment of extent of the problem, treatment and rehabilitation of users, after care and follow up, dissemination of information among the public and generation of awareness in the community
            </Typography>

            <Typography textAlign='justify' sx={{ fontWeight: 'medium' , mt: 2 }}>"If we have to save coming generations of the country then we must keep them away from drugs. Keeping this is mind, The 'Nasha Mukht Bharat Abhiyan' was launched on 15 August, 2020" - Shri Narendra Modi </Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection: 'column', padding: 2, width: '30%', justifyContent: 'center', alignItems: 'center', backgroundColor: 'inherit', gap: 2 }}>
            <Image src='static/images/Modiji.png' width='60%'/>
            <Typography sx={{ textAlign: 'center', fontWeight: 'medium', color: '#ffffff' }}>Shri Narendra Modi<br/>Prime Minister of India</Typography>
          </Box>
        </Container>
      </Container>
    </>
  );
}


function ObjectiveDisplay() {
  return(
    <>
      <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#c065dc', color: 'white', gap: 2, padding: 2}}>
        <Link sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '25%' }} component={RouterLink} to="https://www.google.com/maps/d/viewer?mid=1tdLtmShkciGDV57B25ZpzI_Mp6CDiN7U&ll=23.65618657066699%2C85.93051471425989&z=5" >
          <Image src='https://nmba.dosje.gov.in/assets/images/indianMap.png' width='100%'/>
        </Link>
        <Typography variant='h3' fontWeight="bold">Objectives of the Abhiyaan</Typography>
        <Typography variant='h6' fontWeight='normal'>Nasha Mukt Bharat Abhiyaan intends to reach out to the masses and spread awareness about substance abuse through various activities like:</Typography>
        <ul className='objectives-list'>
          <li>Awareness generation programmes</li>
          <li>Focus on higher educational Institutions, university campuses and schools</li>
          <li>Reaching out into the Community and identifying dependent population</li>
          <li>Focus on counseling and treatment facilities in hospitals and rehabilitation centres which have been geo-tagged</li>
          <li>Capacity building programmes for a service providers</li>
        </ul>
      </Container>
    </>
  );
}



function App() {
  return(
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={[<SearchAppBar/>,<MainContentDisplay/>,<WelcomeContent/>,<Carousel/>,<ObjectiveDisplay/>,<Footer/>]} />
          <Route path="/login" element={<SignInSide />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admindashboard" element={<AdminDashboard/>} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/pledge" element={<PledgePage />} />
          <Route path="/sa" element={<CADashboard />} />
          {/*<Route path="/dashboard"element={<Dashboard/>} />*/}
        </Routes>
        </Router>
        
    </ThemeProvider>
  )
}

export default App;
