import React, { Component } from 'react';
import { SidebarRight } from "../../../sidebar-right";
import { PostList } from "../../../post-list";



export class Home extends Component {
    render() {
        return (
            <div class="container-fluid">
				<div class="container">
                    <div class="primary margin-15">
                        <div class="row">            
                            <div class="col-md-8">
                                <h1>hajdfjalsdjflajdlfjalskjdf</h1>
                                <div class="owl-carousel owl-theme js section_margin line_hoz animate-box" id="slideshow_face">
                                </div>
                                <PostList />
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