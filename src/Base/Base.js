import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react'
import { useHistory } from 'react-router-dom';

const Base = ({ title, description, children }) => {
  const history = useHistory()
  return (
    <div className='main-component base component'>
      <div className='nav-bar'>
        <AppBar position="static">
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => history.push("/")}
            >Dashboard</Button>

            <Button
              color="inherit"
              onClick={() => history.push("/students")}
            >Student list</Button>

            <Button
              color="inherit"
              onClick={() => history.push("/add")}
            >Add students</Button>

          </Toolbar>
        </AppBar>

      </div>

      <header>
        <Typography variant="h3" className='heading'>
          {title}
        </Typography>
      </header>

      <main className='main-segment'>
        <Typography variant="h5" className='heading'>
          {description}
        </Typography>

        <div className="child-component">
          {children}
        </div>
      </main>

    </div>
  )
}

export default Base;