import React, { Component } from 'react';
import './latest-style-3-item.css';

export class LatestStyle3Item extends Component {
    render() {
        return (
            <div class="latest_style_3_item">                     
                <span class="item-count vertical-align">{(this.props.id + 1) + '.'}</span>
                <div class="alith_post_title_small">
                    <a href="single.html"><strong>{this.props.item.comment}</strong></a>
                </div>
            </div>
        )
    }
}

export default LatestStyle3Item
