import React, { Component } from 'react';
import './latest-style-2-item.css';

export class LatestStyle2Item extends Component {
    render() {
        return (
            <div class="latest_style_2_item">
                <figure class="alith_news_img">
                    <a href="single.html">
                        <img alt="" src={this.props.item.img} class="hover_grey" />
                    </a>
                </figure>
                <h3 class="alith_post_title">
                    <a href="single.html">{this.props.item.latest}</a>
                </h3>
                <div class="post_meta">			
                    <span class="meta_date">{this.props.item.postDate}</span>
                </div>
            </div>
        )
    }
}

export default LatestStyle2Item
