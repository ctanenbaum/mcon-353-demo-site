//Chaya Tanenbaum
import "../../App.css";
//import "../../datePicker.js"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import myImage1 from '../../projectImages/bahamas.jpg';
import myImage2 from '../../projectImages/niagara.jpg';
import myImage3 from '../../projectImages/venice.jpg';
import myImage4 from '../../projectImages/IMG_1451.JPG';
import myImage5 from '../../projectImages/arizona.jpg';
import myImage6 from '../../projectImages/china.jpg';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';


export const Home = () => {
  return (
    <div className="App">
      <header>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
            Vacation Planner
          </Typography>
          
          <Button color="inherit">Contact us</Button>
        </Toolbar>
        
         
        <Stack spacing={1} id='rateUs'> 
             <Rating name="size-medium" defaultValue={2} />
           </Stack>
      </AppBar>
    </Box>

    <h1 id='welcome'>
      Welcome to your Vacation Planner!
    </h1>

   

    <h1 id='text'>
      Would you like to experience Niagara while the falls are frozen 
      or the Bahamas where its hot and sunny
      We help you plan your next vacation for whatever season
      all you have to do is select a location.

    </h1>
    <br></br>
    <box id = 'row1'>

    <Card sx={{ maxWidth: 345 }} id = 'bahamas'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={myImage1}
          alt="Bahamas"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bahamas
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          See Details
        </Button>
      </CardActions>
    </Card>

    
    <Card sx={{ maxWidth: 345 }} id = 'niagara'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {myImage2}
          alt="Niagara Falls"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Niagara Falls
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        See Details
        </Button>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 345 }} id = 'venice'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={myImage3}
          alt="Venice"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Venice
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        See Details
        </Button>
      </CardActions>
    </Card>
    </box>
    <box id='row2'>
    <Card sx={{ maxWidth: 345 }} id = 'netanya'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={myImage4}
          alt="Netanya"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Netanya
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        See Details
        </Button>
      </CardActions>
    </Card>
    <br></br>

    <Card sx={{ maxWidth: 345 }} id = 'arizona'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={myImage5}
          alt="Arizona"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Arizona
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        See Details
        </Button>
      </CardActions>
    </Card>
    <br></br>

    <Card sx={{ maxWidth: 345 }} id='china'>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={myImage6}
          alt="China"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            China
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        See Details
        </Button>
      </CardActions>
    </Card>
    </box>
    <br></br>
    <Button   
   variant="contained"
   color="secondary"             
   target="_blank"
   component="a"
   href= "https://travel.usnews.com/rankings/worlds-best-vacations/"
>
CLICK HERE FOR MORE LOCATIONS
</Button>
<br></br>
<br></br>
<h2 textAlign = 'center' > To join our email list</h2>
<FormGroup id='subscribe'>
      <FormControlLabel control={<Switch defaultChecked />} label="Subscribe" />

    </FormGroup>
  

      </header>
    </div>
  );
}


