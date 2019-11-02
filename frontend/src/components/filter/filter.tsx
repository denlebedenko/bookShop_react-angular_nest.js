import React, { useState } from 'react';
import { ExpansionPanel,
         ExpansionPanelSummary, 
         Typography, 
         ExpansionPanelDetails, 
         makeStyles, 
         createStyles, 
         Theme, 
         Grid, 
         FormControl, 
         InputLabel, 
         Input, 
         Button, 
         MenuItem, 
         Select } from '@material-ui/core';
import { connect } from 'react-redux';
import * as actions from '../../store/books/action'
import { QueryBook } from '../../models/query-books.model';
import { bindActionCreators } from 'redux';


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

const filterData: QueryBook = { 
  minPrice: '',
  maxPrice: '',
  typeBook: '',
}

const Filter: React.FC = ({changeFilter, resetFilter}: any) => {
    const classes = useStyles();
    const [filter, setFilter] = useState(filterData);


    const [values, setValues] = useState({
      typeBook: '',
    });

    const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value, name } = event.target;
      setFilter((filterData: QueryBook)=>({
        ...filterData, 
        [name]:value,
      }));
    };

    const handleSelectChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
      const { value, name } = event.target;

      setValues(oldValues => ({
        ...oldValues,
        [name as string]: value,    
      }));

      setFilter((filterData: QueryBook)=>({ 
          ...filterData,
          [name as string]:value,
      }));
    };

    const onApplyFilter = () => {
      setFilter(filterData);
      changeFilter(filter);
    };

    const onResetFilter = () => {
      resetFilter();
    }

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
                        <Input id="component-simple" onChange={handleChanges} type="number"  name="minPrice"/>
                    </FormControl>
                    <FormControl >
                        <InputLabel htmlFor="component-simples">MaxPrice $</InputLabel>
                        <Input id="component-simples" onChange={handleChanges} type="number" name="maxPrice" />
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <Select
                        value={values.typeBook}
                        onChange={handleSelectChange}
                        displayEmpty
                        className={classes.selectEmpty}
                        name="typeBook"
                      >
                        <MenuItem value="">
                          <em>Choose type</em>
                        </MenuItem>
                        <MenuItem value={'book'}>Book</MenuItem>
                        <MenuItem value={'magazine'}>Magazine</MenuItem>
                      </Select>
                    </FormControl>
                    <Grid container justify="space-around">
                        <Button onClick={onApplyFilter}  variant="contained" color="primary" className={classes.button}>
                            Apply
                        </Button>
                        <Button onClick={onResetFilter}  variant="contained" color="primary" className={classes.button}>
                            Reset
                        </Button>
                    </Grid>            
                </Grid>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      );
}

const mapDispatchToProps = (dispatch: any) => {
   const {changeFilter, resetFilter } = bindActionCreators(actions, dispatch);
    return {
      changeFilter,
      resetFilter,
    };
};


export default connect(null, mapDispatchToProps)(Filter)