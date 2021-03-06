import React, { Component } from 'react';
import './spinner-cover.css';

export class SpinnerCover extends Component {
    
    render() {
        return (
            <div class={this.props.show? "spinner-cover":"spinner-cover-hidden"}>
                <div class="spinner-inner">
                    <div class="spinner">
                    <div class="rect1"></div>
                    <div class="rect2"></div>
                    <div class="rect3"></div>
                    <div class="rect4"></div>
                    <div class="rect5"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SpinnerCover
