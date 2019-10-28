import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, makeStyles, createStyles, Theme, Grid, FormControl, InputLabel, Input, Button, MenuItem, Select } from '@material-ui/core';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginBottom: 40,
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
      formControl: {
        width: '100%',
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
  }),
);

const Filter = () => {
    const classes = useStyles();
    const [values, setValues] = React.useState({
      type: '',
    });

    const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      setValues(oldValues => ({
        ...oldValues,
        [event.target.name as string]: event.target.value,
      }));
      console.log(event.target.value)
    };

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
                    <FormControl >
                        <InputLabel htmlFor="component-simple">MaxPrice $</InputLabel>
                        <Input id="component-simple" onChange={handleChange} type="number" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <Select
                        value={values.type}
                        onChange={handleChange}
                        displayEmpty
                        name="type"
                        className={classes.selectEmpty}
                      >
                        <MenuItem value="">
                          <em>Choose type</em>
                        </MenuItem>
                        <MenuItem value={'book'}>Book</MenuItem>
                        <MenuItem value={'magazine'}>Magazine</MenuItem>
                      </Select>
                    </FormControl>
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