import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AppBar from '@mui/material/AppBar';
import Image from 'mui-image'
import Box from '@mui/material/Box';
import RegistrationPage from './Registration';
import { Link as RouterLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;




const MenuTypography = styled(Typography)`
text-align: left;
margin: 6px;
`;

const StyledLink = styled(Link)`
color: black;
text-decoration: none;
`

function BasicMenu() {




    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [isAdmin, setIsAdmin] = useState();
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      axios.get("http://127.0.0.1:8000/authen/user")
      .then((response) =>
      {if(response.data.is_centeradmin==true)
        {
          setIsAdmin(true);
        }
        setCurrentUser(true);
        
      })
      .catch(function(error) {
        setCurrentUser(false);
        setIsAdmin(false);
      });
    }, []);

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
            sx={{ mr: 2, color: '#000000', fontSize: 40 }}
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
          <MenuItem > About Us</MenuItem>
          <Divider />
          <MenuItem > Take a Pledge</MenuItem>
          <Divider/>
          <MenuItem> Gallery</MenuItem>
          <MenuItem onClick={handleClose}>Photo Gallery</MenuItem>
          <MenuItem onClick={handleClose}>Video Gallery</MenuItem>
          <Divider/>
          
          {currentUser?isAdmin?
          <MenuItem>
            <StyledLink component={RouterLink} to="/admindashboard" > Admin Dashboard </StyledLink>
          </MenuItem>
          :
          <MenuItem> 
            <StyledLink component={RouterLink} to="/dashboard" > User Dashboard </StyledLink>
          </MenuItem>:''
          }
          
          
          
        </Menu>
      </div>
    );
}

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    //backgroundColor: alpha(theme.palette.common.white, 0.15),
    backgroundColor: alpha(theme.palette.common.black, 0.25),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  
  /*function LoginButton() {
    return(
      <Button variant="contained" sx={{ backgroundColor: '#8dcdfb', color: '#000000', ml: 1 }} component={Link} to="/login" onClick={toggleLogin}>Login</Button>
    );
  }

  function LogoutButton() {
    return(
      <Button variant="contained" sx={{ backgroundColor: '#8dcdfb', color: '#000000', ml: 1 }} component={Link} to="/login" onClick={toggleLogin} >Logout</Button>
    );
  }

  function RegistrationButton() {
    return(
      <Button variant="contained" sx={{ backgroundColor: '#8dcdfb', color: '#000000', ml: 1 }} component={Link} to="/register" >Register</Button>
    );
  }*/
  
export default function SearchAppBar() {

    const [isLoggedIn, setLogin] = React.useState(false);
    const [currentUser, setCurrentUser] = useState();
    const navigate = useNavigate();

    useEffect(() => {
      axios.get("http://127.0.0.1:8000/authen/user")
      .then(function(res) {
        setCurrentUser(true);})
      .catch(function(error) {
        setCurrentUser(false);
      });
    }, []
    
    );

    const handleLogout = (event) => {
      event.preventDefault();
      axios.post(
        "http://127.0.0.1:8000/authen/logout/",
        {withCredentials: true}
      ).then(function(res) {
        setCurrentUser(false);
      });
      alert("You are logged out")
    }



    const toggleLogin = () => {
      setCurrentUser(!currentUser);
    }

    const LoginButton = () => {
        return(
            <Button variant="contained" sx={{ backgroundColor: '#8dcdfb', color: '#000000', ml: 1 }} component={RouterLink} to="/login" >Login</Button>
        );
    }

    const LogoutButton = () => {
        return(
            <Button variant="contained" sx={{ backgroundColor: '#8dcdfb', color: '#000000', ml: 1 }} onClick={handleLogout} >Logout</Button>
        );
    }

    const RegistrationButton = () => {
        return(
            <Button variant="contained" sx={{ backgroundColor: '#8dcdfb', color: '#000000', ml: 1 }} component={RouterLink} to="/register" >Register</Button>
        );
    }

    return (
      <Box sx={{ flexGrow: 1 }}>

        <Box sx={{ backgroundColor: '#00499e' }}>
            <Typography color='#ffffff' sx={{ padding: 0.2, pr: 1, pl: 1, ml: 3 }} align='center'>
                <Link component={RouterLink} to="https://socialjustice.gov.in/schemes/42#:~:text=Under%20this%20scheme%2C%20financial%20assistance,cum%2Dde%2Daddiction%20camps%20" color='inherit'>
                    Skip to Main Content
                </Link>
                <span style={{ float: 'right' }}>
                    हिन्दी
                </span>
            </Typography>
        </Box>

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
            </IconButton>*/}
            <BasicMenu />

            <Image
              src="/static/images/Nirog.png"
              width="6%"
              style={{ padding: 2, }}
            />
            
            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/1200px-Emblem_of_India.svg.png" //Path relative to public directory!
              bgColor="{primary.main}"
              width="4%"
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
                sx={{ fontWeight: 'bold'}}
              >
                Nirog Bharat Abhiyan
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: 'medium', color: '#000000'}}
                /*variant='h5'
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}*/
  
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

            {currentUser
              ? <LogoutButton></LogoutButton>
              : <>
                  <RegistrationButton/>
                  <LoginButton/>
                </>
            }

            <Image 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/G20_India_2023_logo.svg/2560px-G20_India_2023_logo.svg.png"
              width="8%"
              sx={{ ml: 2 }}
            />
          </Toolbar>
          <marquee style={{ backgroundColor: '#f0975c' }}>National Toll-Free Deaddiction Helpline: 14446</marquee>
        </AppBar>
      </Box>
    );
  }