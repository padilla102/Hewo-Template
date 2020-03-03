import React, { Component } from 'react';
import { LatestStyle2Item } from "../latest-style-2-item";

export class LatestStyle2 extends Component {
    renderLatestStyle = () =>{
        if(this.props.latests && this.props.latests.length > 0){
            return(
                <div class="latest_style_2">
                    { this.props.latests.map( (item,index) =>{
                            return(
                                <LatestStyle2Item key={index} item={item} />
                            )
                        })
                    }
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

export default LatestStyle2