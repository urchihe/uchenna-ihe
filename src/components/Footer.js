import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import reactLogo from '../assets/images/react.svg'
import { PropTypes } from 'prop-types'

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
  
const Footer = (props) => {
    const classes = useStyles();
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={12} id="contact">
            <h4 className={classes.paper}>Developed with React <p style={{ marginBottom: '15px'}}><img src={reactLogo} alt="react logo" style={{ width: '50px', height: 'auto'}} /></p></h4>
            <p className={classes.paper}><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />{ props.year } uchenna ihe</p>
          </Grid>
        </Grid>
      </div>
    );
}

Footer.propTypes = {
  year: PropTypes.number,
}

export default Footer