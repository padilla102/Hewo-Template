import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Topbar } from "./components/topbar";
import { Logo } from "./components/logo";
import { Navigation } from "./components/navigation";
import { Footer } from "./components/footer";
import "./App.css"

export class App extends Component {
    render() {
        return (
            <Router>
                <div id="page-content-wrapper"> 
                    <Topbar />
                    <Logo />
                    <Navigation />
                    <div style={styleTest}></div>
                    <Footer />
                </div>
            </Router>
        )
    }
}

const styleTest = {
    height: "700px"
}

export default App
