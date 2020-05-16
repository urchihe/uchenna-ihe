import React, { Component } from 'react';
import { PropTypes } from 'prop-types'
import $ from 'jquery';
import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {
    constructor() {
        super();
        this._myHeader = '';
        this.scrollSpy = scroll.scrollSpy;
      }
    componentDidMount() {
        window.onscroll = () => {
             const header = document.getElementById("myHeader");
             const sticky = header.offsetTop;
             if (window.pageYOffset >= sticky) {
                 header.classList.add("sticky");
                }else
                {
                    header.classList.remove("sticky");
                }
        };
        $('nav ul li a:not(:only-child)').click(function(e) {
            $(this).siblings('.nav-dropdown').toggle();
            // Close one dropdown when selecting another
            $('.nav-dropdown').not($(this).siblings()).hide();
            e.stopPropagation();
        });
        // Clicking away from dropdown will remove the dropdown class
        $('html').click(function() {
            $('.nav-dropdown').hide();
        });
        // Toggle open and close nav styles on click
        $('#nav-toggle').click(function() {
            $('nav ul').slideToggle();
        });
        // Hamburger to X toggle
        $('#nav-toggle').on('click', function() {
            this.classList.toggle('active');
        });
    }
    scrollToTop = () => {
        scroll.scrollToTop();
      }

    render(){
         return (
             <section className="navigation" id="myHeader" >
                 <div className="nav-container" id="home">
                     <div className="brand">
                         <Link
                            activeClass="active-link"
                            to="/"
                            spy={true}
                            hashSpy={true}
                            smooth={true}
                            offset={-70}
                            duration={200}
                            onClick={this.scrollToTop}
                        >
                        Uchenna IHE
                        </Link>
                     </div>
                     <nav>
                         <div className="nav-mobile"><a id="nav-toggle" href="#!"><span></span></a></div>
                         <ul className="nav-list">
                             <li>
                                 <Link
                                     activeClass="active"
                                     to="aboutMe"
                                     spy={true}
                                     hashSpy={true}
                                     smooth={true}
                                     offset={-150}
                                     duration={200}
                                 >
                                     About me
                                </Link>
                             </li>
                             <li>
                                 <Link
                                     activeClass="active"
                                     to="skills"
                                     spy={true}
                                     hashSpy={true}
                                     smooth={true}
                                     offset={-150}
                                     duration={200}
                                 >
                                     Skills
                                </Link>
                             </li>
                             <li>
                                 <Link
                                     activeClass="active"
                                     to="#!"
                                     spy={true}
                                     smooth={true}
                                     offset={-150}
                                     duration={200}
                                 >
                                     Services
                                </Link>
                                 <ul className="nav-dropdown">
                                     <li>
                                         <Link
                                             activeClass="active"
                                             to="frontend"
                                             spy={true}
                                             hashSpy={true}
                                             smooth={true}
                                             offset={-250}
                                             duration={200}
                                         >
                                             FrontEnd Development
                                       </Link>
                                     </li>
                                     <li>
                                         <Link
                                             activeClass="active"
                                             to="backend"
                                             spy={true}
                                             hashSpy={true}
                                             smooth={true}
                                             offset={-80}
                                             duration={200}
                                         >
                                             BackEnd Development
                                        </Link>
                                     </li>
                                     <li>
                                         <Link
                                             activeClass="active"
                                             to="mobile"
                                             spy={true}
                                             hashSpy={true}
                                             smooth={true}
                                             offset={-150}
                                             duration={200}
                                         >
                                             Mobile Application Development
                                        </Link>
                                     </li>
                                 </ul>
                             </li>
                             <li>
                                 <a href="https://www.linkedin.com/in/uchenna-ihe-29514869/" target="_blank" rel="noopener noreferrer">LinkedIn
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
                             </li>
                             <li>
                                 <a href="https://github.com/urchihe" target="_blank" rel="noopener noreferrer">Github <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" x="0px" y="0px" viewBox="0 0 100 100" width="15" height="15" className="icon outbound"><path fill="currentColor" d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"></path> <polygon fill="currentColor" points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"></polygon></svg></a>
                             </li>
                             <li>
                                 <a href="/assets/doc/uchenna_ihe.pdf" target="_blank" rel="noopener noreferrer">Resume <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.8285 12.0259L16.2427 13.4402L12 17.6828L7.7574 13.4402L9.17161 12.0259L11 13.8544V6.31724H13V13.8544L14.8285 12.0259Z" fill="currentColor" /><path fillRule="evenodd" clipRule="evenodd" d="M19.7782 19.7782C15.4824 24.0739 8.51759 24.0739 4.22183 19.7782C-0.0739417 15.4824 -0.0739417 8.51759 4.22183 4.22183C8.51759 -0.0739419 15.4824 -0.0739419 19.7782 4.22183C24.0739 8.51759 24.0739 15.4824 19.7782 19.7782ZM18.364 18.364C14.8492 21.8787 9.15076 21.8787 5.63604 18.364C2.12132 14.8492 2.12132 9.15076 5.63604 5.63604C9.15076 2.12132 14.8492 2.12132 18.364 5.63604C21.8787 9.15076 21.8787 14.8492 18.364 18.364Z" fill="currentColor" /></svg></a>
                             </li>
                         </ul>
                     </nav>
                 </div>
             </section>
        );
    }
}
Nav.propTypes = {
  appName: PropTypes.string,
  token: PropTypes.string,
}
export default Nav;