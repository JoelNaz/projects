import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { Button, FormControl, Paper, TextField, createTheme } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Image from 'mui-image';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import Badge from '@mui/material/Badge';
import { ThemeProvider } from '@emotion/react';
import Avatar from '@mui/material/Avatar';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import MasksIcon from '@mui/icons-material/Masks'; 
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import HomeIcon from '@mui/icons-material/Home';
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import BadgeIcon from '@mui/icons-material/Badge';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SmokingRoomsIcon from '@mui/icons-material/SmokingRooms';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SmsIcon from '@mui/icons-material/Sms';

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function CADashboard() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const StyledIconButton = styled(IconButton)`
  background-color: #3c3c3c;
  &:hover {
     
    background-color: #f0f0f0;
  }
  `

  const badgeTheme = createTheme({
    palette: {
      primary: {
        main: '#00bdf4',
      },
      secondary: {
        main: '#00d431',
      },
      error: {
        main: '#fc2a0f'
      },
    },
  });

  /* const searchTheme = createTheme({
    palette: {
      primary: {
        main: '#3c3c3c',
      },
      secondary: {
        main: '#ffffff'
      },
    },
  }); */

  //const redPrimaryColor = theme.palette.primary.dark;

  const StyledButton = styled(Button)`
    border-radius: 5px;
    background-color: #ace8f8;
    color: #3c3c3c;
  `

  const GeneratePaper = styled(Paper)`
    display: flex; 
    flex-direction: column; 
    width: 70%;
    padding: 16px;
    justify-content: center;
    align-items: center;
    gap: 16px;
    background-image: linear-gradient(to top left, #9055FF, #13E2DA);
  `

  const StatPaper = styled(Paper)`
    display: flex;
    align-items: center;
    padding: 4px 12px;
    width: 50%
  `

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box display='flex' sx={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', p: 0.2 }}>
                <Box display='flex' sx={{ gap: 2, alignItems: 'center', width: '10%' }}>
                  <Image src="/static/images/Emblem_of_India.svg" width='25%'/>
                    <Typography variant="h6" noWrap component="div" fontWeight='bold'>
                    Nirog<br/>Bharat
                    </Typography>
                    {/* <Divider orientation='vertical' color='#ffffff' flexItem sx={{ width: '10px' }} /> */}
                    {/* <div style={{ borderLeft: '4px solid white' }}></div> */}
                </Box>
                <Box display='flex' width='50%' sx={{ py: 0.2, backgroundColor: '#ffffff', borderRadius: '5px', justifyContent: 'center', alignItems: 'center'}}>
                <TextField id="searchbar" label="Search Here" variant="filled" color='primary'
                  sx={{
                    width: '99%'
                  }}

              
                  

                    InputProps={{
                      endAdornment: <InputAdornment position="end"><SearchIcon/></InputAdornment>,
                    }}
                  >
                    Search Here
                  </TextField>
                  </Box>

                
                
                <Box display='flex' sx={{ gap: 2 }}>
                  <ThemeProvider theme={badgeTheme}>
                    <StyledIconButton aria-label="notifications" sx={{ color: '#00bdf4'}}>
                        <Badge badgeContent={21} color="primary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                            <NotificationsNoneOutlinedIcon />
                        </Badge>
                    </StyledIconButton>
                    <StyledIconButton aria-label="messages" sx={{ color : '#00d431' }}>
                        <Badge badgeContent={53} color="secondary" anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                            <MessageOutlinedIcon />
                        </Badge>
                    </StyledIconButton>
                    <StyledIconButton aria-label="settings" sx={{ color: '#fc2a0f'}}>
                        <Badge badgeContent={19}  color='error' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                            <SettingsOutlinedIcon />
                        </Badge>
                    </StyledIconButton>
                  </ThemeProvider>
                  <div style={{ borderLeft: '4px solid white' }}></div>
                  <Box display='flex' sx={{ justifyContent: 'center', alignItems: 'center', gap: 1, ml: 4 }}>
                    <Typography>Hello, Admin</Typography>
                    <Avatar alt="Admin Vedant" src="/static/images/avatar/1.jpg" />
                  </Box>
                </Box>
                
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography sx={{ position: 'relative', marginRight: 'auto', ml: 1 }} >
            CA 777
          </Typography>
          <IconButton onClick={handleDrawerClose} sx={{ position: 'relative', marginRight: 1 }}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <ListItem> 
                <Image 
                    src='/static/images/Nirog.png'
                />
            </ListItem>
          {['Dashboard', 'Patient List', 'Doctor Details', 'Center Details', 'Analytics', 'Reviews', 'Addiction Types', 'Rehab Details', 'Calendar', 'Chatbot', 'Logout'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block', marginTop: index === 10 ? 'auto' : undefined }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  { index === 0 && <HomeIcon /> }
                  { index === 1 && <RecentActorsIcon/> }
                  { index === 2 && <BadgeIcon/> }
                  { index === 3 && <LocationCityIcon/> }
                  { index === 4 && <AnalyticsIcon/> }
                  { index === 5 && <RateReviewIcon/> }
                  { index === 6 && <SmokingRoomsIcon/> }
                  { index === 7 && <BusinessIcon/> }
                  { index === 8 && <CalendarMonthIcon/> }
                  { index === 9 && <SmsIcon/> }
                  { index === 10 && <LogoutIcon/> }
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
          {/* <ListItem disablePadding sx={{ display: 'block', marginTop: 'auto' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  <LogoutIcon/>
                </ListItemIcon>
                <ListItemText primary='Logout' sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem> */}
            <Typography align='center' sx={{ fontSize: '12px' ,opacity: open ? 0.75 : 0 }}>Made by Wellness_Warriors</Typography>
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
        {/* <Button sx={{ marginTop: 'auto', marginBottom: 2, minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center', }} startIcon={<LogoutIcon/>}>
            <Typography sx={{ opacity: open ? 1 : 0 }}>
                Logout
            </Typography>
        </Button> */}
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#ADD8E6' }}>
        <DrawerHeader />
        {/* <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
          Convallis convallis tellus id interdum velit laoreet id donec ultrices.
          Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
          nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
          leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
          feugiat vivamus at augue. At augue eget arcu dictum varius duis at
          consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
          sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
          eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
          neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
          tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
          sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
          tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
          gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
          et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
          tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography> */}
        <Box display='flex' sx={{ width: '100%', justifyContent: 'space-between' }}>
          <Box width='65%' sx={{ padding: 4, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6  }}>
            <Box display='flex' width='100%' sx={{ gap: 6 }}>
              <StatPaper>
                <MasksIcon sx={{ fontSize: '96px'}}/>
                <Box sx={{ mr: 'auto', ml: 1}}>
                  <Typography variant='h4'>75</Typography>
                  <Typography fontWeight='medium'>Total No. of Patients</Typography>  
                </Box>
                <ArrowUpwardIcon sx={{ fontSize: '36px', color: '#00c068'}}/>
                <Typography variant='h6'>690%</Typography>
                
              </StatPaper>
              <StatPaper>
              <MedicalServicesIcon sx={{ fontSize: '96px'}}/>
                <Box sx={{ mr: 'auto', ml: 1 }}>
                  <Typography variant='h4'>357</Typography>
                  <Typography fontWeight='medium'>Total No. of Doctors</Typography>  
                </Box>
                <ArrowDownwardIcon sx={{ fontSize: '36px', color: '#f31313'}}/>
                <Typography variant='h6'>12%</Typography>
              </StatPaper>
            </Box>
            <Box display='flex' width='100%' sx={{ gap: 6 }}>
              <StatPaper >
              <LocationCityIcon sx={{ fontSize: '96px'}}/>
                <Box sx={{ mr: 'auto', ml: 1 }}>
                  <Typography variant='h4'>65</Typography>
                  <Typography fontWeight='medium'>Total No. of Centers</Typography> 
                </Box>
                <ArrowUpwardIcon sx={{ fontSize: '36px', color: '#00c068'}}/>
                <Typography variant='h6'>75%</Typography>
              </StatPaper>
              <StatPaper>
              <ContentPasteSearchIcon sx={{ fontSize: '96px'}}/>
                <Box sx={{ mr: 'auto', ml: 1 }}>
                  <Typography variant='h4'>5</Typography>
                  <Typography fontWeight='medium'>Total No. of Addictions</Typography>
                </Box>
                <SwapHorizIcon sx={{ fontSize: '36px', color: '#c2c2c2'}}/>
                <Typography variant='h6'>0%</Typography>  
              </StatPaper>
            </Box>
            

          </Box>
          <Box display='flex' flexDirection='column' width='35%' sx={{ padding: 2, gap: 4, justifyContent: 'center', alignItems: 'center' }}>
            <GeneratePaper>
              <Typography variant='h6'>Organise Rehabs</Typography>
              <StyledButton>Add Rehabs</StyledButton>
            </GeneratePaper>
            <GeneratePaper>
              <Typography variant='h6'>Generate Rehab Reports</Typography>
              <FormControl fullWidth>
                <InputLabel id="filter-label">Filter Period</InputLabel>
                <Select
                  defaultValue={''}
                  labelId="filter-label"
                  id="demo-simple-select"
                  label="Filter Period"
                >
                  <MenuItem value='1'>1</MenuItem>
                  <MenuItem value='2'>2</MenuItem>
                  <MenuItem value='3'>3</MenuItem>
                </Select>
              </FormControl>
              <StyledButton>Generate Report</StyledButton>
            </GeneratePaper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}