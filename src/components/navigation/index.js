import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Transition, animated } from "react-spring/renderprops";
import "./navigation.css"

export class Navigation extends Component {
    state = {
        subMenuHome: false,
        subMenuLayout: false,
        subMenuEntertainment: false
    };

    toggleSubMenuHomeEnter = () => {
        this.setState({
            subMenuHome: true           
        })
    };

    toggleSubMenuHomeLeave = () => {
        this.setState({
            subMenuHome: false
        })
    };

    toggleSubMenuLayoutEnter = () => {
        this.setState({
            subMenuLayout: true
        })
    };

    toggleSubMenuLayoutLeave = () => {
        this.setState({
            subMenuLayout: false
        })
    };

    toggleSubMenuEntertainmentEnter = () => {
        this.setState({
            subMenuEntertainment: true
        })
    };

    toggleSubMenuEntertainmentLeave = () => {
        this.setState({
            subMenuEntertainment: false
        })
    };

    render() {
        return (
            <div class="main-nav section_margin">
				<div class="container-fluid">
					<div class="container">
						<div class="row">
							<div class="col-12 col-md-12 main_nav_cover" id="nav">	
                                <ul id="main-menu">
                                    <li class="menu-item-has-children" 
                                    onMouseEnter={this.toggleSubMenuHomeEnter}
                                    onMouseLeave={this.toggleSubMenuHomeLeave}>
                                        <Link to="#">Home</Link>
                                        <Transition
                                            native
                                            items={this.state.subMenuHome}
                                            from={{ opacity: 1}}
                                            enter= {{ opacity: 1 }}
                                            leave={{ opacity: 0 }}
                                        >
                                            {show => show && (props =>(
                                                <animated.ul style={props}>
                                                    <ul class="sub-menu">
                                                        <li><Link to="#">Default</Link></li>
                                                        <li><Link to="#">Grid</Link></li>
                                                        <li><Link to="#">Big slide</Link></li>
                                                        <li><Link to="#">Carausel</Link></li>
                                                        <li><Link to="#">Boxed layout</Link></li>
                                                        <li><Link to="#">RTL layout</Link></li>
                                                    </ul>
                                                </animated.ul>
                                            ))}
                                        </Transition>  
                                    </li>
                                    <li class="menu-item-has-children"
                                        onMouseEnter={this.toggleSubMenuLayoutEnter}
                                        onMouseLeave={this.toggleSubMenuLayoutLeave}>
                                        <Link to="#">Layout</Link>
                                        <Transition
                                            native
                                            items={this.state.subMenuLayout}
                                            from={{ opacity: 1}}
                                            enter= {{ opacity: 1}}
                                            leave={{ opacity: 0}}
                                        >
                                            {show => show && (props =>(
                                                <animated.ul style={props}>
                                                    <ul class="sub-menu">
                                                        <li><Link to="#">List</Link></li>
                                                        <li><Link to="#">Grid</Link></li>
                                                        <li><Link to="#">Masonry</Link></li>
                                                        <li><Link to="#">Big</Link></li>
                                                    </ul>
                                                </animated.ul>
                                            ))}
                                        </Transition>  
                                    </li>
                                    <li><Link to="#">News</Link></li>
                                    <li><Link to="#">Economy</Link></li>
                                    <li class="menu-item-has-children"
                                        onMouseEnter={this.toggleSubMenuEntertainmentEnter}
                                        onMouseLeave={this.toggleSubMenuEntertainmentLeave}>
                                        <Link to="#">Entertainment</Link>
                                        <Transition
                                            native
                                            items={this.state.subMenuEntertainment}
                                            from={{ opacity: 1}}
                                            enter= {{ opacity: 1 }}
                                            leave={{ opacity: 0 }}
                                        >
                                            {show => show && (props =>(
                                                <animated.ul style={props}>
                                                    <ul class="sub-menu">
                                                        <li><Link to="#">Festival</Link></li>
                                                        <li><Link to="#">Music</Link></li>
                                                        <li><Link to="#">Movie</Link></li>
                                                        <li><Link to="#">Cinema</Link></li>
                                                    </ul>
                                                </animated.ul>
                                            ))}
                                        </Transition>  
                                    </li>
                                    <li><Link to="#">Jobs</Link></li>
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