import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import { Transition, animated } from "react-spring/renderprops";
import "./navigation.css"

export class Navigation extends Component {
    render() {
        return (
            <div class="main-nav section_margin">
                <div class="container-fluid">
                    <div class="container">
                        <div class="row">
							<div class="col-12 col-md-12 main_nav_cover" id="nav">
                                <ul id="main-menu">
                                    <li class="menu-item-has-children">
                                        <Link to="#">Home</Link>
                                        <ul class="sub-menu fadeInMenu animated">         
                                            <li><Link to="/">Default</Link></li>
                                            <li><Link to="/home-grid">Grid</Link></li>
                                            <li><Link to="/home-slide">Big slide</Link></li>
                                            <li><Link to="/home-carausel">Carausel</Link></li>
                                            <li><Link to="/home-boxed">Boxed layout</Link></li>
                                            <li><Link to="/home-rtl">RTL layout</Link></li>
                                        </ul>
                                    </li>

                                    <li class="menu-item-has-children">
                                        <Link to="#">Layout</Link>
                                        <ul class="sub-menu fadeInMenu animated">  

                                            <li class="menu-item-has-children">
                                                <Link to="#">Category</Link>
                                                <ul class="sub-menu">         
                                                    <li><Link to="/">List</Link></li>
                                                    <li><Link to="/">Grid</Link></li>
                                                    <li><Link to="/">Masonry</Link></li>
                                                    <li><Link to="/">Big</Link></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <Link to="/">Posts</Link>
                                                {/* <ul class="sub-menu fadeInMenu animated">         
                                                    <li><Link to="/">List</Link></li>
                                                    <li><Link to="/">Grid</Link></li>
                                                    <li><Link to="/">Masonry</Link></li>
                                                    <li><Link to="/">Big</Link></li>
                                                </ul> */}
                                            </li>

                                            <li >
                                                <Link to="/">Pages</Link>
                                                {/* <ul class="sub-menu fadeInMenu animated">         
                                                    <li><Link to="/">List</Link></li>
                                                    <li><Link to="/">Grid</Link></li>
                                                    <li><Link to="/">Masonry</Link></li>
                                                    <li><Link to="/">Big</Link></li>
                                                </ul> */}
                                            </li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">News</Link></li>
                                    <li><Link to="/">Economy</Link></li>

                                    <li class="menu-item-has-children">
                                        <Link to="#">Entertainment</Link>
                                        <ul class="sub-menu fadeInMenu animated">         
                                            <li><Link to="/">Festival</Link></li>
                                            <li><Link to="/">Music</Link></li>
                                            <li><Link to="/">Movie</Link></li>
                                            <li><Link to="/">Cinema</Link></li>
                                        </ul>
                                    </li>
                                    <li><Link to="/">Jobs</Link></li>


                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navigation