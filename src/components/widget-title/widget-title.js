import React, { Component } from 'react';
import './widget-title.css';

export class WidgetTitle extends Component {
    render() {
        return (
            <div class="widget-title-cover">
                <h4 class="widget-title">
                    <span>{this.props.title}</span>
                </h4>
            </div>
        )
    }
}

export default WidgetTitle
