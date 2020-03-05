import React, { Component } from 'react';
import './latest-style-1-item.css';

export class LatestStyle1Item extends Component {
    render() {
        return (
            <div class="latest_style_1_item">                     
                <span class="item-count vertical-align">{(this.props.index + 1) + '.'}</span>
                <div class="alith_post_title_small">
                    <a href="single.html"><strong>{this.props.article.title}</strong></a>
                    <p class="meta"><span>{this.props.article.date}</span> <span>{this.props.article.views + 'views'}</span></p>
                </div>                                                  
                <figure class="alith_news_img">
                    <a href={this.props.article.link}>
                        <img src={this.props.article.imgsrc} alt={this.props.article.imgalt}/>
                    </a>
                </figure>
            </div>
        )
    }
}

export default LatestStyle1Item
