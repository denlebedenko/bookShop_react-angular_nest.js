import React from 'react'
import { Button, 
         Menu, 
         Grid, 
         FormControl, 
         InputLabel, 
         Input, 
         makeStyles, 
         Theme, 
         createStyles } from '@material-ui/core'


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

const Auth = () => {
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
                    <InputLabel htmlFor="component-simple">Name</InputLabel>
                    <Input id="component-simple" onChange={handleChange} />
                  </FormControl>
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="component-simple">Password</InputLabel>
                    <Input id="component-simples" onChange={handleChange} type="password" />
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
        </div>
    )
}

export default Auth
