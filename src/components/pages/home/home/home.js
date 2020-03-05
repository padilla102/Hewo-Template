import React, { Component } from 'react';
import { SidebarRight } from "../../../sidebar-right";



export class Home extends Component {
    render() {
        return (
            <div class="container-fluid">
				<div class="container">
                    <div class="primary margin-15">
                        <div class="row">            
                            <div class="col-md-8">
                                <div class="owl-carousel owl-theme js section_margin line_hoz animate-box" id="slideshow_face">
                                </div>
                                <div class="post_list post_list_style_1">
                                </div>
                            </div>
                            <SidebarRight/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home