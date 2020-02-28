import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Topbar } from "../topbar";
import { Logo } from "../logo";
import { Navigation } from "../navigation";
import { Footer } from "../footer";
import { GotoTop } from "../goto-top";
import { Home } from "../home";
import { HomeGrid } from "../home-grid";
import { HomeSlide } from "../home-slide";
import { HomeCarausel } from "../home-carausel";
import { HomeBoxed } from "../home-boxed";
import { HomeRTL } from "../home-rtl";

import "./App.css"

export class App extends Component {
    render() {
        return (
            <Router>
                <div id="page-content-wrapper">
                    <Topbar />
                    <Logo />
                    <Navigation />
                    <Route path="/" exact component={Home}/>
                    <Route path="/home-grid" exact component={HomeGrid}/>
                    <Route path="/home-slide" exact component={HomeSlide}/>
                    <Route path="/home-carausel" exact component={HomeCarausel}/>
                    <Route path="/home-boxed" exact component={HomeBoxed}/>
                    <Route path="/home-rtl" exact component={HomeRTL}/>

                    <Footer />  
                    <GotoTop />                  
                </div>
            </Router>
        )
    }
}

export default App
