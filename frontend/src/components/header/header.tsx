import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import './header.scss'
import { Grid } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
    },
    title: {
      flexGrow: 1,
      fontWeight: 300,
    },
    color: {
        backgroundColor: 'rgb(186, 0, 233)'
    },
    textColor: {
      color: 'rgb(186, 0, 233)'
    },
    type: {
      marginBottom: 20
    },
    formControl: {
      margin: "0 50px"
    },
    button: {
      backgroundColor: 'rgb(186, 0, 233)',
      width: '30%',
      margin: '30px auto',
      alignContent:'center'
    }
  }),
);

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log(event.target.value)
    };
    const classes = useStyles();
    return(
        <div className={classes.type}>
          <AppBar className={classes.root} position="static">
            <Toolbar className={classes.color}>
              <Typography variant="h6" className={classes.title}>
                BookShop (React Edition)
              </Typography>
            <Button aria-controls="simple-menu" className={classes.root} aria-haspopup="true" onClick={handleClick}>
                Login
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
              <Grid container direction="column" justify="center">
                <h2 className="form_title">Please fill forms</h2>
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" onChange={handleChange} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input id="component-simple" onChange={handleChange} type="password" />
                  </FormControl>
                  <Grid container justify="space-around">
                    <Button variant="contained" color="primary" className={classes.button}>
                      Log In
                    </Button>
                    <Button variant="contained" color="primary" className={classes.button}>
                      Register
                    </Button>
                  </Grid>            
              </Grid>
            </Menu>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header;