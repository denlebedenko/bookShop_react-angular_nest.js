import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SignIn from './signin';
import Registrer from './registrer';
import './auth.scss'
import { Grid } from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      fontWeight: 300,  
      color: 'rgb(186, 0, 233)',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid rgb(186, 0, 233)',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      borderRadius: '8px',
    },
    btn: {
        color: 'black',
    },
  }),
);

export default function ModalAuth() {
  const classes = useStyles();

  const open: boolean = true;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Link to="/" className="back_btn">
              Back to list
            </Link>
            <h2 id="transition-modal-title"><WarningIcon className="warning_icon"/> Warning <WarningIcon className="warning_icon"/></h2>
            <p id="transition-modal-description">First you need to go through authorization</p>
            <Grid container justify="center">
                <SignIn />
                <Registrer/>
            </Grid>
          </div>
        </Fade> 
      </Modal>
    </div>
  );    
}