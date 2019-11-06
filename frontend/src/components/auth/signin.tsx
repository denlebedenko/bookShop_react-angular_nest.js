import React, { useState } from 'react';
import { Button, 
         Menu, 
         Grid, 
         FormControl, 
         makeStyles, 
         Theme, 
         createStyles, 
         TextField
        } from '@material-ui/core';
import { UserLoginModel } from '../../models';
import AuthService from '../../services/auth.service';
import { UserDataModel } from '../../models/user-data.model';
import { bindActionCreators } from 'redux';
import { authUser } from '../../store/auth/action';
import { connect } from 'react-redux';
import  TokenStorage  from '../../services/token.storage';

const authService = new AuthService();
const tokenStorage = new TokenStorage();
const authData: UserLoginModel = {
    username: '',
    password: '',
}


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

const SignIn = ({logining}: any) => {

    
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  const [auth, setAuthData] = useState(authData);


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setAuthData((authData: UserLoginModel)=> ({
        ...authData,
        [name]:value
      }))
    };

    const loginUser = async() => {
      const userData:UserDataModel = await authService.authUser(auth);

      tokenStorage.setToken(userData.token);

      logining(userData);

      return userData;
    }

    const classes = useStyles();
    return (
        <div>
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
                    <TextField label="Name" onChange={handleChange} name="username" helperText=""/>
                  </FormControl>
                  <FormControl  className={classes.formControl}>
                    <TextField  label="Password" onChange={handleChange} type="password" name="password" helperText=""/>
                  </FormControl>
                  <Grid container justify="space-around">
                    <Button variant="contained" color="primary" className={classes.button} onClick={loginUser}>
                      Log In
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
export default connect(null, mapDispatchToProps)(SignIn);
