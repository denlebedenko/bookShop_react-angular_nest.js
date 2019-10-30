import React, { useState } from 'react'
import { UserRegisterModel } from '../../models';
import { Button, Menu, Grid, FormControl, InputLabel, Input, makeStyles, Theme, createStyles } from '@material-ui/core';
import AuthService from '../../services/auth.service';

const authService = new AuthService();

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'white',
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

const registerData: UserRegisterModel = {
    email: '',
    password: '',
    username: '',
}

const Registrer = () => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [registration, setRegisterData] = useState(registerData);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setRegisterData((registerData: UserRegisterModel)=> ({
        ...registerData,
        [name]:value
      }))
    };

    const registerUser = async() => {
        const registeredUser = await authService.registerUser(registration);
        console.log(registeredUser)
        return registeredUser; 
    }

    const classes = useStyles();

    return (
        <div>
            <Button aria-controls="simple-menu" className={classes.root} aria-haspopup="true" onClick={handleClick}>
                registration
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
                    <InputLabel htmlFor="email">Email</InputLabel>
                    <Input id="email" onChange={handleChange} name="email"/>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" onChange={handleChange} type="password" name="password" />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="username">Name</InputLabel>
                    <Input id="username" onChange={handleChange} type="text" name="username" />
                  </FormControl>
                  <Grid container justify="space-around">
                    <Button variant="contained" color="primary" className={classes.button} onClick={registerUser}>
                      Register
                    </Button>
                  </Grid>            
              </Grid>
            </Menu>
        </div>
    )
}

export default Registrer;
