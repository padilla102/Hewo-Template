import React, { Component } from 'react';
import { LatestStyle1Item } from "../latest-style-1-item";
import './latest-style-1.css';

export class LatestStyle1 extends Component {
    
    renderArticles = () => {
        if (this.props.articles && this.props.articles.length > 0) {
            return (
                <div class="latest_style_1">
                    {
                        this.props.articles.map((article,index) => {
                            return (
                                <LatestStyle1Item  key={index} article={article} index={index} />
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
               {this.renderArticles()}
           </React.Fragment>
        )
    }
};

export default LatestStyle1
