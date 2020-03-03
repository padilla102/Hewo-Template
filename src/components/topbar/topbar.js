import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaRegClock, FaSearch } from "react-icons/fa";
import "./topbar.css";

export class Topbar extends Component {
    state = {
        showForm: false
    };

    onShowForm = () => {
        this.setState({showForm: !this.state.showForm})
    };
    
    render() {
        return (
            <div class="container-fluid">
				<div class="container">
					<div class="top_bar margin-15">
						<div class="row">
							<div class="col-md-6 col-sm-12 time">
								<div id="off-canvas-toggle" onClick={this.props.showSideBar}>
                                    <span></span>
                                    <p class="sidebar-open">MORE</p>
                                    {/* <p>MORE</p> */}
                                </div>
								<i><FaRegClock /></i><span>&nbsp;&nbsp;&nbsp;Friday, 5 January 2018</span>
							</div>
							<div class="col-md-6 col-sm-12 social">
                                <ul>
                                    <li><Link to=""><i class="fa"><FaFacebookF /></i></Link></li>
                                    <li><Link to=""><i class="fa"><FaTwitter /></i></Link></li>
                                    <li><Link to=""><i class="fa"><FaGooglePlusG /></i></Link></li>
                                </ul>
                                <div class="top-search" onClick={this.onShowForm} >
                                    <i><FaSearch/></i><span>SEARCH</span>
                                </div>
                                <div class={this.state.showForm? "top-search-form show-form" : "top-search-form"}>
                                    <form action="#" class="search-form" method="get" role="search"> 
										<label> 
											<span class="screen-reader-text">Search for:</span>
											<input type="text" name="s" placeholder="Search …" class="search-field"/> 
										</label> 
										<input type="submit" value="Search" class="search-submit"/>
									</form>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
        )
    }
}

export default Topbar
