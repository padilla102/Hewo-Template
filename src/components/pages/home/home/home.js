import React, { Component } from 'react';
import { SidebarRight } from "../../../sidebar-right";
import { SliderSmallAlice } from "../../../carousel";
// import { PostList } from "../../../post-list";



export class Home extends Component {
    
    render() {

        return (
            <React.Fragment>
                <div class="container-fluid">
                    <div class="container animate-box">
                        <div class="row">	
                            <SliderSmallAlice />
                        </div>
                    </div>
                </div>
                <div class="container-fluid">
                    <div class="container">
                        <div class="primary margin-15">
                            <div class="row">            
                                <div class="col-md-8">
                                    
                                    {/* <PostList /> */}
                                </div>
                                <SidebarRight/>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Home