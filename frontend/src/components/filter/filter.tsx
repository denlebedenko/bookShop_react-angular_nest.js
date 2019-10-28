import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, makeStyles, createStyles, Theme, Grid, FormControl, InputLabel, Input, Button, TextField, MenuItem } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: 500,
      color: 'rgb(186, 0, 233)',
    },
      button: {
        backgroundColor: 'rgb(186, 0, 233)',
        width: '30%',
        margin: '30px auto',
        alignContent:'center'
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
      },
      menu: {
        width: 200,
      },    
  }),
);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
  };

const types = [
    {
        value: 'book',
    },
    {
        value: 'magazine',
    }
  ]
const Filter = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>You can use Filter!</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container direction="column" justify="center">
                    <h2 className="form_title">Please fill forms</h2>
                    <FormControl >
                        <InputLabel htmlFor="component-simple">MinPrice $</InputLabel>
                        <Input id="component-simple" onChange={handleChange} type="number" />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="component-simple">MaxPrice</InputLabel>
                        <Input id="component-simple" onChange={handleChange} type="number" />
                    </FormControl>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        className={classes.textField}
                        SelectProps={{
                        MenuProps: {
                            className: classes.menu,
                        },
                        }}
                        helperText="Please select your currency"
                        margin="normal"
                    >
                        {types.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                        ))}
                    </TextField>
                    <Grid container justify="space-around">
                        <Button variant="contained" color="primary" className={classes.button}>
                        Apply
                        </Button>
                    </Grid>            
                </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
}

export default Filter