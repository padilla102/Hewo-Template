import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './alith_tags.css';

export class AlithTags extends Component {
    renderTags = tags => {
        if (tags && tags.length > 0) {
            return (
                <div class="alith_tags_all">
                {
                    tags.map((tag) => {
                        return(
                            <Link to={tag.link} class="alith_tagg">{tag.name}</Link>  
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
                {this.renderTags(this.props.tags)}
            </React.Fragment>
        )
    }
}

export default AlithTags;
