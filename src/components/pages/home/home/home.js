import React, { Component } from 'react';

export class Home extends Component {
    render() {
        return (
            <div class="container-fluid" style={styleTemp}>
				<div class="container animate-box">
                    <div class="bottom margin-15">
                        <div class="row">            
                            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-3">
                                <h1>HOME</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const styleTemp = {
    height: "700px"
}

export default Home