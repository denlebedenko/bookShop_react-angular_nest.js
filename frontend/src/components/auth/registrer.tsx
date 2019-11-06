import { Button, createStyles, FormControl, Grid, makeStyles, Menu, TextField, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AuthService from '../../services/auth.service';
import TokenStorage from '../../services/token.storage';
import { authUser } from '../../store/auth/action';

const authService = new AuthService();
const tokenStorage = new TokenStorage();

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

const registerData: any = {
    email: null,
    password: null,
    username: null,
    errors: {
      username: '',
      email: '',
      password: '',
    }
}

const Registrer: React.FC = ({logining}: any) => {
    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const [registration, setRegisterData] = useState(registerData);

    let error = false;

    const validEmailRegex = 
          RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {

      const { value, name } = event.target;
      const errors = registration.errors ;

      switch (name) {
        case 'username': 
          errors.username = 
            value.length < 5
              ? 'Full Name must be 5 characters long!'
              : '';
          break;
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'password': 
          errors.password = 
            value.length < 8
              ? 'Password must be 8 characters long!'
              : '';
          break;
        default:
          break;
      }

      setRegisterData((registerData: any) => ({  
        ...registerData,
        errors,
        [name]:value,
      }));
    };

    const registerUser = async() => {
        const registeredUser = await authService.registerUser(registration);
        tokenStorage.setToken(registeredUser.token);

        logining(registeredUser)

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
                    <TextField error={error} label="Email" onChange={handleChange} name="email" helperText={registration.errors.email} required/>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField error={error} label="Password" onChange={handleChange} type="password" name="password" helperText={registration.errors.password} required/>
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <TextField error={error} label="Name" onChange={handleChange} type="text" name="username"  helperText={registration.errors.username} required/>
                  </FormControl>
                  <Grid container justify="space-around">
                    <Button disabled={false} variant="contained" color="primary" className={classes.button} onClick={registerUser}>
                      Register
                    </Button>
                  </Grid>            
              </Grid>
            </Menu>
        </div>
    )
}

const mapDispatchToProps = (dispatch: any) => {
  const logining = bindActionCreators(authUser, dispatch)
   return {
    logining
   }
}

export default connect(null, mapDispatchToProps)(Registrer);
