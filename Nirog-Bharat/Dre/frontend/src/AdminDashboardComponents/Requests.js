import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import Popover from '@mui/material/Popover';

import axios from 'axios';

export default function Requests(props) {
    const [results, setResult] = useState({ requests: [] });
    const [loading, setLoading] = useState(true);
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/authen/user/')
            .then(res => {
                console.log(res.data);
                setResult(res.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    const handleUpdate = (event, requestId) => {
        setAnchorEl(event.currentTarget);
        // Implement your update logic here using the request ID
        
    };

    const handleDelete = (requestId) => {
        // Implement your delete logic here using the request ID
        console.log('Delete request with ID:', requestId);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{ margin: '20px' }}>
            {loading ? (
                <CircularProgress />
            ) : (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                
                                <TableCell>Request ID</TableCell>
                                <TableCell>Request</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {results.requests.map((request, index) => (
                                <TableRow key={index}>
                                    
                                    <TableCell>{request.id}</TableCell>
                                    <TableCell>{request.reqs}</TableCell>
                                    <TableCell>
                                        <div style={{ display: 'flex', gap: '10px' }}>
                                            <Button aria-describedby={id} variant="contained" onClick={(e) => handleUpdate(e, request.id)}>
                                                Update
                                            </Button>
                                            <Button variant='contained' color='error' onClick={() => handleDelete(request.id)}>
                                                Delete
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </div>
    );
}