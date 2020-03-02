import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaRegClock, FaSearch } from "react-icons/fa";
import { Transition, animated } from "react-spring/renderprops";
import "./topbar.css";

export class Topbar extends Component {

    state = {
        topSearch:true,
        topSearchform: false
    }

    toggleSearch = () => {
        if (!this.state.topSearch ) {
            this.setState({
                topSearchform: !this.state.topSearchform,
                topSearch: !this.state.topSearch
            });
        }
    };

    toggleSearchForm = () => {
        if (!this.state.topSearchform ) {
            this.setState({
                topSearchform: !this.state.topSearchform,
                topSearch: !this.state.topSearch
            });
        }
    };

    render() {
        return (
            <div class="container-fluid">
				<div class="container">
					<div class="top_bar margin-15">
						<div class="row">
							<div class="col-md-6 col-sm-12 time" onClick={this.toggleSearch}>
								<div id="off-canvas-toggle">
                                    <span></span>
                                    {/* <p class="sidebar-open">MORE</p> */}
                                    <p>MORE</p>
                                </div>
								<i><FaRegClock /></i><span>&nbsp;&nbsp;&nbsp;Friday, 5 January 2018</span>
							</div>
							<div class="col-md-6 col-sm-12 social">
                                <Transition
                                    native
                                    items={this.state.topSearch}
                                    from={{ opacity: 0 }}
                                    enter= {{ opacity: 1 }}
                                    leave={{ opacity: 0 }}
                                >
                                    {show => show && (props => (
                                    <animated.div style={props}>
                                        <ul>
                                            <li><Link to=""><i class="fa"><FaFacebookF /></i></Link></li>
                                            <li><Link to=""><i class="fa"><FaTwitter /></i></Link></li>
                                            <li><Link to=""><i class="fa"><FaGooglePlusG /></i></Link></li>
                                        </ul>
                                        <div class="top-search" onClick={this.toggleSearchForm}>
                                            <i><FaSearch/></i><span>SEARCH</span>
                                        </div>
                                    </animated.div>
                                    ))}
                                </Transition>

                                <Transition
                                    native
                                    items={this.state.topSearchform}
                                    from={{ opacity: 0 }}
                                    enter= {{ opacity: 1 }}
                                    leave={{ opacity: 0 }}
                                >
                                    {show => show && (props => (
                                        <animated.div style={props} class="top-search-form">
                                            
                                                <Form class="search-form" method="get" role="search">
                                                    <Form.Group controlId="formBasicEmail">
                                                        <Form.Label>Search for:</Form.Label>
                                                        <Form.Text class="search-submit" placeholder="Search …">
                                                        </Form.Text>
                                                    </Form.Group>
                                                </Form>
                                           
                                        </animated.div>
                                    ))}
                                </Transition>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default Topbar
