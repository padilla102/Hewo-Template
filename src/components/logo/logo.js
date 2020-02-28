import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./logo.css";

export class Logo extends Component {
    render() {
        return (
            <div class="container-fluid">
				<div class="container">
					<div class="row">
                        <div class="col-12 col-md-12 header">
                            <h1 class="logo"><Link to="/">HELLO WORLD</Link></h1>
                            <p class="tagline">NEWSPAPER / MAGAZINE / PUBLISHER</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Logo
