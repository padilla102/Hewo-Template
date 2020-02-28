import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './goto-top.css';

export class GotoTop extends Component {
    render() {
        return (
            <div class="gototop js-top">
				<Link to="#" class="js-gotop"><span>Take Me Top</span></Link>
			</div>
        )
    }
}

export default GotoTop