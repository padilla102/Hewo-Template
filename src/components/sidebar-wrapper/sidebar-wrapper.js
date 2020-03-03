import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './sidebar-wrapper.css';

export class SidebarWrapper extends Component {
    render() {
        return (
            <div id="sidebar-wrapper">
                <div class="sidebar-inner">
                    <div class="off-canvas-close"><span>CLOSE</span></div>

                    <div class="sidebar-widget">

                        <div class="widget-title-cover">
                            <h4 class="widget-title"><span>Popular Articles</span></h4>
                        </div>

                        <ul class="menu" id="sidebar-menu">
                            <li class="menu-item"><Link to="#">Trending</Link></li>
                            <li class="menu-item menu-item-has-children"><Link to="#">Thinking</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item"><Link to="#">Home &amp; Living</Link></li>
                                    <li class="menu-item menu-item-has-children"><Link to="#">Lifestyle</Link>
                                        <ul class="sub-menu">
                                            <li class="menu-item"><Link to="#">Travel</Link></li>
                                            <li class="menu-item"><Link to="#">Gardening</Link></li>
                                            <li class="menu-item"><Link to="#">Inspirations</Link></li>										
                                        </ul>
                                    </li>
                                    <li class="menu-item"><Link to="#">Inspirations</Link></li>
                                    <li class="menu-item"><Link to="#">Gardening</Link></li>
                                </ul>
                            </li>
                            <li class="menu-item menu-item-has-children"><Link to="#">Inspirations</Link>
                                <ul class="sub-menu">
                                    <li class="menu-item"><Link to="#">House &amp; Living</Link></li>
                                    <li class="menu-item"><Link to="#">Travel</Link></li>
                                </ul>
                            </li>
                            <li class="menu-item"><Link to="#">Contact</Link></li>
                        </ul>

                    </div>

                    <div class="sidebar-widget">					
                        <div class="widget-title-cover"><h4 class="widget-title"><span>Trending</span></h4></div>

                        <div class="latest_style_2">  
                            <div class="latest_style_2_item_first">							                                                  
                                <figure class="alith_post_thumb_big">
                                    <span class="post_meta_categories_label">Legal, Blog</span>
                                    <a href="single.html"><img src="http://via.placeholder.com/700x475" alt=""/></a>
                                </figure>
                                <h3 class="alith_post_title">
                                    <a href="single.html"><strong>Nor again is there anyone who loves or pursues or desires to obtain</strong></a>
                                </h3>
                            </div>
                            <div class="latest_style_2_item">
                                <figure class="alith_news_img"><a href="single.html"><img src="http://via.placeholder.com/200x175" alt=""/></a></figure>
                                <h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam quis </a></h3>
                                
                                <div class="post_meta">			
                                    <p class="meta"><span>2 Sep, 2018</span> <span>268 views</span></p>
                                </div>
                            </div>
                            <div class="latest_style_2_item">
                                <figure class="alith_news_img"><a href="single.html"><img src="http://via.placeholder.com/200x175" alt=""/></a></figure>
                                <h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
                                <div class="post_meta">			
                                    <span class="meta_date">18 Sep, 2018</span>
                                </div>
                            </div>
                            <div class="latest_style_2_item">
                                <figure class="alith_news_img"><a href="single.html"><img src="http://via.placeholder.com/200x175" alt=""/></a></figure>
                                <h3 class="alith_post_title"><a href="single.html">Magna aliqua ut enim ad minim veniam</a></h3>
                                <div class="post_meta">			
                                    <span class="meta_date">18 Sep, 2018</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="sidebar-widget">					
                        <div class="widget-title-cover"><h4 class="widget-title"><span>Advertise</span></h4></div>
                        <div class="banner-adv">
                            <div class="adv-thumb">
                                <Link to="#">
                                    <img class="aligncenter" alt="img1" src="http://via.placeholder.com/647x898"/>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default SidebarWrapper
