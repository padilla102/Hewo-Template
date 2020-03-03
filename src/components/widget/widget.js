import React, { Component } from 'react';
import { LatestStyle3 } from "../latest-style-3";
import { LatestStyle2 } from "../latest-style-2";
import { BottomMenu } from "../bottom-menu";
import { InstagramGridWidget } from "../instagram-grid-widget";
import './widget.css';

const comments = [
    {comment: 'Frtuitous spluttered unlike ouch vivid blinked far inside'},
    {comment: 'Against and lantern where a and gnashed nefarious'},
    {comment: 'Ouch oh alas crud unnecessary invaluable some'},
    {comment: 'And far hey much hello and bashful one save less'}
];

const latests = [
    {img: 'http://via.placeholder.com/200x175', latest: 'Magna aliqua ut enim ad minim veniam'},
    {img: 'http://via.placeholder.com/200x175', latest: 'Magna aliqua ut enim ad minim veniam quis'},
    {img: 'http://via.placeholder.com/200x175', latest: 'Magna aliqua ut enim ad minim veniam quis'}
];

const bottomMenu = [
    {link:'#' , text: 'Business'},
    {link:'#' , text: 'Entertainment'},
    {link:'#' , text: 'Environment'},
    {link:'#' , text: 'Health'},
    {link:'#' , text: 'Life style'},
    {link:'#' , text: 'Politics'},
    {link:'#' , text: 'Technology'},
    {link:'#' , text: 'World'}
]

const instagramWidget = [
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'},
    {link: '#', imgTitle: '' , imgAlt: '', imgSrc: 'http://via.placeholder.com/200x175'}
];

export class Widget extends Component {
    render() {
        return (
            <div class="container-fluid">
				<div class="container animate-box fadeInUp animated-fast">
					<div class="bottom margin-15">
						<div class="row"> 

							<div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <div class="sidebar-widget">					
								    <div class="widget-title-cover">
                                        <h4 class="widget-title">
                                            <span>Most comments</span>
                                        </h4>
                                    </div>
								    <LatestStyle3 comments = {comments}/>
                                </div>
                            </div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">					
									<div class="widget-title-cover">
                                        <h4 class="widget-title">
                                            <span>Latest</span>
                                        </h4>
                                    </div>
									<LatestStyle2 latests = {latests} />
								</div>
							</div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">					
									<div class="widget-title-cover">
                                        <h4 class="widget-title">
                                            <span>Categories</span>
                                        </h4>
                                    </div>
									<BottomMenu bottomMenu={bottomMenu} />
								</div>
							</div>

                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
								<div class="sidebar-widget">					
									<div class="widget-title-cover">
                                        <h4 class="widget-title">
                                            <span>Instagram</span>
                                        </h4>
                                    </div>
									<InstagramGridWidget instagramWidget = {instagramWidget}/>
								</div>
							</div>

                        </div>
                    </div>
                </div>
            </div>


        )
    }
}

export default Widget
