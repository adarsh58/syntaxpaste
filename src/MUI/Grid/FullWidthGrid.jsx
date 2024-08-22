import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import '../../App.css';
import NavBar from '../../Component/Navbar/NavBar';
import Heading from '../../Component/Home/Heading';
import PaperInfo from './Paper';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
      <Grid xs={12} md={12} lg={12}>
         <NavBar/>
        </Grid>
        <Grid className="Grid-Heading" xs={12} md={12} lg={12}>
          <Item className='Grid-Item-Heading'><Heading/></Item>
        </Grid>
        <Grid className="Grid-2"  xs={12} md={6} lg={6} >
          <Item ><PaperInfo/></Item>
        </Grid>
        <Grid className="Grid-3"  xs={12} md={6} lg={6} >
          <Item ><PaperInfo/></Item>
        </Grid>
      </Grid> 
    </Box>
  );
}