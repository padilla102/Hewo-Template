import React, { Component } from 'react';
import { LatestStyle3Item } from "../latest-style-3-item";
import './latest-style-3.css';

export class LatestStyle3 extends Component {
    renderLatestStyle = () => {
        if(this.props.comments && this.props.comments.length > 0){
            return (
                <div class="latest_style_3">  
                    { this.props.comments.map( (item, index) =>{
                        return(
                            <LatestStyle3Item key={index} item={item} id={index} />
                        )
                    })}
                </div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderLatestStyle()}
            </React.Fragment>
        )
    }
}

export default LatestStyle3
