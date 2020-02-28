import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from "react-icons/fa";
import "./footer.css"

export class Footer extends Component {
    render() {
        return (
            <div class="container-fluid alith_footer_right_reserved">
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12 bottom-logo">
                            <h1 class="logo"><Link to="/">HELLO WORLD</Link></h1>
                            <div class="tagline social">
                                <ul>
                                    <li class="facebook"><Link to=""><i> <FaFacebookF /></i></Link></li>
                                    <li class="twitter"><Link to=""><i ><FaTwitter /></i></Link></li>
                                    <li class="google-plus"><Link to=""><i><FaGooglePlusG /></i></Link></li>
                                    <li class="instagram"><Link to=""><i><FaInstagram /></i></Link></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-12 col-md-12 coppyright">
                            <p>© Copyright 2018, All rights reserved. Design by <Link to="https://alithemes.com" title="AliTheme">Alithemes.com</Link></p> 
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
