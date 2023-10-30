import './Dashboard.css'
import { useState,useEffect } from 'react'; 
import * as React from 'react';
import { Container, Box, Typography } from '@mui/material';
import Image from 'mui-image';
import SearchAppBar from './NavBar.js';
import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.withCredentials = true;

export default function Dashboard() {

    const[results , setResult] = useState('');

    useEffect(() => {
    axios.get('http://127.0.0.1:8000/authen/user/'
            ).then(res => {
                console.log(res.data)
                setResult(res.data);
              }).catch((error) => {
                if (error.response) {
                  console.log(error.response);
                  console.log(error.response.status);
                  console.log(error.response.headers);
                  }
              })
    }, []);
  
    return(
            <div>
            <SearchAppBar/>
            <Container maxWidth={false} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' , alignItems: 'center', backgroundColor: '#bae0fc' , padding: 2, gap: 2 }}>
                <Typography variant='h4' textAlign='center' fontWeight='bold'>Patient Report</Typography>
                <Container sx={{ display: 'flex', flexDirection: 'column', backgroundColor: '#ffffff', border: '2px solid black', padding: 2, width: '75%', borderRadius: '25px' }}>
                    <Box sx={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                        
                        <Typography component='span'>
                            <p className='Dashboard-Header'>
                                Patient Details
                            </p>
                            <p className='Dashboard-Content'>
                                Name: {results.username}<br/>Gender: {results.gender}<br/>Blood Group: {results.bloodgroup}<br/>Addiction Type: {results.addiction}<br/>Doctor Assigned: {}
                            </p>
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '20%'}}>
                            <Image
                                src={results.profilepic}
                                width='90%'
                                fit='contain'
                            />
                            <Typography variant='h5' textAlign='center' fontWeight='medium'></Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Typography component='span'>
                            <p className='Dashboard-Header'>
                                Contact Information
                            </p>
                            <p className='Dashboard-Content'>
                                Email: {results.email}<br/>Alternate Email: {results.altemail}<br/>Phone No: {results.no}<br/>Alternate Phone No: {results.altno}<br/>Address: {results.address}
                            </p>
                        </Typography>
                    </Box>
                </Container>
            </Container>
        </div>
    )
            
}