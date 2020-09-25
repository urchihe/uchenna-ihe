import React from 'react';
import profilePic from '../assets/images/pic.png'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import vueLogo from '../assets/images/vue.svg'
import reactLogo from '../assets/images/react.svg'
import pythonLogo from '../assets/images/Python.png'
import phpLogo from '../assets/images/php.png'
import jqueryLogo from '../assets/images/jquery.png'
import nodeLogo from '../assets/images/node.png'
import uiLogo from '../assets/images/ux-iu.png'
import databaseLogo from '../assets/images/database.svg'
import {PropTypes} from 'prop-types'
import {Link} from "react-scroll"
import Resume from './Resume'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
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


const Home = ({contacts}) => {
    const classes = useStyles();
    return (
        <div>
            <Grid item xs={12}>
                <img className="image-logo" src={profilePic} alt="logo"/>
            </Grid>
            <Grid item xs={12} className="image-content">
                <Container maxWidth="xs">
                    <Link
                        activeClass="active-link"
                        to="contact"
                        spy={true}
                        hashSpy={true}
                        smooth={true}
                        offset={-70}
                        duration={200}
                    >
                        <h3> Hello! My name is Uchenna Ihe <br/>
                            I am a full-stack Software Developer, I work remotely as a full-time freelancer.Do you have
                            a project?&nbsp;&nbsp; CONTACT ME!
                        </h3>
                    </Link>
                </Container>
            </Grid>
            <Grid item xs={12} id="aboutMe">
                <Grid item xs={12}>
                    <h2 className="no-padding head-font">ABOUT ME</h2>
                </Grid>
                <Resume/>
            </Grid>
            <Grid container spacing={2} id="skills">
                <Grid item xs={12}>
                    <h2 className="no-padding head-font">SKILLS</h2>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Container maxWidth="lg">
                        <span className="skills">python</span><span className="level">60%</span>
                        <div className="meter">
                            <span style={{width: '60%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">C#</span><span className="level">60%</span>
                        <div className="meter">
                            <span style={{width: '60%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">php</span><span className="level">95%</span>
                        <div className="meter">
                            <span style={{width: '95%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">javascript</span><span className="level">90%</span>
                        <div className="meter">
                            <span style={{width: '90%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">HTML</span><span className="level">90%</span>
                        <div className="meter">
                            <span style={{width: '90%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">css</span><span className="level">90%</span>
                        <div className="meter">
                            <span style={{width: '90%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">sass/scss</span><span className="level">90%</span>
                        <div className="meter">
                            <span style={{width: '90%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">bootstrap</span><span className="level">90%</span>
                        <div className="meter">
                            <span style={{width: '90%'}}><span className="progress"/></span>
                        </div>
                        <span className="skills">sql</span><span className="level">90%</span>
                        <div className="meter">
                            <span style={{width: '90%'}}><span className="progress"/></span>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}>
                    <Container maxWidth="lg">
                        <div>
                            <span className="skills">vue</span><span className="level">98%</span>
                            <div className="meter">
                                <span style={{width: '98%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">vuex</span><span className="level">95%</span>
                            <div className="meter">
                                <span style={{width: '95%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">react</span><span className="level">90%</span>
                            <div className="meter">
                                <span style={{width: '90%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">redux</span><span className="level">90%</span>
                            <div className="meter">
                                <span style={{width: '90%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">redux-saga</span><span className="level">90%</span>
                            <div className="meter">
                                <span style={{width: '90%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">node(express)</span><span className="level">80%</span>
                            <div className="meter">
                                <span style={{width: '80%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">git</span><span className="level">90%</span>
                            <div className="meter">
                                <span style={{width: '90%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">docker</span><span className="level">90%</span>
                            <div className="meter">
                                <span style={{width: '90%'}}><span className="progress"/></span>
                            </div>
                            <span className="skills">React NATIVE</span><span className="level">90%</span>
                            <div className="meter">
                                <span style={{width: '90%'}}><span className="progress"/></span>
                            </div>
                        </div>
                    </Container>
                </Grid>
            </Grid>
            <Grid container spacing={2} id="frontend">
                <Grid item xs={12}>
                    <h2 className="no-padding head-font">FRONTEND DEVELOPMENT</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="lg">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> VUE </h1>
                                    <img src={vueLogo} alt="vue logo" style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>vue</h4>
                                    <h4>vuex</h4>
                                    <h4>vue-router</h4>
                                    <h4>axios</h4>
                                    <h4>babel-eslint</h4>
                                    <h4>eslint</h4>
                                    <h4> .......</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="lg">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> REACT </h1>
                                    <img src={reactLogo} alt="react logo" style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>react</h4>
                                    <h4>redux</h4>
                                    <h4>redux-saga</h4>
                                    <h4>apisauce</h4>
                                    <h4>reduxsauce</h4>
                                    <h4>react-router</h4>
                                    <h4> .......</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="lg">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> UX/UI </h1>
                                    <img src={uiLogo} alt="ux-ui logo" style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>element-ui</h4>
                                    <h4>material-ui</h4>
                                    <h4>vuetify</h4>
                                    <h4>sass/scss</h4>
                                    <h4>css</h4>
                                    <h4>html</h4>
                                    <h4> .......</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="lg">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> JQUERY </h1>
                                    <img src={jqueryLogo} alt="jquery logo" style={{width: '200px', height: '100px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>jquery</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
            </Grid>
            <Grid container spacing={2} id="backend">
                <Grid item xs={12}>
                    <h2 className="no-padding head-font">BACKEND DEVELOPMENT</h2>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="sm">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> PHP </h1>
                                    <img src={phpLogo} alt="php logo" style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>laravel</h4>
                                    <h4>symfony</h4>
                                    <h4>core php</h4>
                                    <h4>Codeigniter</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="sm">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> NODE </h1>
                                    <img src={nodeLogo} alt="node logo" style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>node</h4>
                                    <h4>express.js</h4>
                                    <h4>nest.js</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="sm">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> PYTHON </h1>
                                    <img src={pythonLogo} alt="python logo" style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>python</h4>
                                    <h4>django</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
                <Grid item xs={12} sm={6} lg={3}>
                    <Container maxWidth="sm">
                        <div className="flip-card">
                            <div className="flip-card-inner">
                                <div className="flip-card-front">
                                    <h1> DATABASE </h1>
                                    <img src={databaseLogo} alt="database logo"
                                         style={{width: '200px', height: '150px'}}/>
                                </div>
                                <div className="flip-card-back">
                                    <h4>sql</h4>
                                    <h4>mysql</h4>
                                    <h4>mongodb</h4>
                                    <h4>elasticsearch</h4>
                                </div>
                            </div>
                        </div>
                    </Container>
                </Grid>
            </Grid>
            <Grid item xs={12} id="mobile">
                <h2 className="no-padding head-font">MOBILE APPLICATION DEVELOPMENT</h2>
                <Container maxWidth="xs">
                    <div className="flip-card">
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <h1> REACT NATIVE </h1>
                                <img src={reactLogo} alt="react native logo" style={{width: '200px', height: '150px'}}/>
                            </div>
                            <div className="flip-card-back">
                                <h4>react-native</h4>
                                <h4>react</h4>
                                <h4>redux</h4>
                                <h4>redux-saga</h4>
                                <h4>apisauce</h4>
                                <h4>reduxsauce</h4>
                                <h4> .......</h4>
                            </div>
                        </div>
                    </div>
                </Container>
            </Grid>
            <Grid item xs={12} id="contact">
                <h2 className="no-padding head-font">CONTACTS</h2>
                <Container maxWidth="md">
                    <h3 className={classes.paper}> Email : {contacts.email}</h3>
                    <h3 className={classes.paper}> Phone : {contacts.phone}</h3>
                </Container>
            </Grid>

        </div>
    );
};

Home.propTypes = {
    contacts: PropTypes.object,
}
export default Home;
