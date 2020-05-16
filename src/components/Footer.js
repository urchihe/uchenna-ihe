import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import reactLogo from '../assets/images/react.svg'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      marginTop: '10px',
      padding: theme.spacing(1),
      textAlign: 'center',
      color: 'white',
    },
    gridLeft: {
        padding: '30px '
      },
    gridRight: {
    padding: '30px'
    },
  }));
  
const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} id="contact">
                <h4 className={classes.paper}>Developed with React:</h4>
                <h4 className={classes.paper} style={{ paddingTop: '0' }}><span><img src={reactLogo} alt="react logo" style={{ width: '40px', height: '40px'}}/></span></h4>
                <p className={classes.paper}>@{year} uchenna ihe</p>
                </Grid>
            </Grid>
        </div>
    );
}

export default Footer