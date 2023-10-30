import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { FormControl } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import Container from '@mui/material/Container';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import axios from 'axios';

export default function Read(props) {

    const[results , setResult] = useState('');

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/authen/admincenter/'
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











    const [anchorEl, setAnchorEl] = React.useState(null);

    const[idData , setIdData] = useState('');

    const handleClick = (event, data) => {
        
        setAnchorEl(event.currentTarget);

            axios.get(`http://127.0.0.1:8000/api/${data}/`
                    ).then(res => {
                        console.log(res.data)
                        setIdData(res.data);
                      }).catch((error) => {
                        if (error.response) {
                          console.log(error.response);
                          console.log(error.response.status);
                          console.log(error.response.headers);
                          }
                      })
            

            console.log(idData);

        
    };



    {/*const setData = (data) => {

        let { id, name, addiction, num1 } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Addiction', addiction);
        localStorage.setItem('Num1', num1);
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
        setAddiction(localStorage.getItem('Addiction'))
        setNum(localStorage.getItem('Num1'))
    };*/}

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const [APIData, setAPIData] = useState([]);

    useEffect(() => {
        axios
            .get(`https://650c352d47af3fd22f674565.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const [name, setName] = useState('');
    const [ID, setID] = useState(null);

    

    /*useEffect(() => {
        setID(localStorage.getItem('ID'))
        setName(localStorage.getItem('Name'));
    }, []);*/

    const updateAPIData = (e) => {
        e.preventDefault();
        axios
            .put(`https://650c352d47af3fd22f674565.mockapi.io/fakeData/${ID}`, {
                name,
                addiction,
                num1
            })
            .then(() => {
                getData();
        });
        handleClose();
    }

    const getData = () => {
        axios
            .get(`https://650c352d47af3fd22f674565.mockapi.io/fakeData`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (ID) => {
        axios
            .delete(`https://650c352d47af3fd22f674565.mockapi.io/fakeData/${ID}`)
            .then(() => {
                getData();
        })
    }

    const [num1, setNum] = React.useState('');
  
	const [num2, setAltNum] = React.useState('');
  
	const [email1, setEmail] = React.useState('');
  
	const [email2, setAltEmail] = React.useState('');
  
	const [pass, setPass] = React.useState('');

    const [aadhaar, setAadhaar] = React.useState('');

    const [profilepic, setProfilePic] = React.useState('');

	const handleName = (name) => {
		setName(name);
	};

	const handleNum1 = (num1) => {
		setNum(num1);
	};

	const handleNum2 = (num2) => {
		setAltNum(num2);
	};

	const handleEmail = (email1) => {
		setEmail(email1);
	};

	const handleAltEmail = (email2) => {
		setAltEmail(email2);
	};

	const handlePass = (pass) => {
		setPass(pass);
	};

    const handleAadhaar = (aadhaar) => {
        setAadhaar(aadhaar);
    };

    const handleProfilePic = (profilepic) => {
    setProfilePic(profilepic);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Registration: ' + regtype)
        console.log('Name: ' + name)
        console.log('Num1: ' + num1)
        console.log('Num2: ' + num2)
        console.log('Email1: ' + email1)
        console.log('Email2: ' + email2)
        console.log('Addiction: ' + addiction)
        console.log('Pass: ' + pass)
        console.log('Aadhaar: ' + aadhaar)
        console.log('Profile Pic: ' + profilepic)
        console.log('Address: ' + address)
        console.log('State: ' + state)
        console.log('Blood Group: ' + bloodtype)
        console.log('Gender: ' + gender)
    }

    const [regtype, setRegType] = React.useState();

    const handleChange = (regtype) => {
        setRegType(regtype);
    };

    const [bloodtype, setBloodType] = React.useState('');

    const handleChangeBlood = (bloodtype) => {
        setBloodType(bloodtype);
    };

    const [addiction, setAddiction] = React.useState('');

    const handleChangeAddiction = (addiction) => {
        setAddiction(addiction);
    };

    const [address, setAddress] = React.useState('');
    const handleChangeAddress = (address) =>{
        setAddress(address);
    };

    const [state, setState] = React.useState('');
    
    const handleChangeState = (state) => {
        setState(state);
    };

    const [gender, setGender] = React.useState('')

    const handleGender = (gender) => {
        setGender(gender);
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Addiction</TableCell>
                            <TableCell>Contact No.</TableCell>
                            <TableCell ></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {Object.values(results).map((r,index) => {
                            return (
                            <TableRow key={index}>
                                <TableCell>{r.id}</TableCell>
                                <TableCell>{r.username}</TableCell>
                                <TableCell>{r.addiction}</TableCell>
                                <TableCell>{r.no}</TableCell>
                                <TableCell>
                                    <div>
                                        <Button aria-describedby={id} variant="contained" onClick={(e) => handleClick(e, r.id)}>
                                            Update
                                        </Button>
                                        <Popover
                                            id={id}
                                            open={open}
                                            anchorEl={anchorEl}
                                            onClose={handleClose}
                                            anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                            }}
                                            
                                        >
                                            
                                            <Container component='form' sx={{ display: 'flex', flexDirection: 'column', padding: 2, gap: 2, backgroundColor: '#ffffff', border: '2px solid black' }} onSubmit={(event) => handleSubmit(event)}>
            
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                                        <TextField
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            defaultValue={idData.registeree}
                                                            onChange={(e) => setRegType({...regtype, name: e.target.value})} 
                                                            label="Registering For"
                                                            
                                                        >
                                                        
                                                        </TextField>
                                                    </FormControl>
                                                </Box>
                                    
                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                                        <TextField id="name-field" label="Name" value={idData.username} variant="outlined" onChange={(e) => handleName(e.target.value)}/>
                                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                                            <TextField id="number-field" label="Number" value={idData.no} variant="outlined" onChange={(e) => handleNum1(e.target.value)}/>
                                                            <TextField id="altnumber-field" label="Alternate Number" value={idData.altno} variant="outlined" onChange={(e) => handleNum2(e.target.value)}/>
                                                        </Box>
                                                        <Box sx={{ display: 'flex', gap: 2 }}>
                                                            <TextField id="email-field" label="Email ID" value={idData.email} variant="outlined" onChange={(e) => handleEmail(e.target.value)}/>
                                                            <TextField id="altemail-field" label="Alternate Email ID" value={idData.email} variant="outlined" onChange={(e) => handleAltEmail(e.target.value)} />
                                                        </Box>
                                                    </Box>
                                                    <Box>
                                                        <div>
                                                            <div className="d-flex justify-content-center mb-4">
                                                                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
                                                                className="rounded-circle" alt="example placeholder" style={{width: '25%'}} />
                                                            </div>
                                                            <div className="d-flex justify-content-center">
                                                                <div className="mb-3">
                                                                    <label className="form-label text-white m-1" htmlFor="customFile2">Choose file</label>
                                                                    <input type="file" className="form-control d-none"  id="customFile2" onChange={(e) => handleProfilePic(e.target.files[0])}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Box>
                                                </Box>
                                                
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                                        <TextField
                                                        labelId="demo-simple-select-label"
                                                        id="demo-simple-select"
                                                        value={idData.addiction}
                                                        label="Addiction Type"
                                                        onChange={(e) => handleChangeAddiction(e.target.value)}
                                                        >
                                                            <MenuItem value={'Drugs'}>Drugs</MenuItem>
                                                            <MenuItem value={'Alcohol'}>Alcohol</MenuItem>
                                                            <MenuItem value={'Others'}>Others</MenuItem>
                                                        </TextField>
                                                    </FormControl>
                                                </Box>

                                                <TextField
                                                    id="outlined-multiline-static"
                                                    label="Address"
                                                    multiline
                                                    rows={4}
                                                    value={idData.address}
                                                    onChange={(e) => handleChangeAddress(e.target.value)}
                                                    placeholder="Address (Max Length: 200)"
                                                />
                                                <div className="mb-3">
                                                    <label htmlFor="formFile" className="form-label">Attach Photo of Aadhaar Card</label>
                                                    <input className="form-control" type="file" id="formFile"  onChange={(e) => handleAadhaar(e.target.files[0])}/>
                                                </div>
                                                
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                                        <TextField
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={idData.state}
                                                            label="State"
                                                            onChange={(e) => handleChangeState(e.target.value)}
                                                        >
                                                            <MenuItem value={1}>Maharashtra</MenuItem>
                                                            <MenuItem value={2}>Goa</MenuItem>
                                                            <MenuItem value={3}>Kerala</MenuItem>
                                                        </TextField>
                                                    </FormControl>
                                                </Box>
                                                
                                                <Box sx={{ minWidth: 120 }}>
                                                    <FormControl fullWidth>
                                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                                        <TextField
                                                            labelId="demo-simple-select-label"
                                                            id="demo-simple-select"
                                                            value={idData.bloodgroup}
                                                            label="Blood Group"
                                                            onChange={(e) => handleChangeBlood(e.target.value)}
                                                        >
                                                            <MenuItem value={'A+'}>A+</MenuItem>
                                                            <MenuItem value={'A-'}>A-</MenuItem>
                                                            <MenuItem value={'B+'}>B+</MenuItem>
                                                        </TextField>
                                                    </FormControl>
                                                </Box>

                                                <FormControl>
                                                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                                                    <TextField
                                                        aria-labelledby="demo-radio-buttons-group-label"
                                                        name="radio-buttons-group"
                                                        value={idData.gender}
                                                        onChange={(e) => handleGender(e.target.value)}
                                                        
                                                    >
                                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                    </TextField>
                                                </FormControl>

                                                {/*<TextField id="pass-field" label="Password"  variant="outlined" onChange={(e) => handlePass(e.target.value)} />*/}

                                                {/*<Box sx={{ display: 'flex', justifyContent: 'center', gap: 2}}>*/}
                                                    {/*<Button variant="contained" color='success' type='submit'>Submit</Button>*/}
                                                    <Button onClick={(e) => updateAPIData(e)} type='submit' variant='contained' color='success' sx={{ width: '10%', alignSelf: 'center' }}>Submit</Button>
                                                    {/*<Button variant="contained" color='error' type='reset'>Reset</Button>*/}
                                                {/*</Box>*/}

                                            </Container>


                                        </Popover>
                                    </div>
                                </TableCell>
                                <TableCell>
                                    <Button variant='contained' color='error' onClick={() => onDelete(r.id)}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>

                </Table>
            </TableContainer>
        </>
    )
}