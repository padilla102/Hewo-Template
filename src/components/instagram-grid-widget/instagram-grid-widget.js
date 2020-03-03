import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './instagram-grid-widget.css';

export class InstagramGridWidget extends Component {
    renderInstagramWidget = () => {
        if (this.props.instagramWidget && this.props.instagramWidget.length > 0)  {
            return (
                <ul class="alith-instagram-grid-widget alith-clr alith-row alith-gap-10">
                    {
                        this.props.instagramWidget.map( (item, index )=> {
                            return (
                                <li key={index} class="wow fadeInUp alith-col-nr alith-clr alith-col-3 animated">
                                    <Link target="_blank" to={item.link}>
                                        <img title={item.imgTitle} alt={item.imgAlt} src={item.imgSrc}/>
                                    </Link>
                                </li>
                            )
                        })
                    }
                                    
                </ul>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.renderInstagramWidget()}
            </React.Fragment>
        )
    }
}

export default InstagramGridWidget