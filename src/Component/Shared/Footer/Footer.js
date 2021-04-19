import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import FooterCol from '../FooterCol/FooterCol';
import './Footer.css';

const Footer = () => {
    
  
   
    const services = [
        { name: 'Wall Colorful Tiles', link: '/emergency' },
        { name: 'White Modern Toilet', link: '/checkup' },
        { name: 'Colorful Stone', link: '/personal-treatment' },
        { name: 'Roca Bathrooms', link: '/tooth-extract' },
        { name: 'Gray Wall Tiles', link: '/checkup' },
        { name: 'Coming soon', link: '/checkup' },
        { name: 'Coming soon', link: '/checkup' },
    ];
    return (
        <footer className="footer-area clear-both pt-5">
            {/* <div className="container "> */}
                <div className="row py-5 " style={{marginLeft:"10%"}}>
                    <div className=" col-md-3">
                        <h1 class="text-primary ">House Builder LTD</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis voluptates eveniet numquam ipsam asperiores excepturi consequatur nostrum odio eos unde.</p>
                        <small>Thank you To visit us..!!</small>
                    </div>
                    <div className=" col-md-4 " style={{marginLeft:"4%"}}>
                    <h1 class="badge bg-primary text-wrap">Services</h1>
                        <li>Wall Colorful Tiles</li>
                        <li>White Modern Toilet</li>
                        <li>Colorful Stone</li>
                        <li>Roca Bathrooms</li>
                        <li>Gray Wall Tiles</li>
                        <li>Coming soon</li>
                        <li>Coming soon</li>
                       
                    
                    </div>
                    <div className=" col-md-4">
                        <h1 class="badge bg-primary text-wrap">Contact Us</h1>
                        <p>New York - 101010 Hudson,</p>
                        <p>Yards</p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-brand">+2025550295</button>
                        </div>
                    
                    </div>
                  
                    
                    
                    
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                     <small>Develop By Sajib Nath(sajibnath1996@gmail.com) </small>
                </div>
            {/* </div> */}
        </footer>
    );
};

export default Footer;