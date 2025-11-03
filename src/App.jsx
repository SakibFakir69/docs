



import React from 'react'

import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Checkbox from '@mui/material/Checkbox'
import Fab from '@mui/material/Fab'
import Rating from '@mui/material/Rating'
import Slider from '@mui/material/Slider'
import Switch from '@mui/material/Switch'
import TextField from '@mui/material/TextField'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

function App() {
  return (
    <div>
      <Button  variant='text'>text</Button>
      <Button variant='outlined'>Text2</Button>
      <Button variant='contained'>Text3</Button>
      <Button disabled>Disable</Button>
      <Button color='primary'>Color</Button>

      <Button className='text-white!' sx={{backgroundColor:"red"}}  >Delete</Button>

      <ButtonGroup size='medium' color='secondary' variant='contained' >
        <Button>One</Button>
          <Button>Two</Button>
            <Button>Three</Button>
      </ButtonGroup>

      {/* check  box */}

      <Checkbox  size='medium' color='error' defaultChecked/>
      <Checkbox  size='medium' color='info'/>

      {/* fab */}

      <Fab color='primary'>
        Add+

      </Fab>
      <Fab color='secondary'>
        Edit
      </Fab>

      {/* rating */}

      <Rating  name='rating' value={3.4} precision={1} readOnly/>
      <Rating name='rating' value={5} precision={0.5}/>

      <Slider name='slider' defaultValue={10} step={null} marks={''}/>
      <Switch defaultChecked color='primary' size='medium'/>
      
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
<TextField id="filled-basic" label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" />


<AppBar position="static">
  <Toolbar variant="dense">
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      |||
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Photos
    </Typography>
  </Toolbar>
</AppBar>

<Card>
  <CardHeader>
    title
  </CardHeader>
  <CardContent>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam aspernatur accusantium, nihil nam id minus veritatis modi est praesentium et quos repellat, maxime voluptate! Asperiores saepe tenetur omnis placeat voluptates!
    <CardActions>
      <Button>Read more</Button>
    </CardActions>
  </CardContent>
</Card>
      
    </div>
  )
}

export default App
