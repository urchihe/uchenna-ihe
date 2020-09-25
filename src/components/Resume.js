import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        marginTop: '10px',
        padding: theme.spacing(5, 10, 5, 10),
        textAlign: 'center',
        color: 'white',
    },
    gridLeft: {
        textAlign: 'left'
    },
    gridRight: {
        padding: theme.spacing(2),
        textAlign: 'right'
    },
    whiteTextColor: {
        padding: theme.spacing(2),
        color: 'white',
    }
}));

const Resume = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={0}>
                <Grid item xs={12} id="aboutMe">
                    <Container maxWidth="lg" className="no-padding about-me">
                        <h3 className={classes.paper}>
                            I have a Bachelor of Technology degree in Mathematics and Computer Science (Second Class
                            Upper Division Honours) and
                            for my final year project, i developed an electronic voting system with C# .<br/>
                            I have worked as a Computer Science and Mathematics subjects’ teacher in Secondary Schools
                            for three years.
                            I taught students basics of programming, problem solving and programming logic with
                            mathematical principles.<br/>
                            I have worked as a Project Implementation Manager in an Electrical Automation Company for
                            one year, I perfected my PLC programming,
                            switchgears wiring and installation skills. I also helped the company with many automation
                            simulation software and staff training.<br/>
                            I have worked as a Portfolio Manager in a Microfinance Bank for one year, I helped this bank
                            increase her customer base
                            and capital revenue, i also helped many small and medium businesses increase their
                            revenue.<br/>
                            I started full time software development in 2016, and I have worked as a full time software
                            developer in a financial startup company
                            for two year, currently working for this company remotely as a freelancer, I also work
                            remotely for other national/international companies and individuals
                            as a full time software developer freelancer.
                        </h3>
                    </Container>
                </Grid>
            </Grid>
        </div>
    );
}

export default Resume