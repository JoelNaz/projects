import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from './Title';

export default function Deposits(props) {
  return (
    <React.Fragment>
      <Title>Active Patients</Title>
      <Typography component="p" variant="h4">
        9000
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 September, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={() => props.setter('Read')}>
          View Patients
        </Link>
      </div>
    </React.Fragment>
  );
}